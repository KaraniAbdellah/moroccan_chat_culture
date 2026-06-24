from qdrant_client import QdrantClient, models


# Get hypothetical Embedding Documents
def get_llm_documents(question, client_groq):
    """Generate a short hypothetical documentation passage for `question`."""
    
    completion = client_groq.chat.completions.create(
        model="llama-3.1-8b-instant",
        messages=[
            {
                "role": "system",
                "content": (
                    "نتا مساعد كيعطي معلومات مفيدة. جاوب بالدارجة المغربية اللي ساهلة ومفهومة. "
                    "عطي جواب واضح ومختصر بلا إطالة." 
                ),
            },
            {
                "role": "user",
                "content": question
            }
        ],
        temperature=0.7,
        max_completion_tokens=1024,
        top_p=1,
        stream=True,
        stop=None
    )

    res = [chunk.choices[0].delta.content for chunk in completion]
    res = [s for s in res if s]
    return "".join(res)



# Check Similarity Between Hype Doc And Chunks in VDB
# Hybrid Search with Reciprocal Rank Fusion
'''
    Qdrant Combine Keyword Search with Semantic Search
    - Step1: Keyword Search to Get Relevent Chunks
    - Step2: Semantic Search to Get Also Relevent Chunks
    - Fusion of Two Relevent Chunks: By USING RRF = Reciprocal Rank Fusion
'''
def get_relevent_chunks(hyde_documents, client_qdrant, collection_name, query):
    response = client_qdrant.query_points(
        collection_name=collection_name,
        prefetch=[
            # keyWord Search - Sparse Vector
            models.Prefetch(
                query=models.Document(
                    text=query,
                    model="Qdrant/bm25",
                ),
                using="sparse",
                limit=3,
            ),
            # Semantic Search - Dense Vector
            models.Prefetch(
                query=models.Document(
                    text=query,
                    model="sentence-transformers/all-MiniLM-L6-v2",
                ),
                using="dense",
                limit=3,
            )
        ],
        query=models.FusionQuery(fusion=models.Fusion.RRF),
        limit=3,
    )
    tokens = []
    for res in response.points:
        tokens.append(res.payload["text"])
    return tokens






def generate_response(question, context, client_groq):
    sys_prompt = f"""
        أنت مساعد متخصص في الإجابة على الأسئلة باللغة العربية، بما فيها الدارجة المغربية.
        استخدم السياق المقدم للإجابة على السؤال بدقة.
        
        التعليمات:
        - أجب دائماً بنفس لغة السؤال (الدارجة المغربية أو العربية الفصحى)
        - إذا كان السؤال بالدارجة المغربية، أجب بالدارجة المغربية
        - إذا ما عرفتيش الجواب، قول 'ما عرفتش'
        - استخدم المعلومات الموجودة في السياق فقط
        - كون مختصر وواضح في جوابك
        - إذا كان السياق لا يحتوي على معلومات كافية، قول 'المعلومات ناقصة فالسياق'

        السياق:
        {context}
    """
    
    completion = client_groq.chat.completions.create(
        model="llama-3.1-8b-instant",
        messages=[
            {
                "role": "system",
                "content": sys_prompt,
            },
            {
                "role": "user",
                "content": question
            }
        ],
        temperature=0.3,  # Lower = more factual, less hallucination
        max_completion_tokens=1024,
        top_p=1,
        stream=True,
        stop=None
    )

    res = []
    for chunk in completion:
        res.append(chunk.choices[0].delta.content)

    res = [s for s in res if s]
    res = "".join(res)
    return res




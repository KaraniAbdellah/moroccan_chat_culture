from fastapi import FastAPI
from pydantic import BaseModel
from groq import Groq
from dotenv import dotenv_values
from qdrant_client import QdrantClient
from groq import Groq
from backend.mcc_functions import generate_response, get_llm_documents, get_relevent_chunks



# Varaibles Declarations
config = dotenv_values(".env")
QDRANT_CLOUD_API_KEY = config.get("QDRANT_CLOUD_API_KEY")
QDRANT_CLOUD_ENDPOINT = config.get("QDRANT_CLOUD_ENDPOINT")
GROQ_API_KEY  = config["GROQ_API_KEY"]

collection_name = "Morrocan_Chat_Culture"

# Init Clients
client_qdrant = QdrantClient(
    url=QDRANT_CLOUD_ENDPOINT,
    api_key=QDRANT_CLOUD_API_KEY,
    cloud_inference=True
)
client_groq = Groq(api_key=GROQ_API_KEY)




# Create Entire Application Point
app = FastAPI()

# Define Class for Question
class Question(BaseModel):
    question: str



# Just for test Backend app
@app.get("/hello-world")
def greating():
    return {"MCC": "HELLO WORLD!"}


# A Post Request come here
@app.post("/get-response")
def get_reponse(q: Question):
    # Get Question
    question = q.question

    # Get hypothetical Embedding Documents
    hyde_documents = get_llm_documents(question=question, client_groq=client_groq)
    print(hyde_documents)

    # Get Relevent Chunks From Qdart
    relevent_chunks = get_relevent_chunks(hyde_documents=hyde_documents, client_qdrant=client_qdrant, collection_name=collection_name, query=question)
    print("relevent_chunks: ", relevent_chunks)

    # Get Response
    context = "".join(relevent_chunks)
    response = generate_response(question=question, context=context, client_groq=client_groq)
    print(response)

    return {"response": response}



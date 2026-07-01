# Get Python
FROM python:3.12-slim

# Create App Folder
RUN mkdir /app

# Move to app Folder
WORKDIR /app

# Copy Code for Backend
COPY ./backend_test/main.py ./backend_test/mcc_functions.py ./backend_test/requirements.txt ./backend_test/.env /app/

# Install the Following Packages Inside virtual enverment
RUN pip install -r requirements.txt


# docker listen to port 8000
EXPOSE 8000

# Run the Backend App --> docker run docker-image-name
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]


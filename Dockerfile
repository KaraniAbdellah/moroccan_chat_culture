# Get Dependecies
FROM python:3.9
FROM fastapi
FROM uvicorn

# Create App Folder
RUN mkdir /app

# Copy Code for Backend
COPY ./main.py ./mcc_functions.py ./requirements.txt .env /app/

# Move to app Folder
WORKDIR /app

# Install the Following Packages Inside virtual enverment
RUN python3 ./requirements.txt

# Run the Backend App
RUN uvicorn main:app


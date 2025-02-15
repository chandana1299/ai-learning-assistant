from fastapi import FastAPI 
import openai 
import firebase_admin 
from firebase_admin import credentials, firestore 
from pydantic import BaseModel 
import os


from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Hello, FastAPI!"}

@app.get("/items/{item_id}")
def read_item(item_id: int, q: str = None):
    return {"item_id": item_id, "q": q}


# Initialize Firestore
try:
    cred = credentials.Certificate(os.environ.get("GOOGLE_APPLICATION_CREDENTIALS"))
    firebase_admin.initialize_app(cred)
except Exception as e:
    print(f"Error initializing Firebase: {e}")

db = firestore.client()

openai.api_key = "671404256403"

class UserProgress(BaseModel):
    user_id: str
    topic: str
    score: int

@app.get("/")
def home():
    return {"message": "Welcome to AI-Powered Learning Assistant API"}

@app.get("/recommendations/{topic}")
def get_recommendations(topic: str):
    response = openai.ChatCompletion.create(
        model="gpt-4",
        messages=[{"role": "system", "content": f"Recommend study resources for {topic}"}]
    )
    return {"recommendations": response["choices"][0]["message"]["content"].split("\n")}

@app.get("/generate-quiz/{topic}")
def generate_quiz(topic: str):
    response = openai.ChatCompletion.create(
        model="gpt-4",
        messages=[{"role": "system", "content": f"Generate a 5-question quiz on {topic}"}]
    )
    return {"quiz": response["choices"][0]["message"]["content"].split("\n")}

@app.post("/save-progress")
def save_progress(data: UserProgress):
    db.collection("progress").document(data.user_id).set({
        "topic": data.topic,
        "score": data.score
    }, merge=True)
    return {"message": "Progress saved!"}

from flask import Flask, make_response

app = Flask(__name__)

@app.route('/')
def set_cookie():
    response = make_response("Cookie Set")
    response.set_cookie("my_cookie", "value", samesite="None", secure=True, httponly=True)
    return response

from dotenv import load_dotenv  
import os

# Load environment variables from a .env file
load_dotenv()

# Example: Fetch an API key from the .env file
API_KEY = os.getenv("API_KEY")

if not API_KEY:
    raise ValueError("API_KEY is missing. Please check your .env file.")


import streamlit as st
import requests
import os
from dotenv import load_dotenv
from urllib.parse import urlencode

# Load environment variables
load_dotenv()

GITHUB_CLIENT_ID = os.getenv("GITHUB_CLIENT_ID")
GITHUB_CLIENT_SECRET = os.getenv("GITHUB_CLIENT_SECRET")
REDIRECT_URI = "http://localhost:8501/oauth/callback"

# Function to get GitHub login URL
def get_github_login_url():
    params = {
        "client_id": GITHUB_CLIENT_ID,
        "redirect_uri": REDIRECT_URI,
        "scope": "user",
        "allow_signup": "true"
    }
    return f"https://github.com/login/oauth/authorize?{urlencode(params)}"

# Streamlit UI
st.title("Streamlit GitHub Authentication")

st.markdown(f"[Login with GitHub]({get_github_login_url()})")
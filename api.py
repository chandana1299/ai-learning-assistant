from flask import Flask, make_response

app = Flask(__name__)

@app.route('/')
def set_cookie():
    response = make_response("Cookie Set")
    response.set_cookie("my_cookie", "value", samesite="None", secure=True, httponly=True)
    return response

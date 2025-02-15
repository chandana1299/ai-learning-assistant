import streamlit as st


# Get query parameters
params = st.query_params
st.write("Query Parameters:", params)


st.title("AI-Powered Personalized Learning Assistant")
st.write("This assistant helps students with personalized study plans and assessments.")

# Example input and output
text = st.text_input("Ask the assistant something:")
if text:
    st.write(f"Response: AI-generated response for '{text}'")

from fastapi import FastAPI
from database import models
from database.db_connect import engine


app = FastAPI()

@app.get("/")
def hw():
    return {"message": "Hello World"}

models.Base.metadata.create_all(engine)
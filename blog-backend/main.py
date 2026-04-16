from fastapi import FastAPI
from database import models
from database.db_connect import engine
from router import post

app = FastAPI()
app.include_router(post.router)

models.Base.metadata.create_all(engine)
from fastapi import APIRouter, Depends, File , UploadFile
from database.db_connect import get_db
from sqlalchemy.orm.session import Session
from database.db_posts import create_post, get_all, delete
from router.schemas import PostBase
import string
import random
import shutil

router = APIRouter(
    prefix='/posts',
    tags=['Posts']
)

@router.post('/create-post')
def create_new_post(request: PostBase, db: Session = Depends(get_db)):
    return create_post(db, request)

@router.get('/get-all')
def get_all_posts(db: Session = Depends(get_db)):
    return get_all(db)

@router.delete('/delete/{id}')
def delete_post(id: int, db: Session = Depends(get_db)):    
    return delete(id, db)  

@router.post('/image-upload')
def upload_image(image: UploadFile = File(...)):
    letter = string.ascii_letters
    rand_letter= ''.join(random.choice(letter) for i in range(10))
    new =f'_{rand_letter}.'
    filename = new.join(image.filename.rsplit('.', 1))
    path = f'images/{filename}'

    with open(path, 'w+b') as buffer:
        shutil.copyfileobj(image.file, buffer)
    
    return {'filename': path}
from fastapi import APIRouter, Depends
from database.db_connect import get_db
from sqlalchemy.orm.session import Session
from database.db_posts import create_post, get_all, delete
from router.schemas import PostBase

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
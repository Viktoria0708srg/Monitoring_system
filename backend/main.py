from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routers import users_router, items_router

app = FastAPI(title="backend")

origins = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    # здесь потом вместо комментария добавить адрес рабочего сайта
]

app.add_middleware (
    CORSMiddleware,
    allow_origins=origins,         
    allow_credentials=True,         
    allow_methods=["*"],            
    allow_headers=["*"],            
)

app.include_router(users_router.router)
app.include_router(items_router.router)

@app.get("/")
def read_root():
    return {"message": "Backend is working"}
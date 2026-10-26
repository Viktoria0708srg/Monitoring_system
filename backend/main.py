from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routers import monitoring
from schemas.camera import Camera


app = FastAPI(
    title="Мониторинг ИТ-инфраструктуры",
    description="API мониторинга пунктов пропуска, камер и серверов",
    version="0.1.0",
)


origins = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
]


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(monitoring.router)


@app.get("/", tags=["Проверка работы"])
def read_root():
    return {"message": "Backend is working"}
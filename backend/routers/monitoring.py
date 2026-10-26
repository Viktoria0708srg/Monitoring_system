from fastapi import APIRouter

from schemas.camera import Camera


router = APIRouter(
    prefix="/api",
    tags=["Мониторинг"],
)


@router.get("/cameras", response_model=list[Camera])
def get_cameras():
    return [
        Camera(
            id=1,
            name="Камера 1",
            checkpoint_id=1,
            is_online=True,
            bitrate_mbps=4.5,
        )
    ]
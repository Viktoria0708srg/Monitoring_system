from fastapi import APIRouter
from schemas.camera import Camera

router = APIRouter(
    prefix="/api",
    tags=["Мониторинг"],
)

@router.get("/cameras", response_model=list[Camera])
def get_cameras():
    return [
        Camera(id=1, name="Камера 1", checkPoint_id=1, isOnline=True, bitrate_mbps=4.5)
    ]

@router.get("/stats")
def get_stats():

    cp_total, cp_online = 363, 150
    cam_total, cam_online = 20, 18
    srv_total, srv_norm = 50, 39
    vip_total, vip_active = 12, 7
    kcod_value = 69.9  # Процент КЦОД

    return {
        "checkpoints": {
            "total": cp_total, "online": cp_online,
            "percent": round((cp_online / cp_total) * 100),
            "errorText": f"{cp_total - cp_online} без связи" 
        },
        "cameras": {
            "total": cam_total, "online": cam_online,
            "percent": round((cam_online / cam_total) * 100),
            "errorText": f"{cam_total - cam_online} офлайн"
        },
        "servers": {
            "total": srv_total, "norm": srv_norm,
            "percent": round((srv_norm / srv_total) * 100),
            "errorText": f"{srv_total - srv_norm} предупреждений"
        },
        "kcod": {
            "availability": kcod_value,
            "days": 30,
            "statusText": "норма" if kcod_value > 70 else "авария"
        },
        "vipnet": {
            "active": vip_active, "total": vip_total,
            "percent": round((vip_active / vip_total) * 100),
            "errorText": f"{vip_total - vip_active} нестабильных"
        }
    }

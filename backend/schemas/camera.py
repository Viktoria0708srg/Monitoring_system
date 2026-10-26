from pydantic import BaseModel, Field

class Camera(BaseModel):
    id: int
    name: str
    checkPoint_id: int
    isOnline: bool
    bitrate_mbps: float=Field(ge=0)
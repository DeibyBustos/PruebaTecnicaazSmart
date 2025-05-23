from pydantic import BaseModel
from datetime import datetime

class DispositivoBase(BaseModel):
    modelo: str
    proveedor: str
    descripcion: str
    estado: int

class DispositivoCreate(DispositivoBase):
    pass

class Dispositivo(DispositivoBase):
    id: int
    creado_en: datetime

    class Config:
        orm_mode = True

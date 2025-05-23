from sqlalchemy import Column, Integer, String, Boolean, DateTime
from sqlalchemy.sql import func
from dispositivos.database import Base

class Dispositivo(Base):
    __tablename__ = "Dispositivos"

    id = Column(Integer, primary_key=True, index=True)
    modelo = Column(String(50), nullable=False)
    proveedor = Column(String(100), nullable=False)
    descripcion = Column(String(500))
    estado = Column(Boolean, nullable=False)
    creado_en = Column(DateTime, server_default=func.now())

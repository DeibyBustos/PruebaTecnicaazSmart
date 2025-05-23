from sqlalchemy.orm import Session
from dispositivos import models, schemas

def obtener_dispositivos(db: Session):
    return db.query(models.Dispositivo).all()

def crear_dispositivo(db: Session, dispositivo: schemas.DispositivoCreate):
    nuevo = models.Dispositivo(**dispositivo.dict())
    db.add(nuevo)
    db.commit()
    db.refresh(nuevo)
    return nuevo

from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from dispositivos.database import SessionLocal
from dispositivos import crud, schemas


router = APIRouter(prefix="/api", tags=["Dispositivos"])

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.get("/dispositivos/listado", response_model=list[schemas.Dispositivo])
def listar_dispositivos(db: Session = Depends(get_db)):
    return crud.obtener_dispositivos(db)

@router.post("/dispositivos/crear", response_model=schemas.Dispositivo)
def crear_dispositivo(dispositivo: schemas.DispositivoCreate, db: Session = Depends(get_db)):
    return crud.crear_dispositivo(db, dispositivo)

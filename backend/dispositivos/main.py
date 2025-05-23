from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dispositivos.database import Base, engine
from dispositivos.routes import router


Base.metadata.create_all(bind=engine)

app = FastAPI(title="API GPS - FastAPI + SQL Server")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"],  
    allow_headers=["*"],
)

app.include_router(router)

@app.get("/")
def root():
    return {"mensaje": "Bienvenido a la API de Dispositivos GPS"}

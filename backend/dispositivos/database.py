import os
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base
from dotenv import load_dotenv

env_file = ".env.docker" if os.getenv("ENVIRONMENT") == "docker" else ".env.local"
load_dotenv(env_file)

DATABASE_URL = os.getenv("SQL_SERVER_URL")

if not DATABASE_URL:
    raise ValueError("No se encontró SQL_SERVER_URL en el archivo .env correcto.")

engine = create_engine(
    DATABASE_URL,
    connect_args={"timeout": 15},
    fast_executemany=True
)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

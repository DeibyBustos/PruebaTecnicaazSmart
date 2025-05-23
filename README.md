# Proyecto azSmart — Dispositivos

Este proyecto es una aplicación web de gestión de dispositivos desarrollada con React en el frontend, FastAPI en el backend y SQL Server como base de datos. Todo el entorno está preparado para ejecutarse localmente o mediante contenedores con Docker

## Estructura del proyecto

├── backend                # API con FastAPI  
├── frontend               # Interfaz con React  
├── docker-compose.yml     # Orquestador de servicios  

## Requisitos

Node.js  
Python 3.11 o superior  
SQL Server instalado o vía Docker  
Docker y Docker Compose  

## Instalación en local sin Docker

### 1. Clonar el repositorio

bash

git clone https://github.com/tu-usuario/tu-repo.git

cd tu-repo


Para el backend

cd backend

python -m venv venv

source venv/bin/activate     # En Windows: venv\Scripts\activate

pip install -r requirements.txt


Luego de ello se debe crear archivos .env.local y .env.docker 

ejemplos de la estructura de los archivos

SQL_SERVER_URL=mssql+pyodbc://sa:S3guro!2025@localhost,1433/PruebaTecnica?driver=ODBC+Driver+17+for+SQL+Server # Para el local 

SQL_SERVER_URL=mssql+pyodbc://sa:S3guro!2025@host.docker.internal/PruebaTecnica?driver=ODBC+Driver+17+for+SQL+Server # Para el docker


Ya luego en la carpeta backend para iniciar el proyecto se ejecuta el siguiente comando

uvicorn dispositivos.main:app --reload



Para el Frontend

se ingresa a la carpeta y se ejecuta 

pnpm install # Instalar las dependencias

Pnpm run dev #Iniciar proyecto localmente 

Para crear la imagen y ejecutar en docker

docker-compose up --build


-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------


Script base de datos, inserción de datos, procedimientos, backup

CREATE DATABASE PruebaTecnica;

GO

USE PruebaTecnica;

GO


CREATE TABLE Dispositivos (

    id INT PRIMARY KEY IDENTITY(1,1),
    
    modelo VARCHAR(50) NOT NULL,
    
    proveedor VARCHAR(100) NOT NULL,
    
    descripcion VARCHAR(500),
    
    estado BIT NOT NULL,
    
    creado_en DATETIME DEFAULT GETDATE()
    
);

GO


CREATE PROCEDURE ActualizarEstadoDispositivo

    @id INT,
    
    @estado BIT
    
AS

BEGIN

    UPDATE Dispositivos
    
    SET estado = @estado
    
    WHERE id = @id;
    
END;

GO


INSERT INTO Dispositivos (modelo, proveedor, descripcion, estado) VALUES
('FMC650', 'Teltonika FMC650', 'Incorpora conectividad 4G LTE Cat 1 con módulo GNSS de alta precisión. Comunicación rápida y confiable.', 1),
('FMC920', 'Teltonika FMC920', 'Localizador GPS avanzado para monitoreo de activos móviles. Compatible con múltiples plataformas.', 1),
('FMC150', 'Teltonika FMC150', 'Solución robusta para gestión de flotas. Alta eficiencia y seguridad en logística.', 0);

GO


BACKUP DATABASE PruebaTecnica

TO DISK = 'C:\Backups\PruebaTecnica.bak';

GO







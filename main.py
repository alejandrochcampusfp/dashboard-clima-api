from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
import httpx

app = FastAPI()

# servirr archivos estáticos (HTML, JS, CSS)
app.mount("/static", StaticFiles(directory="static"), name="static")

@app.get("/api/clima")
async def obtener_clima():
    # coordenadas de ejemplo: Madrid, Barcelona, Valencia
    # usamos la API gratuita de Open-Meteo
    url = "https://api.open-meteo.com/v1/forecast?latitude=40.41,41.38,39.46&longitude=-3.70,2.17,-0.37&current=temperature_2m,relative_humidity_2m,wind_speed_10m"
    
    async with httpx.AsyncClient() as client:
        response = await client.get(url)
        data = response.json()
        
    return data
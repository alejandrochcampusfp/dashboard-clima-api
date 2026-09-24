# 🌤️ Dashboard de Clima en Tiempo Real

Aplicación web desarrollada con **FastAPI (Python)** y **JavaScript** que consume datos meteorológicos en directo mediante una API pública externa (Open-Meteo).

## 🚀 Tecnologías utilizadas
* **Backend:** Python, FastAPI, Uvicorn, Httpx
* **Frontend:** HTML5, Tailwind CSS, JavaScript (Fetch API)
* **Despliegue:** Docker, Render


## Estructura del proyecto:

```text
dashboard-clima-api/
├── main.py            # Backend en FastAPI
├── requirements.txt   # Librerías necesarias
├── Dockerfile         # Configuración para Docker
└── static/
    ├── index.html     # Interfaz visual
    └── script.js      # Lógica de JavaScript y gráficos
````



## ⚙️ Cómo ejecutarlo en local:

1. Instala las dependencias:
pip install -r requirements.txt

2. Arranca el servidor local con Uvicorn:
python -m uvicorn main:app --reload

3. Abre en tu navegador: http://127.0.0.1:8000/static/index.html
<<<<<<< Updated upstream






    
=======
>>>>>>> Stashed changes

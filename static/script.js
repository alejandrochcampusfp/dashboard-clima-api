async function cargarClima() {
    try {
        const respuesta = await fetch('/api/clima');
        const ciudades = await respuesta.json();
        
        const contenedor = document.getElementById('contenedor-tarjetas');
        contenedor.innerHTML = ''; // limpiar carga

        // nombres de las ciudades correspondientes a las coordenadas
        const nombresCiudades = ["Madrid", "Barcelona", "Valencia"];

        ciudades.forEach((item, index) => {
            const nombre = nombresCiudades[index] || "Ciudad";
            const temp = item.current.temperature_2m;
            const humedad = item.current.relative_humidity_2m;
            const viento = item.current.wind_speed_10m;

            const tarjeta = `
                <div class="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-lg hover:border-cyan-500 transition-all">
                    <h2 class="text-xl font-semibold text-cyan-300 mb-4">${nombre}</h2>
                    <p class="text-4xl font-bold mb-2">${temp}°C</p>
                    <div class="text-sm text-slate-300 space-y-1">
                        <p>Humedad: <span class="font-medium text-white">${humedad}%</span></p>
                        <p>Viento: <span class="font-medium text-white">${viento} km/h</span></p>
                    </div>
                </div>
            `;
            contenedor.innerHTML += tarjeta;
        });
    } catch (error) {
        console.error("Error al cargar los datos:", error);
    }
}

// caargar al iniciar la pagina
cargarClima();
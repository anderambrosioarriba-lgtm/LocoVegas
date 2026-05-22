const apiKey = "b3c5bcbcd3cf35c2cb14ca8e5560a5d9";
const municipio = "Bilbao,ES"; // Añadimos ,ES para ser más específicos
const url = `https://api.openweathermap.org/data/2.5/weather?q=${municipio}&appid=${apiKey}&units=metric&lang=es`;

fetch(url)
  .then(response => {
    if (!response.ok) {
       throw new Error(`Error de API: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log("Datos recibidos:", data); // Mira esto en la consola (F12)
    const temp = Math.round(data.main.temp);
    const desc = data.weather[0].description;
    const icono = data.weather[0].icon;
    
    document.getElementById("clima-info").innerHTML = `
      <div style="display: flex; align-items: center; gap: 5px;">
        <img src="https://openweathermap.org/img/wn/${icono}.png">
        <span style="color: white; font-size: 1.2rem;">${temp}°C</span>
      </div>
      <p style="color: #9a8a7a; text-transform: capitalize; margin: 0;">${desc}</p>
    `;
  })
  .catch(error => {
    console.error("Detalles del error:", error);
    document.getElementById("clima-info").innerHTML = "Servicio no disponible";
  });
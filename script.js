async function trackIP() {
    const ip = document.getElementById('ipInput').value;
    const url = `https://ipapi.co/${ip}/json/`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
      displayResult(data);
      console.log(data)
      initMap(data.latitude, data.longitude);
    } catch (error) {
      console.error('Error fetching IP information:', error);
      document.getElementById('result').innerHTML = '<p>Error fetching IP information.</p>';
    }
  }
  
  function displayResult(data) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
      <h2>IP Information</h2>
      <p><strong>IP:</strong> ${data.ip}</p>
      <p><strong>City:</strong> ${data.city}</p>
      <p><strong>Region:</strong> ${data.region}</p>
      <p><strong>Country:</strong> ${data.country_name}</p>
      <p><strong>Latitude:</strong> ${data.latitude}</p>
      <p><strong>Longitude:</strong> ${data.longitude}</p>
    `;
  }
  
  function initMap(lat, lng) {
    const map = L.map('map').setView([lat, lng], 10);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    L.marker([lat, lng]).addTo(map)
      .bindPopup(`Location: ${lat}, ${lng}`)
      .openPopup();
  }

  function refreshPage() {
    
     window.location.reload();
    
    }
  
let config = {
    minZoom: 9,
    maxZoom: 15,
  };

const lat = 33.8352266;
const lng = -117.8212932;

const myMap = document.getElementById('map');

const map = L.map(document.getElementById('map'), config).setView([lat, lng], 18);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

L.marker([33.837299, -117.816117]).addTo(map).bindPopup("Anahiem Hills, CA").openPopup();

L.control
  .scale({
    imperial: false,
  })
  .addTo(map);
let config = {
  minZoom: 9,
  maxZoom: 15,
  zoom: 18 // add zoom property
};

const lat = 33.8352266;
const lng = -117.8212932;

const myMap = document.getElementById('map');

const map = L.map(myMap, config).setView([lat, lng], config.zoom); // pass config as third argument

// Leaflet map of Orange / Anahiem Hills
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

L.marker([33.837299, -117.816117]).addTo(map).bindPopup("Anaheim Hills, CA").openPopup();

L.control.scale({
  imperial: false,
}).addTo(map);

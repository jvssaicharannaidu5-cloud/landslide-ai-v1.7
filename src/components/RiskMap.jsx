import {
  MapContainer,
  TileLayer,
  CircleMarker,
  Popup
} from "react-leaflet";

import "leaflet/dist/leaflet.css";

function RiskMap() {

  const locations = [
    {
      name: "Gangtok",
      lat: 27.3314,
      lng: 88.6139,
      risk: "HIGH",
      probability: 76
    },
    {
      name: "Tawang",
      lat: 27.5861,
      lng: 91.8594,
      risk: "VERY HIGH",
      probability: 88
    },
    {
      name: "Shillong",
      lat: 25.5788,
      lng: 91.8933,
      risk: "MODERATE",
      probability: 52
    }
  ];

  return (
    <div className="map-container">

      <MapContainer
        center={[26.8, 91.5]}
        zoom={6}
        style={{ height: "500px", width: "100%" }}
      >

        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {locations.map((location) => (

          <CircleMarker
            key={location.name}
            center={[location.lat, location.lng]}
            radius={12}
          >

            <Popup>

              <h3>📍 {location.name}</h3>

              <p>
                Risk Level:
                <strong> {location.risk}</strong>
              </p>

              <p>
                AI Probability:
                <strong> {location.probability}%</strong>
              </p>

              <p>
                🌧️ Rainfall: 156 mm
              </p>

            </Popup>

          </CircleMarker>

        ))}

      </MapContainer>

    </div>
  );
}

export default RiskMap;
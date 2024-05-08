import { MapContainer, TileLayer } from "react-leaflet";
import LeafletLocationMarker from "./LeafletLocationMarker";

export default function LeafletMap() {
  const position = [51.505, -0.09];
  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={true}
      style={{ height: "50vh" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LeafletLocationMarker />
    </MapContainer>
  );
}

import { Marker, Popup } from "react-leaflet";

export default function LeafletMarker({ position, text }) {
  return (
    <Marker position={position}>
      <Popup>{text}</Popup>
    </Marker>
  );
}

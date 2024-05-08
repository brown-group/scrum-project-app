import React, { useState } from "react";
import { useMapEvents } from "react-leaflet";
import LeafletMarker from "./LeafletMarker";

export default function LeafletLocationMarker() {
  const [position, setPosition] = useState(null);
  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  return position === null ? null : (
    <LeafletMarker position={position} text={"You are here"} />
  );
}

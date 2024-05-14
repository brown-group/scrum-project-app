import React from "react";
import { Polyline } from "react-leaflet";

export default function LeafletPolyline({ position }) {
  const polyline = [[55.6043853, 13.0017585], position];
  const limeOptions = { color: "lime" };
  return <Polyline pathOptions={limeOptions} positions={polyline} />;
}

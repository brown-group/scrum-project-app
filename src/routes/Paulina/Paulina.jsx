import LeafletMap from "./components/LeafletMap";

export default function Paulina() {
  return (
    <>
      <div className="container my-5">
        <h1>Find your location</h1>
        <div className="row">
          <div className="col-12 col-md-6">
            Click the map to show a marker at your detected location
          </div>
          <div className="col-12 col-md-6">
            <LeafletMap />
          </div>
        </div>
      </div>
    </>
  );
}

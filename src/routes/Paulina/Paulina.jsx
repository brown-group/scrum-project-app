import LeafletMap from "./components/LeafletMap";

export default function Paulina() {
  return (
    <>
      <div className="container my-5">
        <h1>Lorem ipsum</h1>
        <div className="row">
          <div className="col-12 col-md-6">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Perspiciatis nostrum iusto vel dolore quis! Animi error dolorem
            laudantium esse, laboriosam sunt quas, alias, quam minima ducimus
            commodi iusto facilis perferendis!
          </div>
          <div className="col-12 col-md-6">
            <LeafletMap />
          </div>
        </div>
      </div>
    </>
  );
}

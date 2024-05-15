import "bootstrap/dist/css/bootstrap.min.css";

export default function Index() {
  return (
    <div className="container mt-5">
      <div className="text-center mb-4">
        <h1>Welcome to PrismaGo</h1>
        <p className="lead">Your All-in-One Productivity Companion</p>
      </div>

      <div className="row">
        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Color Palette Generator</h5>
              <p className="card-text">
                Unleash your creativity with PrismaGo's Color Palette Generator
                powered by Colormind API. Perfect for designers, artists, and
                anyone who loves working with colors.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Find your location</h5>
              <p className="card-text">
                Find your location using PrismaGo's Location Finder. This
                feature lets you find Lexicon as the crow flies.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Portfolio</h5>
              <p className="card-text">
                Stand out in the job market with PrismaGo's Portfolio. Tailored
                for job seekers and professionals.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Weather App</h5>
              <p className="card-text">
                Stay ahead of the weather with PrismaGo's Weather App. Whether
                you're planning your day or preparing for a trip, this feature
                provides all the weather information you need. Get real-time
                weather updates for any city worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-4">
        <h2>Why PrismaGo?</h2>
        <p className="lead">
          PrismaGo is designed with user convenience in mind, integrating these
          four powerful features into one intuitive app. It's perfect for anyone
          who values efficiency and wants to have a suite of essential tools at
          their fingertips. Use PrismaGo today and transform the way you design,
          navigate, apply for jobs, and check the weather.
        </p>
      </div>
    </div>
  );
}

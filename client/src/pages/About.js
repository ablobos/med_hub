import React from "react";

export default function About() {
  return (
    <main>
      <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <svg
              className="bd-placeholder-img"
              width="100%"
              height="100%"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <rect width="100%" height="100%" fill="#777" />
            </svg>

            <div className="container">
              <div className="carousel-caption text-start">
                <h1>About MedHub.</h1>
                <p>
                  MedHub is a global provider of affordable medical supplies,
                  dedicated to improving healthcare access for everyone.
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <svg
              className="bd-placeholder-img"
              width="100%"
              height="100%"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <rect width="100%" height="100%" fill="#777" />
            </svg>

            <div className="container">
              <div className="carousel-caption">
                <h1>Our Mission.</h1>
                <p>
                  Our mission is to provide high-quality medical supplies at
                  competitive prices, ensuring everyone has access to the
                  healthcare they need.
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <svg
              className="bd-placeholder-img"
              width="100%"
              height="100%"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <rect width="100%" height="100%" fill="#777" />
            </svg>

            <div className="container">
              <div className="carousel-caption text-end">
                <h1>Charitable Work.</h1>
                <p>
                  Through our charitable organizations, we focus on delivering
                  medical supplies to areas in need, making a difference in
                  people's lives around the world.
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="container marketing">
        <h2 className="text-center mt-5">Meet Our Founders</h2>
        <div className="row mt-4">
          {/* Replace the names, descriptions, and GitHub repo links for each founder */}
          {[
            { name: "Uchenna Obicheta", description: "Backend Boss", github: "https://github.com/founder1" },
            { name: "Matthew Kaye", description: "Front-End Fighter", github: "https://github.com/founder2" },
            { name: "Gavin Price", description: "Functionality Frontiersman", github: "https://github.com/founder3" },
            { name: "Abdiel Villalobos", description: "Style Star", github: "https://github.com/founder4" },
            { name: "Seiya Miyazaki", description: "Front-End Fighter", github: "https://github.com/founder5" },
          ].map((founder, index) => (
            <div className="col-lg-4 mb-4" key={index}>
              <svg
                className="bd-placeholder-img rounded-circle"
                width="140"
                height="140"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label={`Placeholder: ${founder.name}`}
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#777" />
                <text x="50%" y="50%" fill="#777" dy=".3em">
                  140x140
                </text>
              </svg>

              <h2 className="fw-normal">{founder.name}</h2>
              <p>{founder.description}</p>
              <p>
                <a className="btn btn-secondary" href={founder.github} target="_blank" rel="noreferrer">
                  View GitHub &raquo;
                </a>
              </p>
            </div>
          ))}
        </div>

        <hr className="featurette-divider" />

        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading fw-normal lh-1">Affordable Medical Supplies</h2>
            <p className="lead">
              At MedHub, we believe that everyone should have access to affordable medical supplies.
              We work tirelessly to offer high-quality products at competitive prices, ensuring that
              healthcare is accessible to all.
            </p>
          </div>
          <div className="col-md-5">
            <svg
              className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              width="500"
              height="500"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: 500x500"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#eee" />
              <text x="50%" y="50%" fill="#aaa" dy=".3em">
              500x500
          </text>
        </svg>
      </div>
    </div>

    <hr className="featurette-divider" />

    <div className="row featurette">
      <div className="col-md-7 order-md-2">
        <h2 className="featurette-heading fw-normal lh-1">Supporting Charitable Organizations</h2>
        <p className="lead">
          MedHub actively collaborates with charitable organizations to provide medical supplies to those in need.
          We understand the impact of healthcare on the lives of many, and we're committed to making a positive difference
          in communities across the globe.
        </p>
      </div>
      <div className="col-md-5 order-md-1">
        <svg
          className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
          width="500"
          height="500"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Placeholder: 500x500"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        >
          <title>Placeholder</title>
          <rect width="100%" height="100%" fill="#eee" />
          <text x="50%" y="50%" fill="#aaa" dy=".3em">
            500x500
          </text>
        </svg>
      </div>
    </div>

    <hr className="featurette-divider" />

    <div className="row featurette">
      <div className="col-md-7">
        <h2 className="featurette-heading fw-normal lh-1">Focusing on Areas in Need</h2>
        <p className="lead">
          MedHub prioritizes providing medical supplies to areas in need. We identify regions with limited access to healthcare
          resources and work diligently to deliver essential medical supplies. Our mission is to promote better health and well-being
          for everyone, no matter where they live.
        </p>
      </div>
      <div className="col-md-5">
        <svg
          className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
          width="500"
          height="500"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Placeholder: 500x500"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        >
          <title>Placeholder</title>
          <rect width="100%" height="100%" fill="#eee" />
          <text x="50%" y="50%" fill="#aaa" dy=".3em">
            500x500
          </text>
        </svg>
      </div>
    </div>

    <hr className="featurette-divider" />
  </div>
</main>

    );
    }

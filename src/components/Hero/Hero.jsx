import "../../styles/Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">

        <h1>
          Build. Create. Connect.
        </h1>

        <p>
          Welcome to Stone Code Studio, a creative platform
          where developers, designers, musicians,
          gamers, creators and teams collaborate,
          build amazing projects and grow together.
        </p>

        <div className="hero-buttons">

          <button className="primary-btn">
            Get Started
          </button>

          <button className="secondary-btn">
            Learn More
          </button>

        </div>

      </div>

      <div className="hero-image">

        <div className="logo-placeholder">
          Stone Code Studio
        </div>

      </div>

    </section>
  );
}

export default Hero;
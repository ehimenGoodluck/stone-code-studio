import "../../styles/Features.css";
import features from "../../data/features";

function Features() {
  return (
    <section className="features">

      <h2>Everything You Need In One Studio</h2>

      <div className="feature-grid">

        {features.map((feature) => (

          <div className="feature-card" key={feature.id}>

            <h3>
              {feature.icon} {feature.title}
            </h3>

            <p>
              {feature.description}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Features;
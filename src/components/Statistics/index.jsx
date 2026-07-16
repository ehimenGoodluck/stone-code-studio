import "../../styles/Statistics.css";
import statistics from "../../data/statistics";

function Statistics() {
  return (
    <section className="statistics">

      <h2>Stone Code Studio by the Numbers</h2>

      <div className="statistics-grid">

        {statistics.map((item) => (

          <div className="statistics-card" key={item.id}>

            <h1>{item.icon}</h1>

            <h3>{item.number}</h3>

            <p>{item.title}</p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Statistics;
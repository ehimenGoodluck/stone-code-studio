import Navbar from "../components/Navbar/Navbar";

function Home() {
  return (
    <>
      <Navbar />

      <div style={{ padding: "60px", textAlign: "center" }}>
        <h1>Welcome to Stone Code Studio</h1>

        <p>Build. Create. Connect.</p>
      </div>
    </>
  );
}

export default Home;
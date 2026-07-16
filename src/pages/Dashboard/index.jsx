import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

function Dashboard() {
  const { user, loading, signOut } = useAuth();
  const navigate = useNavigate();

  if (loading) {
    return <p className="auth-page">Loading your dashboard…</p>;
  }

  if (!user) {
    return <p className="auth-page">Please sign in to access the dashboard.</p>;
  }

  const handleSignOut = async () => {
    await signOut();
    navigate("/login");
  };

  return (
    <section className="dashboard-shell">
      <h1>📊 Dashboard</h1>
      <p>Welcome back, {user.email || "creator"}.</p>
      <p>Your studio workspace is ready.</p>
      <button type="button" onClick={handleSignOut}>
        Sign out
      </button>
    </section>
  );
}

export default Dashboard;
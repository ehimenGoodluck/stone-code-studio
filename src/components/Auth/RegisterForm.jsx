import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import "../../styles/Auth.css";

function RegisterForm() {
  const [fullName, setFullName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

  const { signUp } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");
    setMessage("");

    const { error: authError } = await signUp(
    email,
    password,
    username,
    fullName
    );

    if (authError) {
      setError(authError.message || "Unable to register right now.");
      setLoading(false);
      return;
    }

    setMessage("Account created! You can sign in now.");
    setLoading(false);
    navigate("/login");
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2>Create your account</h2>
      <p className="auth-subtitle">Join Stone Code Studio and build your creative hub.</p>

      {error ? <p className="auth-error">{error}</p> : null}
      {message ? <p className="auth-error" style={{ background: "#dcfce7", color: "#166534" }}>{message}</p> : null}

      <label className="auth-field">
        <span>Full Name</span>
        <input
          type="text"
          value={fullName}
          onChange={(event) => setFullName(event.target.value)}
          placeholder="Enter your full name"
          required
        />
      </label>

      <label className="auth-field">
        <span>Username</span>
        <input
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          placeholder="Choose a username"
          required
        />
      </label>

      <label className="auth-field">
        <span>Email</span>
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@example.com"
          autoComplete="email"
          required
        />
      </label>

      <label className="auth-field">
        <span>Password</span>
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Create a password"
          autoComplete="new-password"
          required
        />
      </label>

      <button type="submit" className="auth-button" disabled={loading}>
        {loading ? "Creating account..." : "Create account"}
      </button>

      <p className="auth-link">
        Already have an account? <Link to="/login">Sign in</Link>
      </p>
    </form>
  );
}

export default RegisterForm;

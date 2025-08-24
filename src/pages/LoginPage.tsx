// src/pages/LoginPage.tsx
import React, { useState } from "react";
import { auth, googleProvider } from "../services/firebaseConfig";
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Đăng nhập bằng Google
  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      alert("✅ Đăng nhập Google thành công!");
    } catch (err: any) {
      setError(err.message);
    }
  };

  // Đăng nhập bằng Email/Password
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("✅ Đăng nhập thành công!");
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <div style={{ width: "400px", padding: "30px", border: "1px solid #ccc", borderRadius: "10px", background: "#fff" }}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>🔐 Đăng nhập</h2>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <form onSubmit={handleLogin}>
          <div style={{ marginBottom: "15px" }}>
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: "100%", padding: "10px", marginTop: "5px" }}
              required
            />
          </div>

          <div style={{ marginBottom: "15px" }}>
            <label>Mật khẩu</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: "100%", padding: "10px", marginTop: "5px" }}
              required
            />
          </div>

          <button type="submit" style={{ width: "100%", padding: "10px", background: "#007bff", color: "#fff", border: "none", borderRadius: "5px" }}>
            Đăng nhập
          </button>
        </form>

        <hr style={{ margin: "20px 0" }} />

        <button
          onClick={handleGoogleLogin}
          style={{
            width: "100%",
            padding: "10px",
            background: "#db4437",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Đăng nhập với Google
        </button>
      </div>
    </div>
  );
};

export default LoginPage;

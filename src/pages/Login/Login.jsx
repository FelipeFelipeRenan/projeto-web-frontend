import React, { useState } from "react";
import "./Login.scss";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Simples lógica de autenticação (substitua por lógica real)
    if (username === "usuario" && password === "senha") {
      // Navega para a página home se o login for bem-sucedido
    } else {
      alert("Credenciais inválidas");
    }
  };

  return (
    <div className="login-container">
      <h2>Faça login</h2>
      <form>
        <label>
          Usuário:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Senha:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="button" onClick={handleLogin}>
          Entrar
        </button>
      </form>
    </div>
  );
}

export default Login;

import { useState } from "react";
import { Button } from "primereact/button";
import { Password } from "primereact/password";
import { InputText } from "primereact/inputtext";

import "./Login.scss";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {
    // Simples lógica de autenticação (substitua por lógica real)
    if (username === "usuario" && password === "senha") {
      // Navega para a página home se o login for bem-sucedido

      navigate("/home");
    } else {
      alert("Credenciais inválidas");
    }
  };

  return (
    <div
      className={
        "surface-ground flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden p-input-filled"
      }
    >
      <div className="flex flex-column align-items-center justify-content-center">
        <div
          style={{
            opacity: "100%",
            borderRadius: "5%",
            padding: "1%",
            background: "#F3F4",
          }}
        >
          <div
            className="w-full surface-card py-8 px-5 sm:px-8"
            style={{ borderRadius: "5%" }}
          >
            <div className="text-center mb-5">
              <img
                src="#"
                alt="Nossa logo"
                height="50"
                className="mb-5 w-16rem flex-shrink-0"
              />
              <div className="text-900 text-3xl font-medium mb-3">
                NOME DO SISTEMA
              </div>
              <span className="text-600 font-medium">
                Faça seu login para continuar
              </span>
            </div>

            <div>
              <label
                htmlFor="email1"
                className="block text-900 text-xl font-medium mb-2"
              >
                Email
              </label>
              <InputText
                id="email1"
                type="text"
                placeholder="Email"
                className="w-full md:w-30rem mb-5"
                style={{ padding: "1rem" }}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />

              <label
                htmlFor="password1"
                className="block text-900 font-medium text-xl mb-2"
              >
                Senha
              </label>
              <Password
                inputId="password1"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Senha"
                toggleMask
                feedback={false}
                className="w-full mb-5"
                inputClassName="w-full p-3 md:w-30rem"
              />

              <div className="flex align-items-center justify-content-between mb-5 gap-5">
                <a
                  className="font-medium no-underline ml-2 text-right cursor-pointer"
                  style={{ color: "var(--primary-color)" }}
                >
                  Esqueci minha senha
                </a>
              </div>
              <Button
                label="Acessar"
                className="w-full p-3 text-xl"
                onClick={handleLogin}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

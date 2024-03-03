import { useState } from "react";
import { Button } from "primereact/button";
import { Password } from "primereact/password";
import { InputText } from "primereact/inputtext";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../contexts/UserContext";
import { Image } from "primereact/image";
import "./Login.scss";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { users, loginUser } = useUser();
  const navigate = useNavigate();

  const handleLogin = () => {
    const loggedIn = loginUser(email, password);
    if (loggedIn) {
      const currentUser = users.find((user) => user.email === email);
      navigate(`/userhome/${currentUser.id}`); // Redireciona para a página userHome do usuário logado
    } else {
      setError("Credenciais inválidas");
    }
  };

  return (
    <div className="surface-ground flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden p-input-filled">
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
              <div className="text-900 text-3xl font-medium mb-3">
                <Image src="./src/assets/mascote.png" alt="Image" width="250" />
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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

              {error && <div className="text-red-600">{error}</div>}

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

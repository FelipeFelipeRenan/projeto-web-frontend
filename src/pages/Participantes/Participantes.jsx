import { useState } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";

export default function Participantes() {
  const [selectedCargo, setSelectedCargo] = useState(null);
  const cargos = [
    { name: "Cargo 1", code: "0" },
    { name: "Cargo 2", code: "1" },
    { name: "Cargo 3", code: "2" },
    { name: "Cargo 4", code: "3" },
    { name: "Cargo 5", code: "4" },
  ];

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
                Cadastro dos participantes
              </div>
            </div>

            <div>
              <label
                htmlFor="nome1"
                className="block text-900 text-xl font-medium mb-2"
              >
                Nome
              </label>
              <InputText
                id="nome1"
                type="text"
                placeholder="Nome"
                className="w-full md:w-30rem mb-5"
                style={{ padding: "1rem" }}
              />

              <label
                htmlFor="email1"
                className="block text-900 text-xl font-medium mb-2"
              >
                E-mail
              </label>
              <InputText
                id="email1"
                type="text"
                placeholder="Email"
                className="w-full md:w-30rem mb-5"
                style={{ padding: "1rem" }}
              />

              <label
                htmlFor="cargo"
                className="block text-900 font-medium text-xl mb-2"
              >
                Cargo
              </label>
              <Dropdown
                value={selectedCargo}
                onChange={(e) => setSelectedCargo(e.value)}
                options={cargos}
                optionLabel="name"
                placeholder="Selecione o cargo"
                className="w-full"
              />

              <div style={{ margin: "8% 0 0 0 " }}>
                <Button
                  label="Cadastrar participante"
                  className="w-full p-3 text-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { useState } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { InputTextarea } from "primereact/inputtextarea";

export default function Task() {
  const [selectedPrioridade, setSelectedPrioridade] = useState(null);
  const [value, setValue] = useState("");

  const prioridades = [
    { name: "Alta", code: "0" },
    { name: "Média", code: "1" },
    { name: "Baixa", code: "2" },
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
                Cadastro das tasks
              </div>
            </div>

            <label
              htmlFor="titulo"
              className="block text-900 text-xl font-medium mb-2"
            >
              Titulo
            </label>
            <InputText
              id="titulo"
              type="text"
              placeholder="Nome"
              className="w-full md:w-30rem mb-5"
              style={{ padding: "1rem" }}
            />
            <label
              htmlFor="prioridade"
              className="block text-900 font-medium text-xl mb-2"
            >
              Prioridade
            </label>
            <Dropdown
              value={selectedPrioridade}
              onChange={(e) => setSelectedPrioridade(e.value)}
              options={prioridades}
              optionLabel="name"
              placeholder="Prioridade"
              className="w-full"
            />
            <div className="w-full" style={{ marginTop: "5%" }}>
              <label
                htmlFor="detalhes"
                className="block text-900 font-medium text-xl mb-2"
              >
                Detalhes
              </label>
              <InputTextarea
                autoResize
                value={value}
                onChange={(e) => setValue(e.target.value)}
                rows={5}
                cols={30}
                className="w-full"
              />
            </div>
            <div style={{ margin: "8% 0 0 0 " }}>
              <Button label="Cadastrar task" className="w-full p-3 text-xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

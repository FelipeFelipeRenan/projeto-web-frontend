import { useState } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { MultiSelect } from "primereact/multiselect";
import { InputTextarea } from "primereact/inputtextarea";

export default function Task() {
  const [selectedPrioridade, setSelectedPrioridade] = useState(null);
  const [selectedParticipantes, setSelectedParticipantes] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [value, setValue] = useState("");
  const participantes = [
    { name: "Participante 1", code: "0" },
    { name: "Participante 1", code: "1" },
    { name: "Participante 1", code: "2" },
    { name: "Participante 1", code: "3" },
    { name: "Participante 1", code: "4" },
  ];
  const prioridades = [
    { name: "Alta", code: "0" },
    { name: "Média", code: "1" },
    { name: "Baixa", code: "2" },
  ];
  const status = [
    { name: "Aberta", code: "0" },
    { name: "Fechada", code: "1" },
    { name: "Disponível", code: "2" },
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

            <div>
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
              <div className="flex mb-2">
                <div className="w-1/2 mr-2" style={{ width: "48%" }}>
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
                </div>
                <div className="w-1/2 ml-2" style={{ width: "48%" }}>
                  <label
                    htmlFor="status"
                    className="block text-900 font-medium text-xl mb-2"
                  >
                    Situação
                  </label>
                  <Dropdown
                    value={selectedStatus}
                    onChange={(e) => setSelectedStatus(e.value)}
                    options={status}
                    optionLabel="name"
                    placeholder="Situação"
                    className="w-full"
                  />
                </div>
              </div>

              <div style={{ marginTop: "5%" }}>
                <label
                  style={{ marginBottom: "1%" }}
                  htmlFor="cargo"
                  className="block text-900 font-medium text-xl mb-2"
                >
                  Responsável
                </label>

                <MultiSelect
                  value={selectedParticipantes}
                  onChange={(e) => setSelectedParticipantes(e.value)}
                  options={participantes}
                  optionLabel="name"
                  display="chip"
                  placeholder="Responsável"
                  maxSelectedLabels={3}
                  className="w-full md:w-30rem"
                />
              </div>
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
    </div>
  );
}

import { useState } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { MultiSelect } from "primereact/multiselect";
import { InputTextarea } from "primereact/inputtextarea";

export default function Squad() {
  const [selectedParticipantes, setSelectedParticipantes] = useState(null);
  const [value, setValue] = useState("");
  const participantes = [
    { name: "Participante 1", code: "0" },
    { name: "Participante 1", code: "1" },
    { name: "Participante 1", code: "2" },
    { name: "Participante 1", code: "3" },
    { name: "Participante 1", code: "4" },
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
                Cadastro de Squad
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
                htmlFor="cargo"
                className="block text-900 font-medium text-xl mb-2"
              >
                Participantes
              </label>

              <MultiSelect
                value={selectedParticipantes}
                onChange={(e) => setSelectedParticipantes(e.value)}
                options={participantes}
                optionLabel="name"
                display="chip"
                placeholder="Selecionar participantes"
                maxSelectedLabels={3}
                className="w-full md:w-30rem"
              />

              <div className="w-full" style={{ marginTop: "5%" }}>
                <label
                  htmlFor="cargo"
                  className="block text-900 font-medium text-xl mb-2"
                >
                  Informações extras
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
                <Button
                  label="Cadastrar Squad"
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

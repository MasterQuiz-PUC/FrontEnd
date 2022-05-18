import React from "react";

import "bootstrap/dist/css/bootstrap.css";

import "./App.css";

import CadastrarPergunta from "./pages/CadastrarPergunta";
import ListarPerguntas from "./pages/ListarPerguntas";

function App() {
  const [isProfessor, setIsProfessor] = React.useState(true);
  const [page, setPage] = React.useState();

  const handleBack = () => {
    setPage(undefined);
  };

  return (
    <div className="App">
      {!page ? (
        <div className="Menu">
          {isProfessor ? (
            <div className="d-flex justify-content-center flex-column text-center">
              <h1>Menu professor</h1>
              <button
                className="btn btn-primary mt-2"
                onClick={() =>
                  setPage(<CadastrarPergunta backPage={handleBack} />)
                }
              >
                Cadastrar Perguntas
              </button>
              <button
                className="btn btn-primary mt-2"
                onClick={() =>
                  setPage(<ListarPerguntas backPage={handleBack} />)
                }
              >
                Listar Perguntas
              </button>
            </div>
          ) : (
            <button className="btn btn-primary disabled">Fazer Quiz</button>
          )}
        </div>
      ) : null}

      {page}
    </div>
  );
}

export default App;

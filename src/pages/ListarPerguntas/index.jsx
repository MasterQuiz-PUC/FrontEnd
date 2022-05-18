import React, { useState } from "react";

import "./style.css";

import Header from "../../components/header";
import Accordion from "../../components/Accordion";

function ListarPerguntas({ backPage }) {
  const [list, setList] = useState(listaResponse);

  return (
    <div>
      <Header />
      <div className="background-perguntas">
        <div className="card card-itens mt-4">
          {list.map(({ pergunta, opcoes }) => (
            <Accordion title={pergunta}>
              <div className="actions">
                <span role="button" className="text-primary">
                  Editar
                </span>
                <span role="button" className="text-danger">
                  Deletar
                </span>
              </div>

              {opcoes.map((opc, index) => (
                <div>
                  <span>
                    <strong> {index + 1} </strong> - {opc}
                  </span>
                </div>
              ))}
            </Accordion>
          ))}
        </div>
        <button
          type="button"
          class="btn btn-primary mt-3 ml-3"
          onClick={() => backPage()}
        >
          Voltar
        </button>
      </div>
    </div>
  );
}

const listaResponse = [
  {
    pergunta: "Qual entre os estados brasileiros abaixo possui a maior área?",
    opcoes: [
      "Mato Grosso",
      "Mato Grosso do Sul",
      "Espírito Santo",
      "Maranhão",
      "Minas Gerais",
    ],
  },
  {
    pergunta: "Qual é a estação do ano que inicia depois do verão?",
    opcoes: [
      "primavera",
      "inverno",
      "outono",
      "estação de trem",
      "estação espacial",
    ],
  },

  {
    pergunta: "Oslo é a capital e maior cidade da...",
    opcoes: ["Turquia", "Rússia", "Irlanda", "Suécia", "Noruega"],
  },

  {
    pergunta:
      "Qual destes país não tem o inglês como uma das línguas oficiais?",
    opcoes: ["África do Sul", "Barbados", "Canadá", "Jamaica", "Romênia"],
  },

  {
    pergunta: "Qual é a capital do Canadá?",
    opcoes: ["Toronto", "Quebec", "Ottawa", "Winnipeg", "Edmonton"],
  },

  {
    pergunta:
      "Todas as cidades listadas abaixo são capitais de seus países. Qual delas não fica na Europa?",
    opcoes: ["Paris", "Berlim", "Dublin", "Praga", "Beirute"],
  },

  {
    pergunta:
      "Em área (km²), o Brasil é aproximadamente quantas vezes maior que Portugal?",
    opcoes: ["3 vezes", "6 vezes", "18 vezes", "54 vezes", "96 vezes"],
  },

  {
    pergunta: "Qual desses não é ilha?",
    opcoes: ["Madagasgar", "Indonesia", "Barbados", "Bermudas", "Libia"],
  },
  {
    pergunta: "Qual desses países não é africano?",
    opcoes: [
      "Egito",
      "Madagascar",
      "Arábia Saudita",
      "Africa do sul",
      "Ruanda",
    ],
  },
];

export default ListarPerguntas;

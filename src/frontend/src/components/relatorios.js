
import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import api from '../services/api';
import { useAuth } from './AuthContext';

const Relatorios = () => {
  const [retiradas, setRetiradas] = useState([]);
  const [dataInicio, setDataInicio] = useState("");
  const [dataFim, setDataFim] = useState("");
  const [isPeriodoPesquisado, setIsPeriodoPesquisado] = useState(false);
  const [totalRetiradas, setTotalRetiradas] = useState(0);
  const { userId } = useAuth();

  const carregarRetiradas = async () => {
    if (!dataInicio || !dataFim) {
      alert("Por favor, informe o período completo para buscar as retiradas.");
      return;
    }

    try {
      const response = await api.get('/caixa', {
        params: {
          dataInicio,
          dataFim,
          userId  
        },
      });

      setRetiradas(response.data);
      setIsPeriodoPesquisado(true);
      
      // Calcula o total das retiradas
      const total = response.data.reduce((acc, retirada) => acc + retirada.valor, 0);
      setTotalRetiradas(total);
    } catch (error) {
      console.error("Erro ao carregar retiradas:", error);
    }
  };

  return (
    <div className="relatorios-container container">
      <header className="text-center mb-4">
        <h2>RELATÓRIOS</h2>
      </header>

      <div className="periodo mb-4">
        <label>Período</label>
        <div className="d-flex gap-2">
          <input
            type="date"
            className="form-control"
            value={dataInicio}
            onChange={(e) => setDataInicio(e.target.value)}
          />
          <span className="mx-1">à</span>
          <input
            type="date"
            className="form-control"
            value={dataFim}
            onChange={(e) => setDataFim(e.target.value)}
          />
          <div className="action-buttons mt-3 d-flex gap-3 justify-content-start">
            <button className="btn add-button square-button" onClick={carregarRetiradas}>
              <i className="bi bi-plus-circle"></i>
              <img src="/lupa.png" alt="Pesquisar Retiradas" className="button-icon" />
            </button>
          </div>
        </div>
      </div>

      {isPeriodoPesquisado && (
        <div className="total-retiradas mb-3">
          <strong>Total das Retiradas: R$ {totalRetiradas.toFixed(2)}</strong>
        </div>
      )}

      <div className="d-flex flex-column gap-2">
        {retiradas.map((retirada, index) => (
          <div key={index} className="financial-item d-flex justify-content-between align-items-center p-3">
            <span>{retirada.titulo}</span>
            <span>R$ {retirada.valor.toFixed(2)}</span>
          </div>
        ))}
      </div>

      <style>
        {`
          .relatorios-container {
            color: #7E5A9B;
          }
          
          h2 {
            color: #7E5A9B;
            font-weight: bold;
          }
          
          .periodo label {
            color: #7E5A9B;
          }
          
          .financial-item {
            border: 1px solid #7E5A9B;
            border-radius: 5px;
            background-color: #FFFFFF;
            color: #7E5A9B;
          }
          
          .action-buttons .btn {
            border-radius: 50%;
            width: 50px;
            height: 50px;
          }
          
          .add-button {
            background-color: #7E5A9B;
            color: #FFFFFF;
          }
          
          .action-buttons .btn:hover {
            opacity: 0.8;
          }

          .form-control {
            width: 150px;
          }

          .relatorios-container {
            margin-top: 20px;
          }

          .square-button {
            width: 40px;
            height: 40px;
            padding: 0;
            border-radius: 10px !important;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .mx-1 {
            margin-top: 20px;
          }

          .button-icon {
            width: 24px;
            height: 24px;
          }

          .total-retiradas {
            background-color: #F5F5F5;
            border: 1px solid #7E5A9B;
            border-radius: 5px;
            padding: 15px;
            text-align: center;
            color: #7E5A9B;
            font-size: 1.2em;
          }
        `}
      </style>
    </div>
  );
};

export default Relatorios;
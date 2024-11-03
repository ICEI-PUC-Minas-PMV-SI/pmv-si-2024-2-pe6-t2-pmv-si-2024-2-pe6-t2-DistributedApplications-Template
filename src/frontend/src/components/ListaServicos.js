import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

import "../components/styles/listaServicos.css";

const ListaServicos = () => {
  const [servicos, setServicos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchServicos = async () => {
      try {
        const token = localStorage.getItem("authToken"); // Obtém o token JWT do localStorage
        const response = await api.get("http://localhost:3000/servicos", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setServicos(response.data);
      } catch (error) {
        console.error("Erro ao buscar serviços:", error);
      }
    };
    fetchServicos();
  }, []);

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem("authToken");
      await api.delete(`http://localhost:3000/servicos/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setServicos(servicos.filter((servico) => servico._id !== id));
      alert("Serviço excluído com sucesso");
    } catch (error) {
      console.error("Erro ao excluir serviço:", error);
    }
  };

  const handleEdit = (servico) => {
    navigate("/servico", { state: { servico } });
  };

  return (
    <div className="servicos-view">
      <h1
        style={{
          fontSize: "58px",
          textAlign: "center",
          color: "#7E5A9B",
        }}
      >
        LISTA DE SERVIÇOS
      </h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Preço</th>
            <th>Duração</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {servicos.map((servico) => (
            <tr key={servico._id}>
              <td>{servico.descricao}</td>
              <td>{servico.preco}</td>
              <td>{servico.duracao}</td>
              <td>
                <Button
                  variant="warning"
                  className="me-2"
                  onClick={() => handleEdit(servico)}
                  style={{
                    backgroundColor: "#7E5A9B",
                    borderColor: "#7E5A9B",
                    color: "white",
                  }}
                >
                  Editar
                </Button>
                <Button
                  variant="danger"
                  onClick={() => handleDelete(servico._id)}
                >
                  Excluir
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ListaServicos;

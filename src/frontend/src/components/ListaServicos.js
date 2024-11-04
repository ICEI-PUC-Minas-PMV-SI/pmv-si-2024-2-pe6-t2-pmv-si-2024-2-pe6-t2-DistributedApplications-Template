import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

const ListaServicos = () => {
  const [servicos, setServicos] = useState([]);
  const navigate = useNavigate();

  const servicosViewStyles = {
    marginTop: "100px",
  };

  const tableStyles = {
    width: "80%",
    margin: "20px auto",
    borderCollapse: "collapse",
  };

  const thTdStyles = {
    border: "1px solid black",
    padding: "10px",
    fontWeight: "bold",
  };

  const trEvenStyles = {
    backgroundColor: "#7E5A9B",
  };

  const trOddStyles = {
    backgroundColor: "white",
  };

  useEffect(() => {
    const fetchServicos = async () => {
      try {
        const token = localStorage.getItem("authToken"); // Obtém o token JWT do localStorage
        const response = await api.get("/servicos", {
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
      await api.delete(`/servicos/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setServicos(servicos.filter((servico) => servico._id !== id));
      alert("Serviço excluído com sucesso!");
    } catch (error) {
      console.error("Erro ao excluir serviço:", error);
    }
  };

  const handleEdit = (servico) => {
    navigate("/servico", { state: { servico } });
  };

  return (
    <div style={servicosViewStyles}>
      <h1
        style={{
          fontSize: "58px",
          textAlign: "center",
          color: "#7E5A9B",
        }}
      >
        LISTA DE SERVIÇOS
      </h1>
      <Table striped bordered hover style={tableStyles}>
        <thead>
          <tr>
            <th style={thTdStyles}>Descrição</th>
            <th style={thTdStyles}>Preço</th>
            <th style={thTdStyles}>Duração</th>
            <th style={thTdStyles}>Ações</th>
          </tr>
        </thead>
        <tbody>
          {servicos.map((servico, index) => (
            <tr key={servico._id} style={index % 2 === 0 ? trEvenStyles : trOddStyles}>
              <td style={thTdStyles}>{servico.descricao}</td>
              <td style={thTdStyles}>{servico.preco}</td>
              <td style={thTdStyles}>{servico.duracao}</td>
              <td style={thTdStyles}>
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

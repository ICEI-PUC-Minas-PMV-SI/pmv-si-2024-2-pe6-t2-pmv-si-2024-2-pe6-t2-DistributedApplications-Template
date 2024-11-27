import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import api from "../services/api";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import "../components/styles/AgendamentoCadastro.css";
import axios from "axios";
import { useAuth } from './AuthContext';


const AgendamentoCadastro = () => {

  const location = useLocation();
  const agendamentoData = location.state?.agendamento;

  const [nomeCliente, setNomeCliente] = useState(agendamentoData ? agendamentoData.nomeCliente : "");
  const [nomePrestador, setNomePrestador] = useState(agendamentoData ? agendamentoData.nomePrestador : "");
  const [data, setData] = useState(agendamentoData ? new Date(agendamentoData.data).toISOString().substring(0, 10) : "");
  const [horario, setHorario] = useState(agendamentoData ? agendamentoData.horario : "");

  const [clientes, setClientes] = useState([]);
  const [prestadores, setPrestadores] = useState([]);
  const [servicos, setServicos] = useState([]);
  const [prestadorSelecionado, setPrestadorSelecionado] = useState('');
  const { userName } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("authToken");

        const clienteResponse = await axios.get("http://localhost:3000/clientes", {
          headers: { Authorization: `Bearer ${token}` },
        });

        const prestadorResponse = await axios.get("http://localhost:3000/prestador", {
          headers: { Authorization: `Bearer ${token}` },
        });

        setClientes(clienteResponse.data);
        setPrestadores(prestadorResponse.data);
        console.log(prestadorResponse)
      } catch (error) {
        console.error("Erro ao buscar dados de clientes ou prestadores", error);
      }
    };

    fetchData();
  }, []);

  const handleCadastro = async (e) => {
    e.preventDefault();

    const clienteSelecionado = clientes.find(cliente => cliente._id === nomeCliente);
    const prestadorSelecionado = prestadores.find(prestador => prestador._id === nomePrestador);
    console.log("prestador selecionado > ", prestadorSelecionado)

    const agendamento = {
      nomeCliente: clienteSelecionado ? clienteSelecionado.nome : nomeCliente,
      nomePrestador: prestadorSelecionado ? prestadorSelecionado.nome : nomePrestador,
      prestadorId: prestadorSelecionado ? prestadorSelecionado._id : nomePrestador,
      data: new Date(data).toISOString(),
      horario: horario,
    };

    try {
      const token = localStorage.getItem("authToken");
      console.log("Token: ", token);
      if (agendamentoData && agendamentoData._id) {        
        await api.put(
          `http://localhost:3000/agendamentos/${agendamentoData._id}`,
          agendamento,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
      } else {        
        await api.post("http://localhost:3000/agendamentos", agendamento, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      }
      alert("Cadastro realizado com sucesso!");
      setNomeCliente("");
      setNomePrestador("");
      setData("");
      setHorario("");

    } catch (error) {
      console.error("Erro ao enviar dados:", error.response ? error.response.data : error.message);
      console.log(agendamentoData);
      console.log(agendamento);
      alert("Erro ao conectar com o servidor");
    }
  };

  const handlePrestadorChange = async (e) => {
    const token = localStorage.getItem("authToken");
    const prestadorId = e.target.value;
    setPrestadorSelecionado(prestadorId);
    console.log("prestador selecionado dps blur,", prestadorSelecionado)



    if (prestadorId) {
      try {
        const response = await axios.get(`http://localhost:3000/servicos/prestador/${prestadorId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const result = await response;
        console.log("Serviços recebidos:", result);
        setServicos(result.data);
      } catch (error) {

        console.error(error.message);
      }
    } else {
      console.error('Resposta da API não é um array:', data);
      setServicos([]);
    }
  };

  return (
    <Container className="w-50 p-5" controlId="container">
      <Row className="row justify-content-md-center">
        <h1
          className="mb-4 mt-3"
          style={{
            color: "#F79824",
            fontSize: "58px",
            textAlign: "center",
            color: "#7E5A9B",
          }}
        >
          AGENDAMENTO
        </h1>

        <Form
          style={{
            backgroundColor: "#F5F5F5",
            borderRadius: "8px",
            border: "3px",
            color: "#7E5A9B",
            fontSize: "24px",
          }}
          onSubmit={handleCadastro}
        >
          <Form.Group className="mb-3 mt-3" controlId="nomeCliente">
            <Form.Label>Nome Cliente</Form.Label>
            <Form.Control
              as="select"
              name="nomeCliente"
              value={nomeCliente}
              onChange={(e) => setNomeCliente(e.target.value)}
            >
              <option value="">Selecione um Cliente</option>
              {Array.isArray(clientes) &&
                clientes.map((cliente) => (
                  <option key={cliente._id} value={cliente._id}>
                    {cliente.nome}
                  </option>
                ))}
            </Form.Control>

          </Form.Group>
          <Form.Group className="mb-3 mt-3" controlId="nomePrestador">
            <Form.Label>Nome Prestador</Form.Label>
            <Form.Control
              type="text"
              name="nomePrestador"
              value={nomePrestador}
              onChange={(e) => {
                const nome = e.target.value;
                setNomePrestador(nome);
                const prestador = prestadores.find(p => p.nome === nome);
                setPrestadorSelecionado(prestador ? prestador._id : "");
              }}
              onBlur={handlePrestadorChange}
              placeholder="Digite o nome do prestador"
            />
          </Form.Group>

          <Form.Group className="mb-3 mt-3" controlId="nomeServico">
            <Form.Label>Serviços do Prestador</Form.Label>
            <Form.Control as="select" name="nomeServico">
              <option value="">Selecione um Serviço</option>
              {Array.isArray(servicos) && servicos.map((servico) => (
                <option key={servico._id} value={servico._id}>
                  {servico.descricao}
                </option>
              ))}
            </Form.Control>
          </Form.Group>

          <Form.Group className="mb-3" controlId="data">
            <Form.Label>Data</Form.Label>
            <Form.Control
              type="date"
              required
              value={data}
              onChange={(e) => setData(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="horario">
            <Form.Label>Horário</Form.Label>
            <Form.Control
              type="text"
              name="horario"
              value={horario}
              onChange={(e) => {
                let input = e.target.value.replace(/\D/g, "");
                if (input.length > 2) {
                  input = input.slice(0, 2) + ":" + input.slice(2, 4);
                }
                setHorario(input.slice(0, 5));
              }}
              maxLength="5"
              placeholder="HH:mm"
            />
          </Form.Group>

          <div className="d-grid gap-2 d-md-flex justify-content-md-end mb-3">
            <Button
              type="submit"
              className="btn btn-success d-flex align-items-end"
            >
              SALVAR
            </Button>
            <Button
              type="button"
              className="btn btn-danger"
              onClick={() => {
                setNomeCliente("");
                setNomePrestador("");
                setData("");
                setHorario("");
              }}
            >
              CANCELAR
            </Button>
          </div>
        </Form>
      </Row>
    </Container>
  );
};

export default AgendamentoCadastro;

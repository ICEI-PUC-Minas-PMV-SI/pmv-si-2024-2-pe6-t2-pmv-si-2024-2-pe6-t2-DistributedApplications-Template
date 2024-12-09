import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from 'react-bootstrap/Row';
import Container from "react-bootstrap/Container";
import api from '../services/api';
import { useNavigate, useLocation } from "react-router-dom";

const CadastroClientes = () => {
  const location = useLocation();
  const cliente = location.state?.cliente || {};
  
  const paraListaClientes = () => {
    navigate("/listaclientes");
  };
  const [formCliente, setFormCliente] = useState({
    nome: "",
    email: "",
    telefone: "",
  });

  const navigate = useNavigate();
  
  const paraPaginaCadastroInicial = () => {
    navigate("/opcoes");
  };

  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    if (cliente._id) {
      setFormCliente({
        nome: cliente.nome || "",
        email: cliente.email || "",
        telefone: cliente.telefone || "",
      });
    }
  }, [cliente]);

  const alteraCadastroCliente = (e) => {
    setFormCliente({
      ...formCliente,
      [e.target.name]: e.target.value,
    });
  };

  const enviaCadastroCliente = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('authToken');
      if (cliente._id) {
        await api.put(`http://localhost:3000/clientes/${cliente._id}`, formCliente, {
          headers: {
            Authorization: `Bearer ${token}`
          },
        });
        setSuccessMessage("Cliente atualizado com sucesso!");
      } else {
        await api.post("http://localhost:3000/clientes", formCliente, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setSuccessMessage("Cliente criado com sucesso!");
      }
      paraListaClientes();
    } catch (error) {
      setError("Falha ao criar cliente:", error.message);
      setSuccessMessage("");
      console.error("Erro ao enviar o formulário:", error);
    }
  };
  return (
    <Container className='w-50 p-3' style={{ marginTop: '100px' }}>
      <Row className='justify-content-center'>
        <h1 className="mb-4 mt-3 text-center" style={{ color: '#7E5A9B', fontSize: '58px', textAlign: 'center' }}>CADASTRO DE CLIENTES</h1>
        <div className="d-flex justify-content-end gap-2 mb-3">
          <Button variant="light" style={{ padding: 0, border: 'none' }} onClick={paraListaClientes}>
            <svg width="79px" height="83px" viewBox="0 0 79 83" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="79" height="83" rx="8" fill="#F79824" />
              <image x="13" y="14" width="53" height="55"
                href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb
                2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAA0BJREFUeJztmztoFEEch3+Dr5CoBKyMivjAtxixsVFRQQtBxcrKzkIQVBSsLBQsFNTCSkQQFC
                wNiJUvtFFQ8YUpLAJqYRTxGRRjzs8iezC3mbvb7M5ubsl8cHC3M/Pn9/3nhizsRQoEAmUF6ASOA8+AD8BnoA+4CWwb63y5AUwErgEVGvMR2DnWeb0
                CzAT6HbIV4G+dRpwf69xeAOYCAzHpHqDbmtMGHIp23+bcWGbPDLAitsPfgCVN1lyKNWFLUXm9Esnb530QmJNw7RVr3bu8s3rHIV/lPjA1YY2v1rrV
                eWf2Rp2df2R9vg20J6hz2lpzuYDo2QGWAUMx+S6gA7hnXX/Q7JsAzLPmPynKITX15K3xNE2o0pe/QQaayVvzOoC7SZoATLXmvcjfIiVJ5a357UmaA
                Oy15vTka5GS0cpb65o2AXhlje/IzyIlaeWt9e3AHVcTgF3W9YH8LFICLM0ib9VxNWFtVK/KkTwcUgMsccjPzlAv3gT7HuKRz+yZAZYz8iZn1DvvqN
                sBPKaW98BkH7m9EJ35uHzqnY/V3gj8s2r/IMHdYmH4/trHam+Iyf8Cpvuo7YUgH+SDfJAfT/KLg3yQD/JB3lPtIB/kW1R+YZAP8kF+3MsnekqboHa
                QD/ItKj/BIT/LU+3NDvlEz/wLA1hHLSc81W19eUkCdjOSgxlrbnLIT/OV2SvASUcDAA6nrNfaZz4OcCMK+gm4nqUJpZOXJOBtFPZW9DlVE8oq32mF
                PmNdH1UTSikvScB6K/Se2FiiJpRWXpKA/Vbwbsd4wyaUWl6SgAtR8L/AlDpznE0ovbwkAQ+j8C+bzIs34aJDvjX/ztcDMAw/Wwe4mmB+D25aeucnN
                hhbIKm6azW/rYt2c5Gk5ZLWRC/Xb3B/S5ppjPmRPWo+NGrASuv9DOCYpFWSuiXNl2Sa1P4pqcsY03q/zLJo1IBV1vujDeYNSXoj6bWkXklPJT02xv
                Rnj5c/jRrgOrdfJD3X8JGovnqNMYM5ZCuERg04Jaki6bsiWWNM+f7hoAkjzjFwVtJ211jJQdJNY8wB+2KNJGAk/ZE0qcBgRTIkqc0YU6leqDkCxhi
                AfZK2Fp2sIG7Z8oFAQP8BMeOQk9LgP9gAAAAASUVORK5CYII=" 
              />
            </svg>
          </Button> 
        </div>
        
        {successMessage && <div className="alert alert-success">{successMessage}</div>}
        {error && <div className="alert alert-danger">{error}</div>}
        
        <Form
          className="p-4"
          onSubmit={enviaCadastroCliente}
          style={{
            backgroundColor: '#F5F5F5',
            borderRadius: '8px',
            border: '3px solid #BDBDBD',
            color: '#7E5A9B',
            maxWidth: '672px',
          }}>
  
          <Form.Group className="mb-3 mt-3" controlId="clienteNome">
            <Form.Label>Nome</Form.Label>
            <Form.Control style={{width: '100%', border: '3px solid #BDBDBD', borderradius: '8px' }}
              type="text"
              name='nome'
              value={formCliente.nome}
              onChange={alteraCadastroCliente}
              required
            />
          </Form.Group>
  
          <Form.Group className="mb-3 mt-3" controlId="clienteEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control style={{width: '100%', border: '3px solid #BDBDBD', borderradius: '8px' }}
              type="email"
              name="email"
              value={formCliente.email}
              onChange={alteraCadastroCliente}
              required
            />
          </Form.Group>
  
          <Form.Group className="mb-3 mt-3" controlId="clienteTelefone">
            <Form.Label>Telefone</Form.Label>
            <Form.Control style={{width: '100%', border: '3px solid #BDBDBD', borderradius: '8px' }}
              type="text"
              name='telefone'
              value={formCliente.telefone}
              onChange={alteraCadastroCliente}
              required 
            />
          </Form.Group>
  
          <div className="d-grid gap-2 d-md-flex justify-content-md-end mb-3">
            <Button type="submit" className="btn btn-success">
              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="#FFFFFF">
                <path d="M400-304 240-464l56-56 104 104 264-264 56 56-320 320Z" />
              </svg>
              SALVAR
            </Button>
  
            <Button type="button" className="btn btn-danger" onClick={paraPaginaCadastroInicial}>
              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="#FFFFFF">
                <path d="m336-280-56-56 144-144-144-143 56-56 144 144 143-144 56 56-144 143 144 144-56 56-143-144-144 144Z" />
              </svg>
              CANCELAR
            </Button>
          </div>
        </Form>
      </Row>
    </Container>
  );
};

export default CadastroClientes;

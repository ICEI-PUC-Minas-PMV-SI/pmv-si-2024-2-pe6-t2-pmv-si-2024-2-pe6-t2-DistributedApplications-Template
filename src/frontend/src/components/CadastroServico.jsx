import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import api from '../services/api';
import { useLocation, useNavigate } from "react-router-dom";

const CadastroServico = () => {
  const location = useLocation();
  const servico = location.state?.servico || {};

  const [formServico, setFormServico] = useState({
    descricao: "",
    preco: "",
    duracao: "",
  });
  
  const navigate = useNavigate();
  const paraListaServico = () => {
    navigate("/listaServicos");
  };

  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const containerStyle = {
    width: "50%",
    padding: "20px 40px",
    marginTop: "100px",
  };

  const titleStyle = {
    textAlign: "center",
    color: "#7E5A9B",
    fontSize: "58px",
    marginBottom: "20px",
  };

  const svgContainerStyle = {
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: "20px",
  };

  const svgButtonStyle = {
    padding: 0,
    border: "none",
  };

  const inputStyle = {
    border: "3px solid #BDBDBD",
    borderRadius: "8px",
    width: "100%",
  };

  const formStyle = {
    backgroundColor: "#F5F5F5",
    borderRadius: "8px",
    border: "3px solid #BDBDBD",
    color: "#7E5A9B",
    fontSize: "24px",
    padding: "20px",
  };

  const btnSvgStyle = {
    height: "24px",
    width: "24px",
    fill: "#FFFFFF",
  };

  useEffect(() => {
    if (servico._id) {
      setFormServico({
        descricao: servico.descricao || "",
        preco: servico.preco || "",
        duracao: servico.duracao || "",
      });
    }
  }, [servico]);

  const alteraCadastroServico = (e) => {
    setFormServico({
      ...formServico,
      [e.target.name]: e.target.value,
    });
  };

  const enviaCadastroServico = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('authToken');
      if (servico._id) {
        await api.put(`http://localhost:3000/servicos/${servico._id}`, formServico,
          {
            headers: {
              Authorization: `Bearer ${token}`
            },
          });
        setSuccessMessage("Serviço atualizado com sucesso!");
      } else {
        await api.post("http://localhost:3000/servicos", formServico, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setSuccessMessage("Serviço criado com sucesso!");
      }
    } catch (error) {
      setError("Falha ao criar serviço:", error.message);
      setSuccessMessage("");
      console.error("Erro ao enviar o formulário:", error);
    }
  };

  return (
    <Container style={{ width: '50%', padding: '5%', marginTop: '100px' }}>
      <h1 className="title" style={{ textAlign: 'center', color: '#7E5A9B', fontSize: '58px', marginBottom: '20px' }}>CADASTRO</h1>
      <div className="svg-container" style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '20px' }}>
        <Button variant="light" className="svg-button" style={{ padding: 0, border: 'none' }} onClick={paraListaServico}>
          <svg
            width="79"
            height="83"
            viewBox="0 0 79 83"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="79" height="83" rx="8" fill="#F79824" />
            <image
              x="13"
              y="14"
              width="53"
              height="55"
              href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAA0BJREFUeJztmztoFEEch3+Dr5CoBKyMivjAtxixsVFRQQtBxcrKzkIQVBSsLBQsFNTCSkQQFCwNiJUvtFFQ8YUpLAJqYRTxGRRjzs8iezC3mbvb7M5ubsl8cHC3M/Pn9/3nhizsRQoEAmUF6ASOA8+AD8BnoA+4CWwb63y5AUwErgEVGvMR2DnWeb0CzAT6HbIV4G+dRpwf69xeAOYCAzHpHqDbmtMGHIp23+bcWGbPDLAitsPfgCVN1lyKNWFLUXm9Esnb530QmJNw7RVr3bu8s3rHIV/lPjA1YY2v1rrVeWf2Rp2df2R9vg20J6hz2lpzuYDo2QGWAUMx+S6gA7hnXX/Q7JsAzLPmPynKITX15K3xNE2o0pe/QQaayVvzOoC7SZoATLXmvcjfIiVJ5a357UmaAOy15vTka5GS0cpb65o2AXhlje/IzyIlaeWt9e3AHVcTgF3W9YH8LFICLM0ib9VxNWFtVK/KkTwcUgMsccjPzlAv3gT7HuKRz+yZAZYz8iZn1DvvqNsBPKaW98BkH7m9EJ35uHzqnY/V3gj8s2r/IMHdYmH4/trHam+Iyf8Cpvuo7YUgH+SDfJAfT/KLg3yQD/JB3lPtIB/kW1R+YZAP8kF+3MsnekqboHaQD/ItKj/BIT/LU+3NDvlEz/wLA1hHLSc81W19eUkCdjOSgxlrbnLIT/OV2SvASUcDAA6nrNfaZz4OcCMK+gm4nqUJpZOXJOBtFPZW9DlVE8oq32mFPmNdH1UTSikvScB6K/Se2FiiJpRWXpKA/Vbwbsd4wyaUWl6SgAtR8L/AlDpznE0ovbwkAQ+j8C+bzIs34aJDvjX/ztcDMAw/Wwe4mmB+D25aeucnNhhbIKm6azW/rYt2c5Gk5ZLWRC/Xb3B/S5ppjPmRPWo+NGrASuv9DOCYpFWSuiXNl2Sa1P4pqcsY03q/zLJo1IBV1vujDeYNSXoj6bWkXklPJT02xvRnj5c/jRrgOrdfJD3X8JGovnqNMYM5ZCuERg04Jaki6bsiWWNM+f7hoAkjzjFwVtJ211jJQdJNY8wB+2KNJGAk/ZE0qcBgRTIkqc0YU6leqDkCxhiAfZK2Fp2sIG7Z8oFAQP8BMeOQk9LgP9gAAAAASUVORK5CYII=" />
            />
            <defs>
              <pattern
                id="pattern0_10_483"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  href="#image0_10_483"
                  transform="matrix(0.015625 0 0 0.0159375 0 -0.01)"
                />
              </pattern>
            </defs>
          </svg>
        </Button>
      </div>
      {successMessage && <div className="alert alert-success">{successMessage}</div>}
      {error && <div className="alert alert-danger">{error}</div>}
      <Form onSubmit={enviaCadastroServico} className="form-style" style={{ backgroundColor: '#F5F5F5', borderRadius: '8px', border: '3px solid #BDBDBD', color: '#7E5A9B', fontSize: '24px', padding: '20px' }}>
        <Form.Group className="mb-3">
          <Form.Label>Descrição</Form.Label>
          <div className="input" style={{ border: '3px solid #BDBDBD', borderRadius: '8px', width: '645px' }}>
            <Form.Control
              type="text"
              name="descricao"
              value={formServico.descricao}
              onChange={alteraCadastroServico}
              required
            />
          </div>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Preço</Form.Label>
          <div className="input" style={{ border: '3px solid #BDBDBD', borderRadius: '8px', width: '645px' }}>
            <Form.Control
              type="text"
              name="preco"
              value={formServico.preco}
              onChange={alteraCadastroServico}
              required
            />
          </div>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Duração</Form.Label>
          <div className="input" style={{ border: '3px solid #BDBDBD', borderRadius: '8px', width: '645px' }}>
            <Form.Control
              type="text"
              name="duracao"
              value={formServico.duracao}
              onChange={alteraCadastroServico}
              required
            />
          </div>
        </Form.Group>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end mb-3">
          <Button type="submit" className="btn btn-success">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#FFFFFF"
            >
              <path d="M400-304 240-464l56-56 104 104 264-264 56 56-320 320Z" />
            </svg>
            SALVAR
          </Button>
          <Button
            type="button"
            className="btn btn-danger"
            onClick={() => {
              setFormServico({
                descricao: "",
                preco: "",
                duracao: "",
              });
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#FFFFFF"
            >
              <path d="m336-280-56-56 144-144-144-143 56-56 144 144 143-144 56 56-144 143 144 144-56 56-143-144-144 144Z" />
            </svg>
            CANCELAR
          </Button>
        </div>
      </Form>
    </Container>
  )
}

export default CadastroServico;

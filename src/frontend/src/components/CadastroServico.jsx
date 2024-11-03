import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import api from '../services/api';
import "./styles/cadastroServico.css";


const CadastroServico = () => {
  const [formServico, setFormServico] = useState({
    descricao: "",
    preco: "",
    duracao: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

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
      const response = await api.post("http://localhost:3000/servicos", formServico,
        { headers: { 
          Authorization: `Bearer ${token}` } 
        });
      console.log("Serviço criado:", response.data); 
      setMessage("Serviço criado com sucesso");
      setError("");
      setFormServico({ descricao: "", preco: "", duracao: "" }); 
    } catch (error) {
      setError("Falha ao criar serviço:", error.message);
      console.error("Erro ao enviar o formulário:", error); 
    } 
  };

  return (
    <Container className="w-50 p-5">
      <h1 className="title">CADASTRO</h1>
      <div className="svg-container">
        <Button variant="light" className="svg-button">
          <svg
            width="79"
            height="83"
            viewBox="0 0 79 83"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="79" height="83" rx="8" fill="#7E5A9B" />
            <image
              x="13"
              y="14"
              width="53"
              height="55"
              href="data:image/png;base64,iVBORw0KGgoAAAA
              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
              ABJRU5ErkJggg=="
            />

            <defs>
              <pattern
                id="pattern0_10_473"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  href="#image0_10_473"
                  transform="matrix(0.0162146 0 0 0.015625 -0.0188679 0)"
                />
              </pattern>
            </defs>
          </svg>
        </Button>
        <Button variant="light" className="svg-button">
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
              href="data:image/png;base64,iVBORw0KGgoA
              AAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBI
              WXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2Fy
              ZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAA0BJREFU
              eJztmztoFEEch3+Dr5CoBKyMivjAtxixsVFRQQtB
              xcrKzkIQVBSsLBQsFNTCSkQQFCwNiJUvtFFQ8YUp
              LAJqYRTxGRRjzs8iezC3mbvb7M5ubsl8cHC3M/Pn
              9/3nhizsRQoEAmUF6ASOA8+AD8BnoA+4CWwb63y5
              AUwErgEVGvMR2DnWeb0CzAT6HbIV4G+dRpwf69xe
              AOYCAzHpHqDbmtMGHIp23+bcWGbPDLAitsPfgCVN
              1lyKNWFLUXm9Esnb530QmJNw7RVr3bu8s3rHIV/l
              PjA1YY2v1rrVeWf2Rp2df2R9vg20J6hz2lpzuYDo
              2QGWAUMx+S6gA7hnXX/Q7JsAzLPmPynKITX15K3x
              NE2o0pe/QQaayVvzOoC7SZoATLXmvcjfIiVJ5a35
              7UmaAOy15vTka5GS0cpb65o2AXhlje/IzyIlaeWt
              9e3AHVcTgF3W9YH8LFICLM0ib9VxNWFtVK/KkTwc
              UgMsccjPzlAv3gT7HuKRz+yZAZYz8iZn1DvvqNsB
              PKaW98BkH7m9EJ35uHzqnY/V3gj8s2r/IMHdYmH4
              /trHam+Iyf8Cpvuo7YUgH+SDfJAfT/KLg3yQD/JB
              3lPtIB/kW1R+YZAP8kF+3MsnekqboHaQD/ItKj/B
              IT/LU+3NDvlEz/wLA1hHLSc81W19eUkCdjOSgxlr
              bnLIT/OV2SvASUcDAA6nrNfaZz4OcCMK+gm4nqUJ
              pZOXJOBtFPZW9DlVE8oq32mFPmNdH1UTSikvScB6
              K/Se2FiiJpRWXpKA/Vbwbsd4wyaUWl6SgAtR8L/A
              lDpznE0ovbwkAQ+j8C+bzIs34aJDvjX/ztcDMAw/
              Wwe4mmB+D25aeucnNhhbIKm6azW/rYt2c5Gk5ZLW
              RC/Xb3B/S5ppjPmRPWo+NGrASuv9DOCYpFWSuiXN
              l2Sa1P4pqcsY03q/zLJo1IBV1vujDeYNSXoj6bWk
              XklPJT02xvRnj5c/jRrgOrdfJD3X8JGovnqNMYM5
              ZCuERg04Jaki6bsiWWNM+f7hoAkjzjFwVtJ211jJ
              QdJNY8wB+2KNJGAk/ZE0qcBgRTIkqc0YU6leqDkC
              xhiAfZK2Fp2sIG7Z8oFAQP8BMeOQk9LgP9gAAAAA
              SUVORK5CYII="
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
      {message && <div className="alert alert-success">{message}</div>}
      {error && <div className="alert alert-danger">{error}</div>}
      <Form onSubmit={enviaCadastroServico} className="form-style">
        <Form.Group className="mb-3">
          <Form.Label>Descrição</Form.Label>
          <div className="input">
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
          <div className="input">
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
          <div className="input">
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
  );
};

export default CadastroServico;

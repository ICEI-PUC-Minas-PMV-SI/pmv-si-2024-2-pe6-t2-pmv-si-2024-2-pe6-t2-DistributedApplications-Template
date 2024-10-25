import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import api from '../services/api';

function CadastroClientes() {
  const [clienteNome, setClienteNome] = useState('');
  const [clienteEmail, setClienteEmail] = useState('');
  const [clienteTelefone, setClienteTelefone] = useState('');

  async function handleCadastroCliente(e) {
    e.preventDefault();

    const response = await api.post('/clientes', {
      nome: clienteNome,
      email: clienteEmail,
      telefone: clienteTelefone,
    });
  }

  return (
    <Container className='p-5'>

      <div className="d-flex justify-content-end gap-2 mb-3">
        <Button variant="light" style={{ padding: 0, border: 'none' }}>
          <svg width="79px" height="83px" viewBox="0 0 79 83" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="79" height="83" rx="8" fill="#7E5A9B" />
            <rect x="13" y="14" width="53" height="55" fill="url(#pattern0_10_473)" />
            <image x="13" y="14" width="53" height="55" href="data:image/png;base64,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" />

          </svg>
        </Button>

        <Button variant="light" style={{ padding: 0, border: 'none' }}>
          <svg width="79px" height="83px" viewBox="0 0 79 83" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="79" height="83" rx="8" fill="#F79824" />
            <rect x="13" y="14" width="53" height="55" fill="url(#pattern0_10_484)" />
            <image x="13" y="14" width="53" height="55"
              href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAA0BJREFUeJztmztoFEEch3+Dr5CoBKyMivjAtxixsVFRQQtBxcrKzkIQVBSsLBQsFNTCSkQQFCwNiJUvtFFQ8YUpLAJqYRTxGRRjzs8iezC3mbvb7M5ubsl8cHC3M/Pn9/3nhizsRQoEAmUF6ASOA8+AD8BnoA+4CWwb63y5AUwErgEVGvMR2DnWeb0CzAT6HbIV4G+dRpwf69xeAOYCAzHpHqDbmtMGHIp23+bcWGbPDLAitsPfgCVN1lyKNWFLUXm9Esnb530QmJNw7RVr3bu8s3rHIV/lPjA1YY2v1rrVeWf2Rp2df2R9vg20J6hz2lpzuYDo2QGWAUMx+S6gA7hnXX/Q7JsAzLPmPynKITX15K3xNE2o0pe/QQaayVvzOoC7SZoATLXmvcjfIiVJ5a357UmaAOy15vTka5GS0cpb65o2AXhlje/IzyIlaeWt9e3AHVcTgF3W9YH8LFICLM0ib9VxNWFtVK/KkTwcUgMsccjPzlAv3gT7HuKRz+yZAZYz8iZn1DvvqNsBPKaW98BkH7m9EJ35uHzqnY/V3gj8s2r/IMHdYmH4/trHam+Iyf8Cpvuo7YUgH+SDfJAfT/KLg3yQD/JB3lPtIB/kW1R+YZAP8kF+3MsnekqboHaQD/ItKj/BIT/LU+3NDvlEz/wLA1hHLSc81W19eUkCdjOSgxlrbnLIT/OV2SvASUcDAA6nrNfaZz4OcCMK+gm4nqUJpZOXJOBtFPZW9DlVE8oq32mFPmNdH1UTSikvScB6K/Se2FiiJpRWXpKA/Vbwbsd4wyaUWl6SgAtR8L/AlDpznE0ovbwkAQ+j8C+bzIs34aJDvjX/ztcDMAw/Wwe4mmB+D25aeucnNhhbIKm6azW/rYt2c5Gk5ZLWRC/Xb3B/S5ppjPmRPWo+NGrASuv9DOCYpFWSuiXNl2Sa1P4pqcsY03q/zLJo1IBV1vujDeYNSXoj6bWkXklPJT02xvRnj5c/jRrgOrdfJD3X8JGovnqNMYM5ZCuERg04Jaki6bsiWWNM+f7hoAkjzjFwVtJ211jJQdJNY8wB+2KNJGAk/ZE0qcBgRTIkqc0YU6leqDkCxhiAfZK2Fp2sIG7Z8oFAQP8BMeOQk9LgP9gAAAAASUVORK5CYII=" />
          </svg>
        </Button>
      </div>

      <Row className='justify-content-center'>
        <h1 className="mb-4 mt-3 text-center" style={{ color: '#7E5A9B', fontSize: '58px', textAlign: 'center' }}>CADASTRO</h1>

        <Form
          className="p-4"
          style={{
            backgroundColor: '#F5F5F5',
            borderRadius: '8px',
            border: '3px solid #BDBDBD',
            color: '#7E5A9B',
            maxWidth: '672px',
          }}>

          <Form.Group className="mb-3 mt-3" controlId="clienteNome">
            <Form.Label>Nome</Form.Label>
            <div className='input'
              style={{ border: '3px solid #BDBDBD', borderRadius: '8px', }}>
              <Form.Control
                type="text"
                name='clienteNome'
                onChange={(e) => setClienteNome(e.target.value)}
                required />
            </div>
          </Form.Group>

          <Form.Group className="mb-3" controlId="clienteEmail">
            <Form.Label>Email</Form.Label>
            <div className='input'
              style={{ border: '3px solid #BDBDBD', borderRadius: '8px' }}>
              <Form.Control
                type="email"
                onChange={(e) => setClienteEmail(e.target.value)}
                required />
            </div>
          </Form.Group>

          <Form.Group className="mb-3" controlId="clienteTelefone">
            <Form.Label>Telefone</Form.Label>
            <div className='input'
              style={{
                border: '3px solid #BDBDBD',
                borderRadius: '8px',
              }}>
              <Form.Control
                type="tel"
                name='clienteTelefone'
                onChange={(e) => setClienteTelefone(e.target.value)}
                required />
            </div>
          </Form.Group>

          <div className="d-grid gap-2 d-md-flex justify-content-md-end mb-3">
            <Button type="submit" className="btn btn-success">
              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="#FFFFFF">
                <path d="M400-304 240-464l56-56 104 104 264-264 56 56-320 320Z" />
              </svg>
              SALVAR
            </Button>

            <Button type="button" className="btn btn-danger" onClick={() => {
              setClienteNome('');
              setClienteEmail('');
              setClienteTelefone('');
            }}>
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
}

export default CadastroClientes;



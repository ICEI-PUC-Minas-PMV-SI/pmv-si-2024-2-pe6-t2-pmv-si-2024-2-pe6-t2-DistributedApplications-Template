import { useState } from 'react';
import '../CadastroClientes.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import api from '../services/api';

function CadastroClientes() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');

  async function handleCadastro(e) {
    e.preventDefault();

    const response = await api.post('/clientes', {
      nome,
      email,
      telefone,
    });


  }

  return (
    <Container className='w-50 p-5'>
      <Row className='row justify-content-md-center'>
        <h1 className="mb-4 mt-3" style={{ color: '#F79824', fontSize: '58px' }}>CADASTRO</h1>

        <Form onSubmit={handleCadastro}>
          <Form.Group className="mb-3 mt-3" controlId="nome">
            <Form.Label>Nome</Form.Label>
            <Form.Control
              type="text"
              name='nome'
              onChange={(e) => setNome(e.target.value)} 
              required 
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control 
              type="email"
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="telefone">
            <Form.Label>Telefone</Form.Label>
            <Form.Control
              type="text"
              name='telefone'
              onChange={(e) => setTelefone(e.target.value)} 
              required 
            />
          </Form.Group>

          <div className='d-grid gap-2 d-md-flex justify-content-md-end mb-3'>
            <Button type='submit' className="btn btn-success">SALVAR</Button>
            <Button type='button' className="btn btn-danger" onClick={() => window.close()}>CANCELAR</Button>
          </div>
        </Form>
      </Row>
    </Container>
  );
}

export default CadastroClientes;

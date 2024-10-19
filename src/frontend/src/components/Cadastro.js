import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import api from '../services/api';



function Cadastro() {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [telefone, setTelefone] = useState('');
  const [endereco, setEndereco] = useState('');


  async function handleCadastro(e) {
    e.preventDefault();

    const response = await api.post('/prestador',{
      nome,
      email,
      cnpj,
      telefone,
      endereco,
      password,

     
    })


  }

  return (

    <Container className='d-flex justify-content-center'>
          <Row className='row justify-content-md-center'>
        <Col className='justify-text-center'>
          <h1>Cadastro</h1>
        </Col>


          <Form>

          <Form.Group className="mb-3" controlId="nome">
              <Form.Label >Nome</Form.Label>
              <Form.Control className="w-100"
                type="string"
                name='nome'
                onChange={(e) => setNome(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
              <Form.Label >Email</Form.Label>
              <Row
              > </Row>
              <Form.Control className="w-100" type="email"
                required
                onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="cnpj">
              <Form.Label >CPF ou CNPJ</Form.Label>
              <Form.Control className="w-100"
                type="string"
                name='cnpj'
                onChange={(e) => setCnpj(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="telefone">
              <Form.Label >Telefone</Form.Label>
              <Form.Control className="w-100"
                type="string"
                name='telefone'
                onChange={(e) => setTelefone(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="endereco">
              <Form.Label >Endereço completo</Form.Label>
              <Form.Control className="w-100"
                type="string"
                name='endereco'
                onChange={(e) => setEndereco(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
              <Form.Label >Senha</Form.Label>
              <Form.Control className="w-100"
                type="password"
                name='password'
                onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>



            <Button type='submit'
              className='d-flex align-items-end'
              onClick={(e) => handleCadastro(e)}>Cadastro</Button>
          </Form>
          </Row>
          </Container>

  )
}

export default Cadastro;

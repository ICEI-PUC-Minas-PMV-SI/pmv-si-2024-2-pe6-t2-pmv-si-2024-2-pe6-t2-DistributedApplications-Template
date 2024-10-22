import { useState } from 'react';
import '../Cadastro.css';
import Button from 'react-bootstrap/Button';
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

    const response = await api.post('/prestador', {
      nome,
      email,
      cnpj,
      telefone,
      endereco,
      password,


    })


  }

  return (
      <body>

<Container className='w-50 p-5' controlId="container" >
      <Row className='row justify-content-md-center'>
          <h1 className="mb-4 mt-3"  style={{ color: '#F79824', fontSize: '58px' }}>CADASTRO</h1>



        <Form>

          <Form.Group className="mb-3 mt-3" controlId="nome">
            <Form.Label >Nome</Form.Label>
            
            <div className='input'> <Form.Control
              type="string"
              name='nome'
              onChange={(e) => setNome(e.target.value)} /></div>
            
          </Form.Group>

          <Form.Group className="mb-3" controlId="email">
            <Form.Label >Email</Form.Label>
            <div className='input'>
            <Form.Control 
              type="email"
              required
              onChange={(e) => setEmail(e.target.value)} /></div>
          </Form.Group>

          <Form.Group className="mb-3" controlId="cnpj">
            <Form.Label >CPF ou CNPJ</Form.Label>
            <div className='input'>
            <Form.Control
              type="string"
              name='cnpj'
              onChange={(e) => setCnpj(e.target.value)} /></div>
          </Form.Group>

          <Form.Group className="mb-3" controlId="telefone">
            <Form.Label >Telefone</Form.Label>
            <div className='input'>
            <Form.Control
              type="string"
              name='telefone'
              onChange={(e) => setTelefone(e.target.value)} /></div>
          </Form.Group>

          <Form.Group className="mb-3" controlId="endereco">
            <Form.Label >Endereço completo</Form.Label>
            <div className='input'>
            <Form.Control
              type="string"
              name='endereco'
              onChange={(e) => setEndereco(e.target.value)} /></div>
          </Form.Group>

          <Form.Group className="mb-3" controlId="password">
            <Form.Label >Senha</Form.Label>
            <div className='input'>
            <Form.Control
              type="password"
              name='password'
              onChange={(e) => setPassword(e.target.value)} /></div>
          </Form.Group>


          <div className='d-grid gap-2 d-md-flex justify-content-md-end mb-3'>
          <Button type='submit'className="btn btn-success d-flex align-items-end"
            onClick={(e) => handleCadastro(e)}>
            <svg xmlns="http://www.w3.org/2000/svg"  height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M400-304 240-464l56-56 104 104 264-264 56 56-320 320Z" />
            </svg> SALVAR</Button>

            <Button type='submit'className="btn btn-danger"
            onClick={(e) => handleCadastro(e)}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="m336-280-56-56 144-144-144-143 56-56 144 144 143-144 56 56-144 143 144 144-56 56-143-144-144 144Z"/>
            </svg> CANCELAR</Button>
          </div>
          
        </Form>
      </Row>
    </Container>
    </body>

    

  )
}

export default Cadastro;

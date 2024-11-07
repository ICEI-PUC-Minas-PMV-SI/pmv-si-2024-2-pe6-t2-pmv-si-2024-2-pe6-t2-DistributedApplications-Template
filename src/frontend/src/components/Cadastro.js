import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

function Cadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [telefone, setTelefone] = useState('');
  const [endereco, setEndereco] = useState('');

  const navigate = useNavigate();

  // Função para aplicar máscara de CPF ou CNPJ
  const formatarCpfCnpj = (value) => {
    value = value.replace(/\D/g, ""); // Remove caracteres não numéricos
    if (value.length <= 11) {
      // Aplica máscara de CPF
      return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    } else {
      // Aplica máscara de CNPJ
      return value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");
    }
  };

  // Função para aplicar máscara de telefone
  const formatarTelefone = (value) => {
    value = value.replace(/\D/g, ""); // Remove caracteres não numéricos
    return value.replace(/(\d{2})(\d{1})(\d{4})(\d{4})/, "($1) $2 $3-$4");
  };

  async function handleCadastro(e) {
    e.preventDefault();
    try { 
      const response = await api.post('/prestador', {
        nome,
        email,
        cnpj,
        telefone,
        endereco,
        password,
        confirmpassword
      });
      
      if (response.status === 201) {
        alert(response.data.message); // Exibe mensagem de sucesso
        navigate('/login'); // Redireciona para a página de login
      }
      
    } catch (error) {
      console.error("Erro no Cadastro:", error);
      
      if (error.response) {
        // Verifica o status da resposta
        if (error.response.status === 400) {
          alert("A confirmação de senha não corresponde à senha."); // Mensagem específica para senha incorreta
        } else if (error.response.status === 409) {
          alert("Email, CNPJ ou Telefone já está cadastrado."); // Mensagem para conflito de dados
        } else if (error.response.data && error.response.data.message) {
          alert(error.response.data.message); // Exibe a mensagem de erro do servidor
        } else {
          alert("Erro ao tentar realizar o cadastro.");
        }
      } else {
        alert("Erro ao tentar se conectar com o servidor.");
      }
    }
    
  }

  return (
    <Container fluid className="d-flex justify-content-center align-items-center min-vh-100 mt-5">
      <Row className="w-100 justify-content-center">
        <h1  className="text-center custom-title mt-5" style={{ color: '#7E5A9B', fontSize: '44px', fontFamily: 'Roboto' }}>
          CADASTRO
        </h1>
        <Form 
          className="w-100 mx-auto rounded"
          onSubmit={handleCadastro}
          style={{ maxWidth: '700px', borderRadius: '8px', color: '#7E5A9B', fontSize: '16px'}}
        >
          <Form.Group className="mb-3" controlId="nome">
            <Form.Label>Nome</Form.Label>
            <Form.Control
              style={{
                border: '3px solid #BDBDBD',
                borderRadius: '8px'
              }}
              type="text"
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              style={{
                border: '3px solid #BDBDBD',
                borderRadius: '8px'
              }}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="cnpj">
            <Form.Label>CPF ou CNPJ</Form.Label>
            <Form.Control
              style={{
                border: '3px solid #BDBDBD',
                borderRadius: '8px'
              }}
              type="text"
              value={cnpj}
              onChange={(e) => setCnpj(formatarCpfCnpj(e.target.value))}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="telefone">
            <Form.Label>Telefone</Form.Label>
            <Form.Control
              style={{
                border: '3px solid #BDBDBD',
                borderRadius: '8px'
              }}
              type="tel"
              value={telefone}
              onChange={(e) => setTelefone(formatarTelefone(e.target.value))}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="endereco">
            <Form.Label>Endereço completo</Form.Label>
            <Form.Control
              style={{
                border: '3px solid #BDBDBD',
                borderRadius: '8px'
              }}
              type="text"
              onChange={(e) => setEndereco(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Senha</Form.Label>
            <Form.Control
              style={{
                border: '3px solid #BDBDBD',
                borderRadius: '8px'
              }}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="confirmpassword">
            <Form.Label>Confirmação de senha</Form.Label>
            <Form.Control
              style={{
                border: '3px solid #BDBDBD',
                borderRadius: '8px'
              }}
              type="password"
              onChange={(e) => setConfirmpassword(e.target.value)}
              required
            />
          </Form.Group>

          <div className="d-flex gap-2 justify-content-end">
            <Button type="submit" className="btn btn-success mb-3" onClick={(e) => handleCadastro(e)}>
              SALVAR
            </Button>
            <Button type="button" className="btn btn-danger mb-3" onClick={() => navigate('/login')}>
              CANCELAR
            </Button>
          </div>
        </Form>
      </Row>
    </Container>
  );
}

export default Cadastro;

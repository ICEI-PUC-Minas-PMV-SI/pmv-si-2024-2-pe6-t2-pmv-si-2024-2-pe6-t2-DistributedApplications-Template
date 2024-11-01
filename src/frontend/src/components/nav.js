import { useAuth } from './AuthContext'; // ajuste o caminho conforme necessário
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


function Nbar() {
  const { isLoggedIn, logout } = useAuth(); // Obtenha o estado de autenticação do contexto
    
  

  return (
    <>
      <Navbar expand="lg" style={{ backgroundColor: '#7E5A9B' }}>
        <Container className='d-flex px-0'>
          <Navbar.Brand href="#home" className='d-flex flex-row align-items-center'>
            <img
              alt="Logo"
              src="/icon.png"
              width="50"
              height="50"
              className='me-2'
            />
          </Navbar.Brand>

          <Nav className="me-auto">
            {/* Links visíveis para usuários não logados */}
            {!isLoggedIn && (
              <>
                <Nav.Link className='btn me-2' style={{ color: '#F79824', border: '2px solid #F79824', borderRadius: '9px' }} href="/prestador">Cadastre-se</Nav.Link>
                <Nav.Link className='btn' style={{ color: '#F79824', border: '2px solid #F79824', borderRadius: '9px' }} href="/login">Login</Nav.Link>
              </>
            )}

            {/* Links visíveis para usuários logados */}
            {isLoggedIn && (
              <>
                <Nav.Link style={{ color: '#FFFFFF' }} href="/home">Página Inicial</Nav.Link>
                <Nav.Link style={{ color: '#FFFFFF' }} href="/agendamento">Agendamento</Nav.Link>
                <Nav.Link style={{ color: '#FFFFFF' }} href="/cadastros">Cadastros</Nav.Link>
                <Nav.Link style={{ color: '#FFFFFF' }} href="/financeiro">Financeiro</Nav.Link>
                <Nav.Link style={{ color: '#FFFFFF' }} href="/relatorios">Relatórios</Nav.Link>
              </>
            )}
          </Nav>

          {/* Botão de logout ou sair */}
          {isLoggedIn && (
            <Nav>
              <Nav.Link className='btn' style={{ color: '#F79824', border: '2px solid #F79824', borderRadius: '9px' }} onClick={logout}>Sair</Nav.Link>
            </Nav>
          )}
        </Container>
      </Navbar>

    </>
  );
}

export default Nbar;

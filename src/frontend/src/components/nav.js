import { useAuth } from './AuthContext';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './styles/nav.css'

function Nbar() {
  const { isLoggedIn, logout } = useAuth();

  return (
    <>
      <Navbar expand="lg" className='fixed-top' style={{ backgroundColor: '#7E5A9B' }}>
        <Container>
          <Navbar.Brand href="#home" className='d-flex flex-row align-items-center'>
            <img
              alt="Logo"
              src="/icon.png"
              width="50"
              height="50"
              className='me-2'
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbar-nav"
          />


          <Navbar.Collapse id="navbar-nav">
            <Nav className="me-auto">
              {isLoggedIn && (
                <>
                  <Nav.Link style={{ color: '#FFFFFF' }} href="/boasvindas">Página Inicial</Nav.Link>
                  <Nav.Link style={{ color: '#FFFFFF' }} href="/agendamento">Agendamento</Nav.Link>
                  <Nav.Link style={{ color: '#FFFFFF' }} href="/opcoes">Cadastros</Nav.Link>
                  <Nav.Link style={{ color: '#FFFFFF' }} href="/financeiro">Financeiro</Nav.Link>
                  <Nav.Link style={{ color: '#FFFFFF' }} href="/relatorios">Relatórios</Nav.Link>
                </>
              )}
            </Nav>

            <Nav className="ms-auto">
              {!isLoggedIn && (
                <>
                  <Nav.Link className="nav-button btn" style={{ color: '#F79824', border: '2px solid #F79824', borderRadius: '9px' }} href="/prestador">Cadastre-se</Nav.Link>
                  <Nav.Link className="nav-button btn" style={{ color: '#F79824', border: '2px solid #F79824', borderRadius: '9px' }} href="/login">Login</Nav.Link>
                </>
              )}

              {isLoggedIn && (
                <Nav.Link className="nav-button btn" style={{ color: '#F79824', border: '2px solid #F79824', borderRadius: '9px' }} onClick={logout}>Sair</Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Nbar;

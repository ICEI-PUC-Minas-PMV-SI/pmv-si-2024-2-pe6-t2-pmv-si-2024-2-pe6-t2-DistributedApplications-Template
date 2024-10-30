import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


function Nbar() {
  return (
    <>
      <Navbar style={{ backgroundColor: '#7E5A9B' }}>
        <Container className='d-flex'>
          <Navbar.Brand href="#home" className='d-flex flex-row'>
            <img
              alt=""
              src="/icon.png"
              width="50"
              height="50"
              className='me-5'
            />{' '}
            <Nav className='Nav'>
            <Nav.Link style={{ color: '#F79824' }} href="/prestador" >Cadastro</Nav.Link>
            <Nav.Link style={{ color: '#F79824' }} href="/login">Login</Nav.Link>
            </Nav>

          </Navbar.Brand >
        </Container>
      </Navbar>
    </>
  );
}

export default Nbar;
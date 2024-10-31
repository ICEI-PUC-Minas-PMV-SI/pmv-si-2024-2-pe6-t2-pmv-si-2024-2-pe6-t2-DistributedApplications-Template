import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';



function PagInicial() {
return(
    <Container

    fluid className="d-flex justify-content-center align-items-center min-vh-100">
    <Row className="text-center w-75">
        <Col lg={6} className="mx-auto">
            <Col lg={8} className="mx-auto">
                <Image className="rounded mx-auto d-block" src="./icon.png" style={{ width: '75%' }} />
                <figcaption class="figure-caption" style={{ color: '#F79824', fontSize: '50px', textAlign: 'center', fontFamily: 'Luckiest Guy' }}>
                    Agenda <br /> Fácil</figcaption>
                    <p style={{fontSize: '24px'}}>Simplifique sua agenda, impulsione seu negócio.</p>
            </Col>
        </Col>
    </Row>
    </Container>
)
    
}

export default PagInicial;
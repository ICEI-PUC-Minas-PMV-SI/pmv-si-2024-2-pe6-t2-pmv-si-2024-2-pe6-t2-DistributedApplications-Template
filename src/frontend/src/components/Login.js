import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    async function handleLogin(e) {
        e.preventDefault();
        try {
            const response = await api.post('/login', {
                email,
                password
            });

            if (response.status === 200) { // O status de sucesso pode ser 200
                navigate('/home'); // Redireciona para a página de inicial
            }
        } catch (error) {
            console.error("Erro no Login:", error);
            if (error.response) {
                // Verifica o status da resposta
                if (error.response.status === 401) {
                    alert("Senha incorreta!"); // Mensagem específica para senha incorreta     
                } else if (error.response.status === 404) {
                    alert("Usuário não encontrado!");} 
                else if (error.response.data && error.response.data.message) {
                    alert(error.response.data.message); // Exibe a mensagem de erro do servidor
                } else {
                    alert("Erro ao tentar realizar o login.");
                }
            } 
        }
    }


    return (


        <Container className='w-50 p-1' controlId="container">
            <Row className='row justify-content-md-center'>
                <Col xs={1} md={6}>
                    <Image className='rounded mx-auto d-block w-75 p-2' src="./icon.png" />
                </Col>
                <h1 style={{ color: '#F79824', fontSize: '35px', textAlign: 'center', fontFamily: 'Luckiest Guy' }}>
                    Agenda <br /> Fácil
                </h1>
                <Form xs={1} md={6} className='shadow-sm w-100'
                    style={{
                        borderRadius: '8px',
                        border: '3px solid #7E5A9B',
                        color: '#7E5A9B',
                        fontSize: '24px',
                        margin: '0 auto'
                    }}
                    onSubmit={handleLogin}
                >
                    <Form.Group className="mb-3 mt-3" controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            style={{
                                border: '3px solid #7E5A9B',
                                borderRadius: '8px'
                            }}
                            type="email"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="password">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control
                            style={{
                                border: '3px solid #7E5A9B',
                                borderRadius: '8px'
                            }}
                            type="password"
                            required 
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>
                    <div className='position-relative mb-2'>
                        <Button type='submit'
                            style={{
                                backgroundColor: '#F79824',
                                borderRadius: '8px',
                                border: '3px solid #F79824',
                                fontSize: '24px',
                                fontFamily: 'inherit',
                                justifyItems: 'end'
                            }}
                        > 
                            Entrar
                        </Button>
                    </div>
                </Form>
            </Row>
        </Container>
    );
}

export default Login;

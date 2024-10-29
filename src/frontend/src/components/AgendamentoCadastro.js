import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import axios from 'axios';

import '../components/styles/AgendamentoCadastro.css';

const AgendamentoCadastro = () => {
    const [nomeCliente, setNomeCliente] = useState('');
    const [nomePrestador, setNomePrestador] = useState('');
    const [data, setData] = useState('');
    const [horario, setHorario] = useState('');

    const handleCadastro = async (e) => {
        e.preventDefault();

        const agendamento = {
            nomeCliente,
            nomePrestador,
            data,
            horario: converterHorario(horario),
        };

        try {
            const response = await axios.post('http://localhost:3000/agendamentos', agendamento);

            if (response.status === 201) {
                alert('Cadastro realizado com sucesso!');
                setNomeCliente('');
                setNomePrestador('');
                setData('');
                setHorario('');
            }
        } catch (error) {

            if (error.response) {
                console.error('Erro ao enviar dados:', error.response.data);
                alert('Erro ao realizar o agendamento: ' + error.response.data.message);
            } else {
                console.error('Erro ao conectar com o servidor:', error.message);
                alert('Erro ao conectar com o servidor');
            }
        }
    };

    const converterHorario = (time) => {
        const [hours, minutes] = time.split(':').map(Number);
        return hours * 60 + minutes;
    };


    return (
        <Container className='w-50 p-5' controlId="container">
            <Row className='row justify-content-md-center'>
                <h1 className="mb-4 mt-3"
                    style={{ color: '#7E5A9B', fontSize: '58px', textAlign: 'center' }}>AGENDAMENTO</h1>

                <Form onSubmit={handleCadastro} style={{
                    backgroundColor: '#F5F5F5',
                    borderRadius: '8px',
                    border: '3px solid #7E5A9B',
                    color: '#7E5A9B',
                    fontSize: '24px'
                }}>
                    <Form.Group className="mb-3 mt-3" controlId="nomeCliente">
                        <Form.Label>Nome Cliente</Form.Label>
                        <div className='input' style={{
                            border: '3px solid #7E5A9B',
                            borderRadius: '8px'
                        }}>
                            <Form.Control
                                type="text"
                                name='nomeCliente'
                                value={nomeCliente}
                                onChange={(e) => setNomeCliente(e.target.value)}
                            />
                        </div>
                    </Form.Group>

                    <Form.Group className="mb-3 mt-3" controlId="nomePrestador">
                        <Form.Label>Nome Prestador</Form.Label>
                        <div className='input' style={{
                            border: '3px solid #7E5A9B',
                            borderRadius: '8px'
                        }}>
                            <Form.Control
                                type="text"
                                name='nomePrestador'
                                value={nomePrestador}
                                onChange={(e) => setNomePrestador(e.target.value)}
                            />
                        </div>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="data">
                        <Form.Label>Data</Form.Label>
                        <div className='input' style={{
                            border: '3px solid #7E5A9B',
                            borderRadius: '8px'
                        }}>
                            <Form.Control
                                type="date"
                                value={data}
                                onChange={(e) => setData(e.target.value)}
                            />
                        </div>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="horario">
                        <Form.Label>Horário</Form.Label>
                        <div className='input' style={{
                            border: '3px solid #7E5A9B',
                            borderRadius: '8px'
                        }}>
                            <Form.Control
                                type="time"
                                value={horario}
                                onChange={(e) => setHorario(e.target.value)}
                            />
                        </div>
                    </Form.Group>

                    <div className='d-grid gap-2 d-md-flex justify-content-md-end mb-3'>
                        <Button type='submit' className="btn btn-success d-flex align-items-end">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF">
                                <path d="M400-304 240-464l56-56 104 104 264-264 56 56-320 320Z" />
                            </svg> SALVAR
                        </Button>

                        <Button type='button' className="btn btn-danger" onClick={() => alert('Cadastro cancelado')}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF">
                                <path d="m336-280-56-56 144-144-144-143 56-56 144 144 143-144 56 56-144 143 144 144-56 56-143-144-144 144Z" />
                            </svg> CANCELAR
                        </Button>
                    </div>
                </Form>
            </Row>
        </Container>
    );
};

export default AgendamentoCadastro;

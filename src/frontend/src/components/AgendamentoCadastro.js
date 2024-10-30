import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

import '../components/styles/AgendamentoCadastro.css';

const AgendamentoCadastro = () => {
    const location = useLocation(); // Hook para acessar os dados da rota
    const agendamentoData = location.state?.agendamento; // Obtém os dados do agendamento

    const [nomeCliente, setNomeCliente] = useState(agendamentoData ? agendamentoData.nomeCliente : '');
    const [nomePrestador, setNomePrestador] = useState(agendamentoData ? agendamentoData.nomePrestador : '');
    const [data, setData] = useState(agendamentoData ? new Date(agendamentoData.data).toISOString().substring(0, 10) : '');    
    const [horario, setHorario] = useState(agendamentoData ? agendamentoData.horario : '');

    const handleCadastro = async (e) => {
        e.preventDefault();
        
        const agendamento = {
            nomeCliente,
            nomePrestador,
            data: new Date(data).toISOString(),
            horario: Number(horario), // Converter para número
        };

        try {
            if (agendamentoData) {
                // Se estamos editando, fazemos uma atualização
                await axios.put(`http://localhost:3000/agendamentos/${agendamentoData._id}`, agendamento);
            } else {
                // Se estamos criando, fazemos uma criação
                await axios.post('http://localhost:3000/agendamentos', agendamento);
            }
            alert('Cadastro realizado com sucesso!');
            setNomeCliente('');
            setNomePrestador('');
            setData('');
            setHorario('');
        } catch (error) {
            console.error('Erro ao enviar dados:', error);
            alert('Erro ao conectar com o servidor');
        }
    };

    return (
        <Container className='w-50 p-5' controlId="container">
            <Row className='row justify-content-md-center'>
                <h1 className="mb-4 mt-3" style={{ color: '#F79824', fontSize: '58px', textAlign: 'center', color: '#7E5A9B' }}>
                    AGENDAMENTO
                </h1>

                <Form style={{ backgroundColor: '#F5F5F5', borderRadius: '8px', border: '3px', color: '#7E5A9B', fontSize: '24px' }} onSubmit={handleCadastro}>
                    <Form.Group className="mb-3 mt-3" controlId="nomeCliente">
                        <Form.Label>Nome Cliente</Form.Label>
                        <Form.Control type="text" name='nomeCliente' value={nomeCliente} onChange={(e) => setNomeCliente(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3 mt-3" controlId="nomePrestador">
                        <Form.Label>Nome Prestador</Form.Label>
                        <Form.Control type="text" name='nomePrestador' value={nomePrestador} onChange={(e) => setNomePrestador(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="data">
                        <Form.Label>Data</Form.Label>
                        <Form.Control type="date" required value={data} onChange={(e) => setData(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="horario">
                        <Form.Label>Horário</Form.Label>
                        <Form.Control type="number" name='horario' value={horario} onChange={(e) => setHorario(e.target.value)} />
                    </Form.Group>

                    <div className='d-grid gap-2 d-md-flex justify-content-md-end mb-3'>
                        <Button type='submit' className="btn btn-success d-flex align-items-end">SALVAR</Button>
                        <Button type='button' className="btn btn-danger" onClick={() => {
                            setNomeCliente('');
                            setNomePrestador('');
                            setData('');
                            setHorario('');
                        }}>CANCELAR</Button>
                    </div>
                </Form>
            </Row>
        </Container>
    );
};

export default AgendamentoCadastro;

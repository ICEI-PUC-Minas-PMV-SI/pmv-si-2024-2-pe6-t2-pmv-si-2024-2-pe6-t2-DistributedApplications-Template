import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const ListaClientes = () => {
    const [clientes, setClientes] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchClientes = async () => {
            try {
                const response = await axios.get('http://localhost:3000/clientes');
                setClientes(response.data);
            } catch (error) {
                console.error('Erro ao buscar clientes:', error);
            }
        };

        fetchClientes();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/clientes/${id}`);
            setClientes(clientes.filter(cliente => cliente._id !== id));
        } catch (error) {
            console.error('Erro ao excluir cliente:', error);
        }
    };

    const handleEdit = (cliente) => {
        navigate('/clientes', { state: { cliente} });
    };

    return (
        <div style={{ padding: '20px', backgroundColor: '#F5F5F5' }}>
            <h1 style={{ color: '#7E5A9B', fontSize: '58px', textAlign: 'center' }}>Lista de Clientes</h1>
            <Table striped bordered hover style={{ marginTop: '20px' }}>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Telefone</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {clientes.map((cliente) => (
                        <tr key={cliente._id}>
                            <td>{cliente.nome}</td>
                            <td>{cliente.email}</td>
                            <td>{cliente.telefone}</td>
                            <td>
                                <Button
                                    variant="warning"
                                    className="me-2"
                                    onClick={() => handleEdit(cliente)}
                                    style={{ backgroundColor: '#7E5A9B', borderColor: '#7E5A9B', color: 'white', marginRight: '10px' }}
                                >
                                    Editar
                                </Button>
                                <Button
                                    variant="danger"
                                    onClick={() => handleDelete(cliente._id)}
                                    style={{ backgroundColor: '#d9534f', borderColor: '#d9534f', color: 'white' }}
                                >
                                    Excluir
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default ListaClientes;

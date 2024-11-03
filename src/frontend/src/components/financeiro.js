import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import api from '../services/api';
import { useAuth } from './AuthContext';

const Financeiro = () => {
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [valor, setValor] = useState("");
  const [titulo, setTitulo] = useState("");
  const [retiradas, setRetiradas] = useState([]);
  const [dataInicio, setDataInicio] = useState("");
  const [dataFim, setDataFim] = useState("");
  const [isPeriodoPesquisado, setIsPeriodoPesquisado] = useState(false);
  const [retiradaSelecionada, setRetiradaSelecionada] = useState(null);
  const { userId } = useAuth();

  const handleShow = () => {
    setValor("");
    setTitulo("");
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  const handleEditShow = () => {
    if (!isPeriodoPesquisado) {
      alert("Por favor, realize uma pesquisa por período antes de editar.");
      return;
    }
    setShowEditModal(true);
  };

  const handleEditClose = () => {
    setValor("");
    setTitulo("");
    setRetiradaSelecionada(null);
    setShowEditModal(false);
  };

  const carregarRetiradas = async () => {
    if (!dataInicio || !dataFim) {
      alert("Por favor, informe o período completo para buscar as retiradas.");
      return;
    }

    try {
      const response = await api.get('/caixa', {
        params: {
          dataInicio,
          dataFim,
          userId  
        },
      });

      setRetiradas(response.data);
      setIsPeriodoPesquisado(true);
    } catch (error) {
      console.error("Erro ao carregar retiradas:", error);
    }
  };

  async function handleCadastro(e) {
    e.preventDefault();
    const idUsuario = userId;
    const cnpj = "12345678901234";

    try {
      await api.post('/caixa', { valor, idUsuario, cnpj, titulo });
      alert("Item financeiro salvo com sucesso!");
      setValor("");
      setTitulo("");
      handleClose();
    } catch (error) {
      console.error("Erro ao salvar item financeiro:", error);
      alert("Ocorreu um erro ao salvar o item financeiro.");
    }
  }

  const handleSelectRetirada = (id) => {
    const retirada = retiradas.find((retirada) => retirada._id === id);
    
    if (retirada) {
      setRetiradaSelecionada(retirada);
      setValor(retirada.valor);
      setTitulo(retirada.titulo);
    }
  };

  const handleSaveEdit = async () => {
    if (!retiradaSelecionada) {
      alert("Por favor, selecione uma retirada para editar.");
      return;
    }
  
    try {
      const updatedData = { valor, titulo };
      await api.put(`/caixa/${retiradaSelecionada._id}`, updatedData);
  
      setRetiradas((prevRetiradas) =>
        prevRetiradas.map((item) =>
          item._id === retiradaSelecionada._id ? { ...item, valor, titulo } : item
        )
      );
  
      alert("Retirada atualizada com sucesso!");
      handleEditClose();
    } catch (error) {
      console.error("Erro ao atualizar retirada:", error);
      alert("Ocorreu um erro ao atualizar a retirada: " + error.message);
    }
  };

  const handleDelete = async () => {
    if (!retiradaSelecionada) {
      alert("Por favor, selecione uma retirada para excluir.");
      return;
    }

    const confirmDelete = window.confirm("Tem certeza que deseja excluir esta retirada?");
    if (!confirmDelete) {
      return;
    }

    try {
      await api.delete(`/caixa/${retiradaSelecionada._id}`);

      setRetiradas((prevRetiradas) =>
        prevRetiradas.filter((item) => item._id !== retiradaSelecionada._id)
      );

      alert("Retirada excluída com sucesso!");
      handleEditClose();
    } catch (error) {
      console.error("Erro ao excluir retirada:", error);
      alert("Ocorreu um erro ao excluir a retirada: " + error.message);
    }
  };

  return (
    <div className="financeiro-container container">
      <style jsx="true">{`
        .financeiro-container {
          color: #7E5A9B;
          margin-top: 20px;
        }

        h2 {
          color: #7E5A9B;
          font-weight: bold;
        }

        .periodo label {
          color: #7E5A9B;
        }

        .financial-item {
          border: 1px solid #7E5A9B;
          border-radius: 5px;
          background-color: #FFFFFF;
          color: #7E5A9B;
        }

        .action-buttons .btn {
          border-radius: 50%;
          width: 50px;
          height: 50px;
        }

        .add-button {
          background-color: #7E5A9B;
          color: #FFFFFF;
        }

        .edit-button {
          background-color: #F79824;
          color: #FFFFFF;
        }

        .action-buttons .btn:hover {
          opacity: 0.8;
        }

        .form-control {
          width: 150px;
        }

        .square-button {
          width: 40px;
          height: 40px;
          padding: 0;
          border-radius: 10px !important;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .mx-1 {
          margin-top: 20px;
        }

        .button-icon {
          width: 24px;
          height: 24px;
        }
      `}</style>
      <header className="text-center mb-4">
        <h2>FINANCEIRO</h2>
      </header>

      <div className="periodo mb-4">
        <label>Período</label>
        <div className="d-flex gap-2">
          <input
            type="date"
            className="form-control"
            value={dataInicio}
            onChange={(e) => setDataInicio(e.target.value)}
          />
          <span className="mx-1">à</span>
          <input
            type="date"
            className="form-control"
            value={dataFim}
            onChange={(e) => setDataFim(e.target.value)}
          />
          <div className="action-buttons mt-3 d-flex gap-3 justify-content-start">
            <button className="btn add-button square-button" onClick={carregarRetiradas}>
              <i className="bi bi-plus-circle"></i>
              <img src="/lupa.png" alt="Carregar Retiradas" className="button-icon" />
            </button>
          </div>
          <div className="action-buttons mt-3 d-flex gap-3 justify-content-end ms-auto">
            <button className="btn add-button square-button" onClick={handleShow}>
              <i className="bi bi-plus-circle"></i>
              <img src="/adicao.png" alt="Adicionar" className="button-icon" />
            </button>
            <button className="btn edit-button square-button" onClick={handleEditShow}>
              <i className="bi bi-pencil"></i>
              <img src="lapis.png" alt="Editar" className="button-icon" />
            </button>
          </div>
        </div>
      </div>

      <div className="d-flex flex-column gap-2">
        {retiradas.map((retirada, index) => (
          <div key={index} className="financial-item d-flex justify-content-between align-items-center p-3">
            <span>{retirada.titulo}</span>
            <span>R${retirada.valor}</span>
          </div>
        ))}
      </div>

      {/* Modals */}
      {/* Adicionar Modal */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Adicionar Retirada</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="mb-3">
              <label htmlFor="titulo" className="form-label">Título</label>
              <input
                type="text"
                className="form-control"
                id="titulo"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
                placeholder="Ex: Retirada 03"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="valor" className="form-label">Valor</label>
              <input
                type="number"
                className="form-control"
                id="valor"
                value={valor}
                onChange={(e) => setValor(e.target.value)}
                placeholder="Ex: 1000"
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Cancelar</Button>
          <Button variant="primary" onClick={handleCadastro}>Salvar</Button>
        </Modal.Footer>
      </Modal>

      {/* Editar Modal */}
      <Modal show={showEditModal} onHide={handleEditClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Retirada</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="mb-3">
              <label htmlFor="titulo" className="form-label">Título</label>
              <input
                type="text"
                className="form-control"
                id="titulo"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="valor" className="form-label">Valor</label>
              <input
                type="number"
                className="form-control"
                id="valor"
                value={valor}
                onChange={(e) => setValor(e.target.value)}
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleEditClose}>Cancelar</Button>
          <Button variant="danger" onClick={handleDelete}>Excluir</Button>
          <Button variant="primary" onClick={handleSaveEdit}>Salvar</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Financeiro;

let clientes = []; // Banco de dados 

const findClienteById = (id) => {
  return clientes.find(cliente => cliente.id === id);
};

const addCliente = (cliente) => {
  cliente.id = clientes.length + 1;
  clientes.push(cliente);
  return cliente;
};

const getAllClientes = () => {
  return clientes;
};

const updateCliente = (id, data) => {
  const cliente = findClienteById(id);
  if (cliente) {
    cliente.nome = data.nome || cliente.nome;
    cliente.telefone = data.telefone || cliente.telefone;
    cliente.email = data.email || cliente.email;
    return cliente;
  }
  return null;
};

const deleteCliente = (id) => {
  const index = clientes.findIndex(cliente => cliente.id === id);
  if (index !== -1) {
    clientes.splice(index, 1);
    return true;
  }
  return false;
};

module.exports = {
  findClienteById,
  addCliente,
  getAllClientes,
  updateCliente,
  deleteCliente
};

const conn = require ('../db/conn');

const getAll = async () => {
  const [agendamentos] = await connection.execute('SELECT * FROM agendamentos');
  return agendamentos;
};

const createAgendamento = async (agendamento) => {
  const { title } = agendamento;
  const dateUTC = new Date(Date.now()).toUTCString();

  //const query = 'incluir as querys';

  const [createdAgendamento] = await connection.execute(query, [title, 'pendente', dateUTC]);  // discutir parametros
  return { insertId: createdAgendamento.insertId };
};

const deleteAgendamento = async (id) => {
  //const [removedAgendamento] = await connection.execute('DELETE FROM agendamentos WHERE id = ?', [id]);
 // return removedAgendamento;
};

const updateAgendamento = async (id, agendamento) => {
  const { title, status } = agendamento;
  
  //const query = 'incluir as querys';

  const [updatedAgendamento] = await connection.execute(query, [title, status, id]);  // discutir parametros
  return updatedAgendamento;
};

module.exports = {
  getAll,
  createAgendamento,
  deleteAgendamento,
  updateAgendamento,
};

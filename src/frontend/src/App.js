import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Cadastro from './components/Cadastro';
import CadastroClientes from './components/CadastroClientes';
import './global.css';
import Nbar from './components/nav';
import Servico from './components/Servico';
import Agendamento from './components/Agendamento';
import AgendamentoCadastro from './components/AgendamentoCadastro';
import AgendamentoView from './components/AgendamentoView';






function App() {
  return (

    <BrowserRouter>
        <Nbar/>
    <Routes>
      <Route path='/prestador' element={<Cadastro/>} />
      <Route path='/clientes'element={<CadastroClientes/>}/>
      <Route path='/servico'element={<Servico/>}/>
      <Route path='/agendamento'element={<Agendamento/>}/>  
      <Route path='/agendamentoCadastro' element={<AgendamentoCadastro/>}/>    
      <Route path='/agendamentoView' element={<AgendamentoView/>}/>    
      <Route path='*'element={<h1>Informe a rota</h1>}/>
     
    </Routes>
    </BrowserRouter>

  );
}

export default App;

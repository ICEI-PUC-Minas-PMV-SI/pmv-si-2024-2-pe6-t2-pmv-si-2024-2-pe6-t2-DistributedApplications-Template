import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Cadastro from './components/Cadastro';
import CadastroClientes from './components/CadastroClientes';
import './global.css';
import Nbar from './components/nav';
import Servico from './components/Servico';
import Agedamento from './components/Agendamento';
import Login from './components/Login';
import PagInicial from './components/pagInicial';
import AgendamentoCadastro from './components/AgendamentoCadastro';
import AgendamentosView from './components/AgendamentoView';



function App() {
  return (

    <BrowserRouter>
        <Nbar/>
    <Routes>
      <Route path='/prestador' element={<Cadastro/>} />
      <Route path='/clientes'element={<CadastroClientes/>}/>
      <Route path='/servico'element={<Servico/>}/>
      <Route path='/agendamento'element={<Agedamento/>}/>
      <Route path='/agendamentoCadastro' element={<AgendamentoCadastro/>}/>    
      <Route path='/agendamentoView' element={<AgendamentosView/>}/>  
      <Route path='/login'element={<Login/>}/>
      <Route path='/inicio'element={<PagInicial/>}/>
      <Route path='*'element={<h1>Informe a rota</h1>}/>
     
    </Routes>
    </BrowserRouter>

  );
}

export default App;

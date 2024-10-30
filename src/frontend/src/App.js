import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Cadastro from './components/Cadastro';
import CadastroClientes from './components/CadastroClientes';
import './global.css';
import Nbar from './components/nav';
import Servico from './components/Servico';





function App() {
  return (

    <BrowserRouter>
        <Nbar/>
    <Routes>
      <Route path='/prestador' element={<Cadastro/>} />
      <Route path='/clientes'element={<CadastroClientes/>}/>
      <Route path='/servico'element={<Servico/>}/>
      <Route path='*'element={<h1>Informe a rota</h1>}/>
     
    </Routes>
    </BrowserRouter>

  );
}

export default App;

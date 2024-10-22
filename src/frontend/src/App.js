import {BrouserRouter, BrowserRouter, Route, Routes} from 'react-router-dom'
import Cadastro from './components/Cadastro';
import CadastroClientes from './components/CadastroClientes';
import './global.css'





function App() {
  return (

    <BrowserRouter>
    <Routes>
      <Route path='/prestador' element={<Cadastro/>} />
      <Route path='/clientes'element={<CadastroClientes/>}/>
      <Route path='*'element={<h1>Informe a rota</h1>}/>
     
    </Routes>
    </BrowserRouter>

  );
}

export default App;

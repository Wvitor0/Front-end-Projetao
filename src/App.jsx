import Home from './Routes/Home';
import Pedido from './Routes/Pedido';
import Cadastro from './Routes/Cadastro';
import Cardapio from './Routes/Cardapio';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import BarraNav from './Components/BarraNav';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <BarraNav/>
      <div className='c'>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/Cadastro" element={<Cadastro/>}></Route>
          <Route path="/Pedido" element={<Pedido/>}></Route>
          <Route path="/Cardapio" element={<Cardapio/>}></Route>
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
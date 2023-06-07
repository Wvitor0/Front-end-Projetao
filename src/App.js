import Home from './Components/Home';
import Pedido from './Components/Pedido';
import Cadastro from './Components/Cadastro';
import Pizzas from './Components/Pizzas';
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
          <Route path="/Pizzas" element={<Pizzas/>}></Route>
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
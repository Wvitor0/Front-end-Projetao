import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import './BarraNav.css';

function BarraNav(){
    return(
      <Navbar bg="black" variant="dark">
          <Container>
            <Nav className="me-auto">
              <Nav.Link id='cores' as={Link} to="/">Home</Nav.Link>
              <Nav.Link id='cores' as={Link} to="/Cadastro">Cadastro</Nav.Link>
              <Nav.Link id='cores' as={Link} to="/Pedido">Pedido</Nav.Link>
              <Nav.Link id='cores' as={Link} to="/Cardapio">Cardápio</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
    );
}

export default BarraNav;
import './Home.css';
import {Link} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

function Home(){
    return(
        <div className='home'>
            <div className='content'>
                <div className='contents'>
                    <p>A Pizzaria Mais Sabor oferece um atendimento rápido e eficiente. 
                        Além disso, temos todos os tipos de sabores que agradam os mais diversos paladares.
                        Peça já a sua, mas antes, cadastre um endereço!
                    </p>
                    <div className='button'>
                        <Container>
                        <Nav className="me-auto">
                            <Nav.Link id='a' as={Link} to="/Cadastro">Cadastre-se</Nav.Link>
                        </Nav>
                        </Container>
                    </div>
                </div>
            </div>
            <div className='content2'>
                <h3>Melhores pizzas da região</h3>
                <p>Temos as melhores pizzas com diversos sabores.</p>
                <b>Peça já a sua</b>
                <div className='button2'>
                    <Container>
                    <Nav>
                        <Nav.Link id='a' as={Link} to="/Pizzas"><img src='assets/seta.png'></img></Nav.Link>
                    </Nav>
                    </Container>
                </div>
            </div>
        </div>  
    )
}

export default Home;
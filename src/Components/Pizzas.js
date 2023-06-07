import React from "react";
import Card from 'react-bootstrap/Card';
import './PizzasStyle.css';

function Pizzas(){
    return (
        <div className="cards">
            <Card className="card-style" style={{ width: '18rem', height: '28rem' }}>
            <Card.Img id="img" variant="top" src="assets/Pizza2.jpg" />
            <Card.Body>
                <Card.Title>Pizza de Calabresa</Card.Title>
                <Card.Text>
                Molho de tomate, queijo muçarela, calabresa, cebola, e orégano.
                </Card.Text>
                <p id="price">R$ 49,90</p>
                <button>+</button>
            </Card.Body>

            </Card>
            <Card className="card-style" style={{ width: '18rem', height: '28rem' }}>
            <Card.Img id="img" variant="top" src="assets/Pizza1.jpg"/>
            <Card.Body>
                <Card.Title>Pizza de Muçarela</Card.Title>
                <Card.Text>
                    Molho de tomate, queijo muçarela, finalizado com azeitona e orégano.
                </Card.Text>
                <p id="price">R$ 49,90</p>
                <button>+</button>
            </Card.Body>
            </Card>
        
            <Card className="card-style" style={{ width: '18rem', height: '28rem'}}>
            <Card.Img id="img" variant="top" src="assets/Pizza3.jpg"/>
            <Card.Body>
                <Card.Title>Pizza de Frango com Catupiry</Card.Title>
                <Card.Text>
                    Molho de tomate, muçarela, frango desfiado, catupiry, e orégano.
                </Card.Text>
                <p id="price">R$ 54,90</p>
                <button>+</button>
            </Card.Body>
            </Card>

            <Card className="card-style" style={{ width: '18rem', height: '28rem' }}>
            <Card.Img id="img" variant="top" src="assets/Pizza4.jpg"/>
            <Card.Body>
                <Card.Title>Pizza de Brigadeiro</Card.Title>
                <Card.Text>
                    Brigadeiro tradicional, granulado e morango.
                </Card.Text>
                <p id="price">R$ 36,90</p>
                <button>+</button>
            </Card.Body>
            </Card>
        </div>
      );
}

export default Pizzas;
import './Cadastro.css'
import Table from 'react-bootstrap/Table';
import Formulario from './Formulario';

function Cadastro(){
    return (
        <div className="cadastro">
            <h1><b>Cadastre um novo endereço</b></h1>
            <Formulario />
            <Table striped bordered hover>
            <thead>
                <tr>
                <th>Nome</th>
                <th>Rua</th>
                <th>CEP</th>
                <th>Numero</th>
                <th>Complemento</th>
                <th>Opções</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                
                </tr>
            </tbody>
            </Table>
        </div>
    );
}

export default Cadastro;
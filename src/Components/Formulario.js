
import React from 'react';

function Formulario(){
    return (
        <div className="form">
            <form>
            <input type='text' name="nome" placeholder='Nome'/>
            <input type='text' name="cep" placeholder='Cep'/>
            <input type='text' name="bairro" placeholder='Bairro'/>
            <input type='text' name="rua" placeholder='Rua'/>
            <input type='text' name="complemento" placeholder='Complemento'/>
            <button type='submit'>Enviar</button>
            </form>
        </div>
    );
}

export default Formulario;
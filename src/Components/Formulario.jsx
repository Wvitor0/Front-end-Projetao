import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import './Formulario.css';

const Formulario = () => {
    const [nome, setNome] = useState()
    const [cep, setCep] = useState()
    const [bairro, setBairro] = useState()
    const [rua, setRua] = useState()
    const [complemento, setComplemento] = useState()

    const createPost = async (e) => {
        const post = {nome, cep, bairro, rua, complemento};
        await axios.post("http://localhost:8080/cliente", post);
    }
    
    return (
        <div className="form">
            <form onSubmit={(e) => createPost(e)}>
            <input 
                type='text' 
                id='nome' 
                name="nome" 
                placeholder='Nome'
                onChange={(e) => setNome(e.target.value)}
                autoComplete='off'
            />
            <input 
                type='text' 
                id='cep' 
                name="cep" 
                placeholder='Cep'
                onChange={(e) => setCep(e.target.value)}
                autoComplete='off'
            />
            <input 
                type='text' 
                id='bairro' 
                name="bairro" 
                placeholder='Bairro'
                onChange={(e) => setBairro(e.target.value)}
                autoComplete='off'
            />
            <input 
                type='text' 
                id='rua' 
                name="rua" 
                placeholder='Rua'
                onChange={(e) => setRua(e.target.value)}
                autoComplete='off'
            />
            <input 
                type='text' 
                id='complemento' 
                name="complemento" 
                placeholder='Complemento'
                onChange={(e) => setComplemento(e.target.value)}
                autoComplete='off'
            />
            <button  className='enviar' type='submit'>Enviar</button>
            </form>
        </div>
    );
}

export default Formulario;
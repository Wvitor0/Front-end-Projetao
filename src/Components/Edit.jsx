import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import './Edit.css';
import { Link, useNavigate, useParams } from 'react-router-dom';

const Edit = () => {
    let navigate=useNavigate()

    const [posts, setPosts] = useState({
        nome:"",
        cep:"",
        bairro:"",
        rua:"",
        complemento:""
    })

    const{nome,cep,bairro,rua,complemento}=posts;
    
    const onInputChange = (e) => {

        setPosts({...posts,[e.target.name]:e.target.value});
    }

    const onSubmit = async (e) => {
        await axios.put("http://localhost:8080/cliente/69", posts);
        navigate("/Cadastro")
    };

    return (
        <div className='content-form'>
        <div className="form-edit">
            <h2>Atualize seus dados!</h2>
            <form onSubmit={(e) => onSubmit(e)}>
            <input 
                type='text' 
                id='nome' 
                name="nome" 
                placeholder='Nome'
                onChange={(e)=>onInputChange(e)}
                autoComplete='off'
            />
            <input 
                type='text' 
                id='cep' 
                name="cep" 
                placeholder='Cep'
                onChange={(e)=>onInputChange(e)}
                autoComplete='off'
            />
            <input 
                type='text' 
                id='bairro' 
                name="bairro" 
                placeholder='Bairro'
                onChange={(e)=>onInputChange(e)}
                autoComplete='off'
            />
            <input 
                type='text' 
                id='rua' 
                name="rua" 
                placeholder='Rua'
                onChange={(e)=>onInputChange(e)}
                autoComplete='off'
            />
            <input 
                type='text' 
                id='complemento' 
                name="complemento" 
                placeholder='Complemento'
                onChange={(e)=>onInputChange(e)}
                autoComplete='off'
            />
            <button  className='enviar' type='submit'>Enviar</button>
            </form>
        </div>
        </div>
    );
}

export default Edit;
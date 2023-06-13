import './Cadastro.css'
import Formulario from '../Components/Formulario';
import { useState, useEffect } from 'react';
import axios from "axios";
import Modal from 'react-modal';
import Edit from '../Components/Edit';
import React from 'react';

const Cadastro = () =>{
    Modal.setAppElement('#root');

    const customStyles = {
        overlay: {
          backgroundColor: 'rgba(240, 240, 240, 0.5)'
        },
        content: {
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '900px',
          height: '700px',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
          background: '#fff'
        }
      };

    const[posts, setPosts] = useState([]);

    const getPosts = async() => {
        const response = await axios.get("http://localhost:8080/cliente");
        const data = response.data;
        setPosts(data);
    };

    useEffect(() => {
        getPosts();
    }, []);

    const deleteCliente = async (id) =>{
        await axios.delete("http://localhost:8080/cliente/" + id)
        getPosts();
    };

    const [modalIsOpen, setIsOpen, setId] = React.useState(false)
    
    const abrirModal = () => {
        setIsOpen(true);
    };

    const fecharModal = () => {
        setIsOpen(false);
    };

    return (
        <div className="cadastro">
            <h1><b>Cadastre um novo endereço</b></h1>
            <Formulario />
            <div className='dados'>
            {posts.length === 0 ? (<p>Carregando...</p>) : (
                posts.map((post) => (
                    <div className='post' key={post.id}>
                        <h2><b>Nome: </b>{post.nome}</h2>
                        <p><b>Cep: </b>{post.cep}</p>
                        <p><b>Bairro: </b>{post.bairro}</p>
                        <p><b>Rua: </b>{post.rua}</p>
                        <p><b>Complemento: </b>{post.complemento}</p>
                        <div className='buttons'>
                            <button className='delete' type="submit" onClick={()=>deleteCliente(post.id)}>Deletar</button>
                            <button className='update' type="submit" onClick={abrirModal}>Atualizar</button>
                        </div>
                    </div>
                ))
            )}
            </div>
            <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={fecharModal}
                style={customStyles}
                contentLabel="Modal de exemplo" 
            >
            <Edit/>
            <button className='delete2' onClick={fecharModal}>Fechar</button>
            </Modal>
            </div>
        </div>
    );
}

export default Cadastro;
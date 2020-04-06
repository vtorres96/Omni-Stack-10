import React, { useState } from 'react';
import { Button, Modal } from "react-bootstrap";
import { TrashFill } from "react-bootstrap-icons";

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import api from '../../services/api';

const DevItem = ({ dev }) => {
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDeleteDev = async (id) => {
    const response = await api.delete('/devs/delete/' + id);

    setMessage(response.data.message);
    
    setTimeout(() => {
      setShow(false);
    }, 2000);
  }

  return (
    <li className="dev-item">
      <header>
        <img src={dev.avatar_url} alt={dev.name} />
        <div className="user-info">
          <strong>{dev.name}</strong>  
          <span>{dev.techs.join(', ')}</span>
        </div>              
      </header>
      <p>{dev.bio}</p>
      <div className="user-footer">
        <a target="blank" href={`https://github.com/${dev.github_username}`}>Acessar perfil no Github</a>
        <TrashFill onClick={handleShow}/>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Excluir Desenvolvedor</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {message ? message : `Você tem certeza que deseja realmente excluir ${dev.github_username}` }
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
          <Button variant="danger" onClick={() => handleDeleteDev(dev._id)}>
            Excluir
          </Button>
        </Modal.Footer>
      </Modal>
    </li>
  );
}

export default DevItem;
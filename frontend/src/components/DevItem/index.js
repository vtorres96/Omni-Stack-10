import React from 'react';
import { Delete } from "@material-ui/icons";

import './styles.css';

const DevItem = ({ dev }) => {

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
        <a target="_blank" href={`https://github.com/${dev.github_username}`}>Acessar perfil no Github</a>
        <Delete onClick="" />
      </div>
    </li>
  );
}

export default DevItem;
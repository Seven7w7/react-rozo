import React from 'react';
import './Cards.css'; 

export const  Card = ({ imageUrl, title, description, link }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <a href={link} className="card-link">Enlace</a>
      </div>
    </div>
  );
}
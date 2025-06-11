import React from 'react';
import './Card.css';

export default function Card({ title, description, link, image }) {
  return (
    <div className="card">
      {image && (
        <a href={link} target="_blank" rel="noopener noreferrer" className="card-image-link">
          <img src={image} alt={title} className="card-image" />
        </a>
      )}
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      {link && (
        <a className="card-link" href={link} target="_blank" rel="noopener noreferrer">
          Learn More
        </a>
      )}
    </div>
  );
}


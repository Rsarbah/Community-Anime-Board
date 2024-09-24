import React from 'react';
import './Card.css';


const Card = ({title, image , description,link}) => {
    return (
        <div className="card">
            <img src={image} alt={title}  className='card-image'/>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className="card-description">{description}</p>
                <a href={link} className="card-button" target="_blank" rel="noopener noreferrer">
                    Visit Link
                </a>
            </div>
        </div>    
    )
}

export default Card
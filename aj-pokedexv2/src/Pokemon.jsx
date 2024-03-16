// Pokemon.jsx
import React from 'react';
import './Pokemon.css';

function Pokemon({ id, name, image, types, hp, attack }) {
    return (
        <div className="pokemon-card">
            <div className="pokemon-image-container">
                <img src={image} alt={name} className="pokemon-image" />
            </div>
            <div className="pokemon-info">
                <p>ID: {id}</p>
                <p>Name: {name}</p>
                {types && types.length > 0 && <p>Types: {types.join(', ')}</p>}
                <p>HP: {hp}</p>
                <p>Attack: {attack}</p>
                {/* Add more stats as needed */}
            </div>
        </div>
    );
}

export default Pokemon;

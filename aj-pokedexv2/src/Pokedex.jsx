// Pokedex.jsx
import React, { useState } from 'react';
import Pokemon from './Pokemon'; // Assuming Pokemon component is defined in Pokemon.jsx
import './Pokedex.css'; // Importing CSS file for styling

function Pokedex({ pokemonList }) {
    const [language, setLanguage] = useState('english');

    const handleLanguageChange = (selectedLanguage) => {
        setLanguage(selectedLanguage);
    };

    return (
        <div className="pokedex-container">
            <div className="language-buttons">
                <button onClick={() => handleLanguageChange('english')}>English</button>
                <button onClick={() => handleLanguageChange('japanese')}>Japanese</button>
                <button onClick={() => handleLanguageChange('chinese')}>Chinese</button>
                <button onClick={() => handleLanguageChange('french')}>French</button>
            </div>
            <div className="pokemon-list">
                {pokemonList.map((pokemon, index) => (
                    <Pokemon
                        key={index}
                        id={pokemon.id}
                        name={pokemon.name[language]}
                        image={pokemon.image}
                        types={pokemon.types}
                        hp={pokemon.hp}
                        attack={pokemon.attack}
                    />
                ))}
            </div>
        </div>
    );
}

export default Pokedex;

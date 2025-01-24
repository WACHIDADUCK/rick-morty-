import { Link } from "react-router-dom";  


export default function Characters({characters, setCharacters  }) {

    return (
        <div>
            <div className="container-characters">
                {characters.results.map((character, index) => (
                    <div className="character-container" key={index}>
                        <div>
                            <img src={character.image} alt={character.name} />
                        </div>
                        <div>
                            <h3>{character.name}</h3>
                            <h6> 
                                {character.status === 'Alive' ? (
                                    <span className="alive">Alive</span>
                                ) : (
                                    <span className="dead">Dead</span>
                                )}
                            </h6>
                            <p>
                                <span className="text-grey">Episodios:</span>
                                <span>{character.episode.length}</span>
                            </p>
                            <Link className="linkPersonaje" key={character.id} to={`/personaje/${character.id}`}>Ver Personaje</Link>
                        </div>                      
                    </div>
                ))}
            </div>
        </div>
    );
}
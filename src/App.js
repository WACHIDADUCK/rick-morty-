import './App.css';
import { use, useState, useEffect } from 'react';
import imagenRickMorty from './img/rick-morty.png';
import Characters from './components/Characters';
import { useFetch } from './hooks/useFetch';
function App() {

  const [characters, setCharacters] = useState(null);

  //hook personalizado usefetch useCallback
  // sustituir utilizando el hook

  const { data, loading, error } = useFetch('https://rickandmortyapi.com/api/character');

  const reqApi = async () => {
    setCharacters(data);
  };

  useEffect(() => {
    setCharacters(data);
  }, [data]);


  return (
    <div className="App">
      <header className="App-header">
        {loading &&
          <>
            <h1 className="App-title">Rick & Morty</h1>
            <img src={imagenRickMorty} className="App-logo" alt="logo" />
            <button onClick={reqApi} className="btn-search">Reload</button>
          </>}
        {characters && (
          <Characters characters={characters} setCharacters={setCharacters}></Characters>
        )}
        {error && <h1>{error}</h1>}

      </header>
    </div>
  );
}

export default App;

import { useEffect, useState } from 'react';
import './App.css';
import Main from './components/Main/Main';

const App: React.FC = () => {
  const [state, setState] = useState();

  useEffect(() => {

    let apiUrl = 'https://api.themoviedb.org/3/';
    let apiKey = '?api_key=f1eb0fddb91524fcb1e67860576e0d66&';

    const fetchUrl = `${apiUrl}discover/movie${apiKey}`;
    // details movie
    // https://api.themoviedb.org/3/movie/848278?api_key=f1eb0fddb91524fcb1e67860576e0d66&language=en-US

    const fetchMovies = async () => {
      try {
          const response = await fetch(fetchUrl);
          const json = await response.json();
          console.log(json.results[0].id);
          setState(json);
      } catch (error) {
          console.log("error", error);
      }
    }
    fetchMovies();
}, [])

  return (
    <Main info={state} />
  );
}

export default App;

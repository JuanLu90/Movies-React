import { useEffect, useState } from 'react';
import './App.css';
import Main from './components/Main/Main';

interface listObject {
  page: number,
  results: Array<{}>,
  total_pages: number,
  total_results: number
}

const App: React.FC = () => {
  let initialState = {
    page: 1,
    results: [],
    total_pages: 500,
    total_results: 10000
  }
  const [state, setState] = useState<listObject>(initialState);

  let apiUrl = 'https://api.themoviedb.org/3/';
  let apiKey = '?api_key=f1eb0fddb91524fcb1e67860576e0d66&';

  const fetchUrl = `${apiUrl}discover/movie${apiKey}&page=${state.page}`;
  // details movie
  // https://api.themoviedb.org/3/movie/848278?api_key=f1eb0fddb91524fcb1e67860576e0d66&language=en-US
  // another api request
  // https://api.themoviedb.org/3/discover/movie?api_key=f1eb0fddb91524fcb1e67860576e0d66&language=en-US&sort_by=popularity.asc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;
  const fetchMovies = async () => {
    try {
        const response = await fetch(fetchUrl);
        const json = await response.json();
        setState(json);
    } catch (error) {
        console.log("error", error);
    }
  };

useEffect(() => {
  fetchMovies();
}, [state.page]);

  return (
    <Main info={state} setInfo={setState} />
  );
}

export default App;

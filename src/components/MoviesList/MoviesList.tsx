import react from 'react';
import Card from '../Card/Card';
import './MoviesList.css';

interface Main {
    info?: {
        page: number,
        results: Array<{}>,
        total_pages: number,
        total_results: number
    };
};

const MoviesList: React.FC<Main> = ({info}) => {

  return (
    <div className="moviesList">
        <h1>List of movies</h1>
        <div className="moviesListCards">
            {info?.results?.map((x: any, i: number) => 
                <Card movie={x} key={i}/>
            )}
        </div>
    </div>
  );
}

export default MoviesList;
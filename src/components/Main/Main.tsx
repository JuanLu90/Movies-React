import react from 'react';
import MoviesList from '../MoviesList/MoviesList';

import './Main.css';

interface Main {
  info?: {
      page: number,
      results: Array<{}>,
      total_pages: number,
      total_results: number
  };
};

const Main: React.FC<Main> = ({info}) => {

  return (
    <div className="main">
      <MoviesList info={info} />
    </div>
  );
}

export default Main;
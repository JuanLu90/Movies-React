import MoviesList from '../MoviesList/MoviesList';

import './Main.css';

interface Main {
  info: {
      page: number,
      results: Array<{}>,
      total_pages: number,
      total_results: number
  };
  setInfo: any;
};

const Main: React.FC<Main> = ({info, setInfo}) => {

  return (
    <div className="main">
      <MoviesList info={info} setInfo={setInfo} />
    </div>
  );
}

export default Main;
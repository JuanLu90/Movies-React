import Card from '../Card/Card';
import Filters from '../Filters/Filters';
import './MoviesList.css';

interface Main {
    info: {
        page: number,
        results: Array<{}>,
        total_pages: number,
        total_results: number
    };
    setInfo: any
};

const MoviesList: React.FC<Main> = ({info, setInfo}) => {

const onChangePage = (value: number) => {
    setInfo((prevState: any) => ({...prevState, page: value}))
};

  return (
    <div className="moviesList">
        <h1>List of movies</h1>
        <Filters info={info} onChangePage={onChangePage} />
        <div className="moviesListCards">
            {info.results.map((x: any, i: number) => 
                <Card movie={x} key={i}/>
            )}
        </div>
        <Filters info={info} onChangePage={onChangePage} />
    </div>
  );
};

export default MoviesList;
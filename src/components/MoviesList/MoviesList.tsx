import { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Filters from '../Filters/Filters';
import MovieDetails from '../MovieDetails/MovieDetails';
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

interface movieDetails {
    isShow: boolean,
    movieId: number,
    movieSelected: any
}

const MoviesList: React.FC<Main> = ({info, setInfo}) => {
const initialMovieDetails = {
    isShow: false,
    movieId: 0,
    movieSelected: {}
}

const [showMovieDetails, setShowMovieDetails] = useState<movieDetails>(initialMovieDetails);

let apiUrl = `https://api.themoviedb.org/3/movie/${showMovieDetails.movieId}`;
    let apiKey = '?api_key=f1eb0fddb91524fcb1e67860576e0d66&';

    const fetchUrl = `${apiUrl}${apiKey}&language=en-US`;

    const fetchMovieDetails = async () => {
        try {
            const response = await fetch(fetchUrl);
            const json = await response.json();
            setShowMovieDetails(prevState => ({...prevState, isShow: true, movieSelected: json}));
        } catch (error) {
            console.log("error", error);
        }
    };

    const onChangePage = (value: number) => {
        setInfo((prevState: any) => ({...prevState, page: value}))
    };

    useEffect(() => {
        if(showMovieDetails.movieId !== 0) fetchMovieDetails();
    }, [showMovieDetails.movieId]);

    return (
        <div className="moviesList">
            <h1>List of movies</h1>
            <Filters info={info} onChangePage={onChangePage} />
            <div className={showMovieDetails.isShow ? 'movieListMovieSelected' : undefined}>
                <div className="moviesListCards">
                    {info.results.map((x: any, i: number) => 
                        <Card movie={x} key={i} setShowMovieDetails={setShowMovieDetails} />
                    )}
                </div>
                {showMovieDetails.isShow && <MovieDetails setShowMovieDetails={setShowMovieDetails} movieSelected={showMovieDetails.movieSelected} /> }
            </div>
            <Filters info={info} onChangePage={onChangePage} />
        </div>
  );
};

export default MoviesList;
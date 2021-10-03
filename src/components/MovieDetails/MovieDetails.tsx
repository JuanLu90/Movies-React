import './MovieDetails.css';

interface MovieDetails {
    setShowMovieDetails: any
    movieSelected: any
}

const Main: React.FC<MovieDetails> = ({setShowMovieDetails, movieSelected}) => {
    const yellowStarsArr = () => {
        let arr = [];

        for(let i = 0; i < Math.round(movieSelected.vote_average); i++) {
            arr.push(<span>&#11088;</span>)
        };
        return arr;
    };

    const offStarsArr = () => {
        let arr = [];

        for(let i = Math.round(movieSelected.vote_average); i < 10; i++) {
            arr.push(<span className="starOff">&#11088;</span>)
        };
        return arr;
    };

    const languagesArrFn = () => {
        let arr: any  = [];
        movieSelected.spoken_languages.map((x: any) => arr.push(x.english_name)); 

        return arr.join(', ');
    };

    const companiesArrFn = () => {
        let arr: any  = [];
        movieSelected.production_companies.map((x: any) => arr.push(x.name)); 

        return arr.join(', ');
    };

    return (
    <div className="movieDetails">
        <div className="imageInfo">
            <img src={`https://image.tmdb.org/t/p/w780/${movieSelected.backdrop_path}`} alt="" />
            <div>
                <span className="title">{movieSelected.title}</span>
                <span className="tagLine"> {movieSelected.tagline}</span>  
                <div className="rating">
                    <span> Rating: </span>
                    <div>
                        {yellowStarsArr()}
                        {offStarsArr()}
                        <div>
                            {movieSelected.vote_average} / 10 from {movieSelected.vote_count} users.
                        </div>
                    </div>
                </div>             
            </div>
        </div>
        <div className="movieInfo">
            <div className="leftInfo">
                <span>{movieSelected.runtime} minutes</span>
                <span>{movieSelected.release_date}</span>
                <div>
                    {movieSelected.genres.map((x: any) => {
                        return <span className="genres"> {x.name}</span>
                    })}
                </div>
            </div>
            <div className="rightInfo">
                <p>{movieSelected.overview}</p>
                <span>
                   <b>Languages:</b> &nbsp;
                    <span>{languagesArrFn()}</span>
                </span>
                <span>
                    <b> Companies: </b>&nbsp;
                    <span>{companiesArrFn()}</span>
                </span>               
            </div>
            <img src={`https://image.tmdb.org/t/p/w780/${movieSelected.poster_path}`} alt="" />
        </div>
        <span onClick={() => setShowMovieDetails((prevState: any) => ({...prevState, isShow: false, movieId: 0}))}>&#10006;</span>
    </div>
    );
}

export default Main;
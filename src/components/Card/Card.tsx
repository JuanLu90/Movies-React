import react from 'react';
import './Card.css';

interface Movie {
    movie: {
        original_language: string,
        title: string,
        vote_average: number,
        poster_path: string,
        backdrop_path: string,
        release_date: string
    },
    key: number
};

const Card: React.FC<Movie> = ({movie, key}) => {

  return (
    <div className="card" key={key}>
      <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} width="250px" height="375px" alt="" />
      <div className="cardInfo">
        <span className="cardTitle" title={movie.title}>{movie.title} </span>
        {/* <span className="cardVote">{movie.vote_average}</span> */}
        {/* <span className="cardLanguage">{movie.original_language}</span> */}
        <span className="cardDate">{movie.release_date}</span>
      </div>
    </div>
  );
}

export default Card;
import react from 'react';
import './Card.css';

interface Movie {
    movie: {
        original_language: string,
        title: string,
        vote_average: number
    },
    key: number
    
};

const Card: React.FC<Movie> = ({movie, key}) => {

  return (
    <div key={key}>
      {movie.title}
    </div>
  );
}

export default Card;
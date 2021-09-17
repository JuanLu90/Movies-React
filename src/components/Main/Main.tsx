import react from 'react';
import Card from '../Card/Card';
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
    <div>
      {info?.results?.map((x: any, i: number) => 
        <Card movie={x} key={i}/>
      )}
    </div>
  );
}

export default Main;
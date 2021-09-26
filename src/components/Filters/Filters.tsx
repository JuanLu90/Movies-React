import './Filters.css';

interface Filters {
  info: {
    page: number,
    results: Array<{}>,
    total_pages: number,
    total_results: number
  },
  onChangePage: any
};

const Filters: React.FC<Filters> = ({info, onChangePage}) => {

  return (
    <div className="filters">
      <div>
       <button onClick={() => onChangePage(info.page - 1)} disabled={info.page <= 1}> Prev </button>
       <span>{info?.page} of {info?.total_pages}</span>
       <button onClick={() => onChangePage(info.page + 1)} disabled={info.page >= info.total_pages}> Next </button>
      </div>  
      <span>Items: {20 * info.page} of {info.total_results}</span>    
    </div>
  );
};

export default Filters;
import "./Filters.css";
import { SetStateAction } from "react";

interface IFilters {
  info: {
    page: number;
    results: Array<{}>;
    total_pages: number;
    total_results: number;
  };
  showSearch?: boolean;
  setSearchMovie?: React.Dispatch<SetStateAction<string>>;
  searchMovie?: string;
  onChangePage: (page: number) => void;
  onChangeSearch?: any;
}

const Filters: React.FC<IFilters> = (props) => {
  const { info, onChangePage, onChangeSearch, showSearch } = props;
  return (
    <div className="filters">
      <div>
        <button
          onClick={() => onChangePage(info.page - 1)}
          disabled={info.page <= 1}
        >
          Prev
        </button>
        <span>
          {info?.page} of {info?.total_pages}
        </span>
        <button
          onClick={() => onChangePage(info.page + 1)}
          disabled={info.page >= info.total_pages}
        >
          Next
        </button>
      </div>
      {showSearch && (
        <input
          type="text"
          name=""
          id=""
          onChange={(e) => onChangeSearch(e)}
          placeholder="search"
        />
      )}
      <span>
        Items: {20 * info.page} of {info.total_results}
      </span>
    </div>
  );
};

export default Filters;

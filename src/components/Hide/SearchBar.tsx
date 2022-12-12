import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useInput} from "rooks";
import {useDebounce} from "rooks";

const SearchBar = () => {
  const navigate = useNavigate();
  const myInput = useInput("", {
    // validate: newValue => newValue.length > 0,
  });
  const [value, setValue] = useState("");
  const setSearchDebounced = useDebounce(setValue, 500);
  console.log(value);
  return (
    <>
      <div className="grid wide hide-on-mobile">
        <div className="row add-little-margin2">
          <div className="col p-12">
            <div
              style={{display: "flex"}}
              className="header-input-search bg_white boder-gray">
              <input
                onChange={e => setSearchDebounced(e.target.value)}
                type="text"
                placeholder="Search here!"
              />
              <button
                onClick={() => navigate("/search")}
                type="submit"
                className="header-input-search-btn align__item-center fz-1-6rem">
                Search
                <i className="fa-solid fa-magnifying-glass" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBar;

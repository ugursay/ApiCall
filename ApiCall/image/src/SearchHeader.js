import { useState } from "react";

function SearchHeader({ search }) {
  const [valueInput, setvalue] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    search(valueInput);
    debugger;
  };

  const handleChange = (event) => {
    setvalue(event.target.value);
  };

  return (
    <div className="searchDiv">
      <form onSubmit={handleFormSubmit}>
        <label className="headLabel">
          <span className="tag is-info is-large">Loking for what?</span>
        </label>
        <input
          className="input is-primary"
          value={valueInput}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default SearchHeader;

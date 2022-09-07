import { useState } from "react";
import { Link } from "react-router-dom";

const InputShortener = ({ setInputValue }) => {
  
  const [value, setValue] = useState("");

  const handleClick = () => {
    setInputValue(value);
    setValue("");
  };

  return (
    <div className="inputContainer">
      <h1>
        URL <span>Shortener</span>
      </h1>
      <div>
        <input
          type="text"
          placeholder="Paste a link to shorten it"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={handleClick}>shorten</button>
        <Link to="/table">
          <button>Stats</button>
        </Link>
      </div>
    </div>
  );
};

export default InputShortener;

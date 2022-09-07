import { useState } from "react";
import Logout from "../AuthPages/Logout";
import InputShortener from "./InputShortener";
import LinkResult from "./OutputShortener";
import "./ShortLinkMain.css";

function ShortLink() {

  const [inputValue, setInputValue] = useState("");
 
  return (
    <div className="container">
      <InputShortener setInputValue={setInputValue} />
      <LinkResult inputValue={inputValue} />
      <Logout />
    </div>
  );
}

export default ShortLink;

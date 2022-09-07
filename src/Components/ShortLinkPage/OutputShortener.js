import { useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import useAxiosPrivate from "../../Hooks/useAxiosPrivate";
import { SaveDataToLocalStorage } from "../../LocalStorage/localStorage";

const LinkResult = ({ inputValue }) => {

  const [short, setShort] = useState("");
  const [shortenLink, setShortenLink] = useState("");
  const [copied, setCopied] = useState(false);
  const axiosPrivate = useAxiosPrivate();

  const fetchData = async () => {
    try {

      const response = await axiosPrivate.post(`squeeze?link=${inputValue}`);
      
      setShort(response.data.short);
      setShortenLink(`http://79.143.31.216/s/${response.data.short}`);
      SaveDataToLocalStorage(response.data.short);
    } catch (err) {
      alert("Something went wrong");
    }
  };

  useEffect(() => {
    if (inputValue.length) {
      fetchData();
    }
  }, [inputValue]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [copied]);

  return (
    <>
      {short && (
        <div className="result">
          <p>
            <a href={shortenLink}>{shortenLink}</a>
          </p>
          <CopyToClipboard text={shortenLink} onCopy={() => setCopied(true)}>
            <button className={copied ? "copied" : ""}>
              Copy to Clipboard
            </button>
          </CopyToClipboard>
        </div>
      )}
    </>
  );
};

export default LinkResult;

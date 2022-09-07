import React, { useEffect, useState } from "react";
import useAxiosPrivate from "../../Hooks/useAxiosPrivate";
import { comparingShorts } from "../../Utils/comparingShorts";
import Table from "./Table";
import "./TableStatsMain.css";
import { Context } from "../../Context/Context";
import spinner from "../../Images/spinner.gif"

const TableStats = () => {

  const [orderGlobal, setOrderGlobal] = useState("");
  const [data, setData] = useState();
  const [filteredData, setFilteredData] = useState();
  const axiosPrivate = useAxiosPrivate();
  const [isLoading, setIsLoading] = useState(false);


  const fetchData = async (order = "desc", sortField = "short") => {

    try {
      const response = await axiosPrivate.get(
        `statistics?order=${order}_${sortField}&offset=1&limit=10000`
      );
      setData([...response.data]);
      setIsLoading(false);
    } 
    catch (err) {
      alert("Something went wrong");
    }
  };

  useEffect(() => {
    setIsLoading(true);
    fetchData();
  }, []);

  useEffect(() => {
    setIsLoading(true);

    let [order, sortField] = orderGlobal;

    if (order && sortField) {
      fetchData(order, sortField);
    }
  }, [orderGlobal]);

  useEffect(() => {}, [filteredData]);

  useEffect(() => {

    if (data) {
      let usedShortLinks = JSON.parse(localStorage.getItem("session")) || [];
      setFilteredData([...comparingShorts(usedShortLinks, data)]);
    }
  }, [data]);

  return (
    <>
          

      <Context.Provider value={setOrderGlobal}>
        {filteredData && (
          <div className="table_container">
            <h1>Statistics</h1>
            <Table data={filteredData} rowsPerPage={5} />
            <br />
            <br />
          </div>
        )}
      </Context.Provider>
      {isLoading && <div >
            <img src={spinner}  alt="spinner"   />

            </div>}
    </>
  );
};

export default TableStats;

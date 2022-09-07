import { useState } from "react";
import useTable from "../../Hooks/useTable";
import TableBody from "./TableBody";
import TableHead from "./TableHead";
import TableFooter from "./TableFooter";
import Logout from "../AuthPages/Logout";


const Table = ({  data, rowsPerPage }) => {

  const columns = [
    { label: "Id", accessor: "id", sortable: false },
    { label: "Short link", accessor: "short", sortable: true },
    { label: "Target link", accessor: "target", sortable: true },
    { label: "Counter", accessor: "counter", sortable: true, sortbyOrder: "desc" },
  ];

  const [page, setPage] = useState(1);
  const { slice, range } = useTable(data, page, rowsPerPage);

  return (
    <>
      <table className="table">
        <TableHead {...{ columns,rowsPerPage }} />
        <TableBody slice={slice} {...{ columns, rowsPerPage, data }} />
      </table>
      <TableFooter range={range} slice={slice} setPage={setPage} page={page}  />
      <Logout />

    </>
  );
};

export default Table;
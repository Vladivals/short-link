import "./App.css";
import Register from "./Components/AuthPages/Register";
import Login from "./Components/AuthPages/Login";
import { Navigate, Route, Routes } from "react-router-dom";
import Missing from "./Utils/Missing";
import Protected from "./Protected";
import ShortLink from "./Components/ShortLinkPage/ShortLinkMain";
import TableStats from "./Components/TablePage/TableStatsMain";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route
        path="/createShortLinkPage"
        element={
          <Protected>
            <ShortLink />
          </Protected>
        }
      />
      <Route
        path="/table"
        element={
          <Protected>
            <TableStats />
          </Protected>
        }
      />
      <Route path="*" element={<Missing />} />
    </Routes>
  );
}

export default App;

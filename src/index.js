import React from 'react';
import './index.css';
import App from './App';
import { AuthProvider } from './Context/AuthProvider';
import ReactDOM from 'react-dom/client';
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, HashRouter, Route, Router, Routes } from 'react-router-dom';



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
   <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
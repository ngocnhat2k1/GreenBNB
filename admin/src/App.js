import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import GlobalStyles from "./Components/GlobalStyles";
import './App.css';
import Vendor from "./pages/Vendor";
import Login from "./pages/Login";

function App() {
  return (
    <GlobalStyles>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Vendor />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </GlobalStyles>
  );
}

export default App;

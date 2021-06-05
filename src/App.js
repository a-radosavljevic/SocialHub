import React from 'react';
import NavBar from './components/navbar/navbar'
import Login from "./pages/login/login"
import { ToastContainer } from "react-toastify";

import './App.css';

function App() {
  return (
    <React.Fragment>
    <ToastContainer hideProgressBar newestOnTop></ToastContainer>
        {/* <NavBar username="Aleksandar96"></NavBar> */}
        <Login></Login>
      </React.Fragment>
  );
}

export default App;

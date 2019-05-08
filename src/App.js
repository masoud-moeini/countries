import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import Countries from "./components/countries";
import "react-toastify/dist/ReactToastify.css";
import "./App.scss";

class App extends Component {
  state = {};
  render() {
    return (
      <main className="container">
        <Countries />
        <ToastContainer />
      </main>
    );
  }
}

export default App;

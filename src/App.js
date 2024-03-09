import React, { useState, useRef, useCallback } from "react";
import useSearch from "./hooks/useSearch";
import { GlobalStyle } from "./components/globalStyles.style";
import { Loading } from "./components/Loading.style";
import { DownloadButton } from "./components/DownloadButton.style";
import { Form } from "./components/Form.style";
import { PinContainer } from "./components/PinContainer.style";
import { SearchBar } from "./components/SearchBar.style";

import logo from "./images/logo.png"
import loading from "./images/loading.svg"
import downloadIcon from "./images/download-icon.png"
import goIcon from "./images/top-right-arrow.png"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

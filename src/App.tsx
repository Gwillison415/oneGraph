import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { Query } from "react-apollo";
import NPMQueryContainer from "./components/Search";
type AppProps = { packageName: string}

function App() {
const [packageName, setPackageName] = useState('')
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
      <main>
        <NPMQueryContainer packageName={packageName}></NPMQueryContainer>
        </main>
    </div>
  );
}

export default App;

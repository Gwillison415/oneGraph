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
      </header>
      <main>
        <NPMQueryContainer packageName={packageName}></NPMQueryContainer>
        </main>
    </div>
  );
}

export default App;

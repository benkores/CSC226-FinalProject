import logo from './logo.svg';
import './App.css';
import MyComponent from "./components/MyComponent";
import {Autocomplete, Button, Checkbox, Slider, Stack, TextField} from "@mui/material";
import {VolumeDown, VolumeUp} from "@mui/icons-material";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <MyComponent></MyComponent>
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

import logo from './logo.svg';
import './App.css';
import MyComponent from "./components/MyComponent";
import {Autocomplete, Button, Checkbox, Slider, Stack, TextField} from "@mui/material";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={require('./imgs/news_icon.png')} className="App-logo" alt="logo" />
        <h2>Live News from 7,500 News Sources Worldwide!</h2>
      </header>
    </div>
  );
}
export default App;

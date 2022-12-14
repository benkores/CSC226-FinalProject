import logo from './logo.svg';
import './App.css';
import MyComponent from "./components/MyComponent.js";
import {Autocomplete, Button, Checkbox, Slider, Stack, TextField} from "@mui/material";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={require('./imgs/news_icon.png')} className="App-logo" alt="logo" />
        <h2>Live News from 7,500 News Sources Worldwide!</h2>
      </header>
        <h2>Enter a country, news source, and category to get started</h2>
    </div>
  );
}
export default App;

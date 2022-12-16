import React from "react";
import MyComponent from "./components/MyComponent.js";
import './App.css';
import TagInput from "./components/TagInput.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={require('./imgs/news_icon.png')} className="App-logo" alt="logo" />
        <h2>Live News from 7,500 News Sources Worldwide!</h2>
      </header>
      <h2>Enter a country, news source, and category below to get started</h2><br></br>
      <h2>Countries:</h2><TagInput/>
      <h2>News Sources:</h2><TagInput/>
    </div>
  );
}


export default App;

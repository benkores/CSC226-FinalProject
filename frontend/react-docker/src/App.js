import React from "react";
import MyComponent from "./components/MyComponent.js";
import './App.css';
import TagInput from "./components/TagInput.js";
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={require('./imgs/news_icon.png')} className="App-logo" alt="logo" />
        <h2>Live News from 7,500 News Sources Worldwide!</h2>
      </header>
      <h2 class="mb-5">Enter a country, news source, and category below to get started</h2><br></br>
      <h3>Countries:</h3><TagInput/>
      <h3>News Sources:</h3><TagInput/>
      <h3>Categories:</h3>
      <button type="button" class="btn btn-primary btn-lg btn-block w-75 mt-5 mb-5">Search</button>
    </div>
  );
}


export default App;

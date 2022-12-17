import React, { useState } from "react";
import MyComponent from "./components/MyComponent.js";
import "./App.css";
import TagInput from "./components/TagInput.js";
import "bootstrap/dist/css/bootstrap.css";
import NavigationBar from "./components/NavigationBar.js";

function App() {
  const [countries, setCountries] = useState([]);
  const [sources, setSources] = useState([]);
  const [categories, setCategories] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
      console.log(countries);
      console.log(sources);
      console.log(categories);
  }

  return (
    <div className="App">
      <header className="App-header">
        <NavigationBar />
        <img
          src={require("./imgs/news_icon.png")}
          className="App-logo"
          alt="logo"
        />
        <h2>Live News from 7,500 News Sources Worldwide!</h2>
      </header>
      <h2 className="mb-5 mt-5">
        Enter a country, news source, and/or category below to get started, or click Search to get all live news
      </h2>
      <br></br>
      <h3>Countries</h3>
      <a href="https://mediastack.com/sources" target="_blank">View supported countries</a>
      <TagInput tags={countries} setTags={setCountries} />
      <h3>News Sources</h3>
      <TagInput tags={sources} setTags={setSources} />
      <h3>Categories</h3>
      <p>Supported categories: general, business, entertainment, health, science, sports, technology</p>
      <TagInput tags={categories} setTags={setCategories} />
      <button
        type="submit"
        className="btn btn-primary btn-lg btn-block w-75 mt-5 mb-5"
        onClick={handleSubmit}
      >
        Search
      </button>
    </div>
  );
}

export default App;

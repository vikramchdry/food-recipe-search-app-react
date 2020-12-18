import './App.css';
import Header from './components/Header';
import Recipe from './components/Recipe';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from 'react';
import Axios from 'axios';


function App() {

  const onSearchClick = () => {
    getRecipes();
  };


  const [search, setSearch] = useState("chicken");
  const onInputChange = (e) => {
    setSearch(e.target.value);
  };


  const [recipes, setRecipes] = useState([]);
  const APP_ID = "cc3ec241";
  const APP_KEY = "aca29871deaaa54935961bd2a1933c4a	";

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const res = await Axios.get(
      `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    setRecipes(res.data.hits);
    console.log(res)
  };


  return (
    <div className="app">

      <Header search={search} onInputChange={onInputChange} onSearchClick={onSearchClick} />
      <div className="container">
        <Recipe recipes={recipes} />
      </div>
    </div>
  );
}

export default App;

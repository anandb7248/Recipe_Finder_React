import React, {useState, useEffect} from "react";
import Recipe from './Recipe.jsx';
import './App.css';

export default function App() {
    const APP_ID = '7e83b2ef';
    const APP_KEY = '3ef9700099d3e0c5970104d8c4420587';

    const [searchTerm, setSearchTerm] = useState("");
    const [recipes, setRecipes] = useState([]);
    // What is useEffect() ?
    // Gets called each time the UI renders
    // First Argument, is a anonymous function
    // Second Argument, if set to [], makes it so that the useEffect() gets called only once
                        // If you add a variable, e.g. [counter], then the useEffect will get called each time the variable is modified
    useEffect(() => {
        getRecipes();
    }, []);

    // async - 
    // await - should be attached to data that doesn't come instantly
    async function getRecipes(searchTerm){
        if (searchTerm !== null && searchTerm != "") {
            const response = await fetch(`https://api.edamam.com/search?q=${searchTerm}&app_id=${APP_ID}&app_key=${APP_KEY}`);
            const data = await response.json();
            console.log(data.hits);

            setRecipes(data.hits);
        }
    }

    const search = (e) => {
        e.preventDefault();
        getRecipes(searchTerm);
    }

    const updateSearch = e => {
        setSearchTerm(e.target.value);
    }

    return(
        <div className="App">
            <form className="search-form">
                <input
                    className="search-bar"
                    type="text"
                    value={searchTerm}
                    onChange = {updateSearch} />
                <button className="search-button" type="submit" onClick={search}>Submit</button>
            </form>
            <div className="Recipes" >
                {recipes.map(recipe => (
                    <Recipe key={recipe.recipe.uri} data={recipe}/>
                ))}
            </div>
        </div>
    );
}

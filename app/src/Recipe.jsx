import React from 'react'
import style from './recipe.module.css';

export default function Recipe(props){
    const name = props.data.recipe.label;
    const calories = props.data.recipe.calories;
    const imageURL = props.data.recipe.image;
    const ingredients = props.data.recipe.ingredients;

    return(<div className={style.recipe}>
        <h1>{name}</h1>
        <p>Calories: {calories}</p>
        <img src={imageURL} alt="" className={style.image}/>
        <ul>
            {ingredients.map(ingredient => {
                return <li>{ingredient.text}</li>
            })}
        </ul>
    </div>);
}
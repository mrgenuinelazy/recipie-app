import React from 'react';
import style from './recipe.module.css'

const Recipie = ({title, calories, image, ingredients}) => {
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <p>{calories}</p>
            <ul>
                {ingredients.map((text) =>(
                    <li>{text.text}</li>
                ))}
            </ul>
            <img src={image} className={style.image} alt=""/>
        </div>
    );
}

export default Recipie;

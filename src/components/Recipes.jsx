import React from 'react'
import { RecipeEntry } from './RecipeEntry'

export const Recipes = (props) => {
  return (
    <div>
      {props.recipes.map(recipe => (
        <RecipeEntry key={recipe.id} recipe={recipe} />
      ))}
    </div>
  )
}

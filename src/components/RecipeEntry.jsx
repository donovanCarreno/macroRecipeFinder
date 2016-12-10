import React from 'react'

export const RecipeEntry = (props) => {
  const { recipe } = props
  return (
    <div>
      <h3>{recipe.title}</h3>
      <img src={recipe.image} />
      <h5>Protein: {recipe.protein}</h5>
      <h5>Carbs: {recipe.carbs}</h5>
      <h5>Fat: {recipe.fat}</h5>
    </div>
  )
}

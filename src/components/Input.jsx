import React from 'react'

export const Input = (props) => {
  return (
    <span>
      {props.nutrient}:
      <input type="text" name={props.nutrient} onChange={props.getNutrientValue}/>
    </span>
  )
}

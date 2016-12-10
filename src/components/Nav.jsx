import React from 'react'
import { Input } from './Input'

export default class Nav extends React.Component {
  constructor() {
    super()
    this.getNutrientValue = this.getNutrientValue.bind(this)
    this.state = {
      Protein: 0,
      Carbs: 0,
      Fat: 0
    }
  }

  getNutrientValue(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div>
        <Input nutrient='Protein' getNutrientValue={this.getNutrientValue} />
        <Input nutrient='Carbs' getNutrientValue={this.getNutrientValue} />
        <Input nutrient='Fat' getNutrientValue={this.getNutrientValue} />
      </div>
    )
  }
}

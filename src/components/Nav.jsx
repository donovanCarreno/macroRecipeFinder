import React from 'react'
import { Input } from './Input'
import axios from 'axios'

export default class Nav extends React.Component {
  constructor() {
    super()
    this.getNutrientValue = this.getNutrientValue.bind(this)
    this.handleClick = this.handleClick.bind(this)
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

  handleClick(e) {
    e.preventDefault()
    const { Protein, Carbs, Fat } = this.state
    e.target.reset()
    // GET /shoes?order=desc&shoe[color]=blue&shoe[type]=converse
    axios.get(`/recipes?protein=${Protein}&carbs=${Carbs}&fat=${Fat}`)
      .then(res => console.log(res))
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleClick}>
          <Input nutrient='Protein' getNutrientValue={this.getNutrientValue} />
          <Input nutrient='Carbs' getNutrientValue={this.getNutrientValue} />
          <Input nutrient='Fat' getNutrientValue={this.getNutrientValue} />
          <button>Search</button>
        </form>
      </div>
    )
  }
}

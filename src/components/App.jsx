import React from 'react'
import ReactDOM from 'react-dom'
import Nav from './Nav'
import { Recipes } from './Recipes'

class App extends React.Component {
  constructor() {
    super()
    this.getRecipes = this.getRecipes.bind(this)
    this.state = {
      recipes: []
    }
  }

  getRecipes(recipes) {
    this.setState({ recipes })
  }

  render() {
    return (
      <div>
        <Nav getRecipes={this.getRecipes} />
        <Recipes recipes={this.state.recipes} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))

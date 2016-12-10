import React from 'react'
import ReactDOM from 'react-dom'
import Nav from './Nav'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Macro Recipe Finder!!!</h1>
        <Nav />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))

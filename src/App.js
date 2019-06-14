import React, {Component} from 'react'
import Stores from './components/Stores'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      view: 'stores'
    }
  }
  createStore = (store) => {
    console.log(store.store_number);
  }
  render() {
    return (
      <div className="container">
        <h1>MY BEAUTY ADVISORS</h1>
        <Stores
          createStore={this.createStore}
        />
      </div>
    )
  }
}

export default App;

import React, {Component} from 'react'
import Stores from './components/Stores'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      view: 'stores',
      stores: [],
      advisors: [],
      weeks: []
    }
  }
  createStore = (store) => {
    fetch('http://localhost:3000/stores', {
      body:JSON.stringify(store),
      method:'POST',
      headers:{
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    }).then(createdStore => createdStore.json())
    .then(jData => {
      this.setState({
        stores: [...this.state.stores, jData]
      })
    })
  }
  fetchStores = () => {
    fetch('http://localhost:3000/stores', {
      method: 'GET'
    }).then(data => data.json())
    .then(jData => {
      console.log(jData)
      this.setState({
        stores: jData
      })
    })
  }
  componentDidMount() {
    this.fetchStores()
  }
  render() {
    return (
      <div className="container">
        <h1>MY BEAUTY ADVISORS</h1>
        <Stores
          createStore={this.createStore}
          stores={this.state.stores}
        />
      </div>
    )
  }
}

export default App;

import React, {Component} from 'react'
import Stores from './components/Stores'
import Advisors from './components/Advisors'
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
  deleteStore = (id) => {
    fetch(`http://localhost:3000/stores/${id}`, {
      method: 'DELETE'
    }).then(data => {
      this.fetchStores()
    })
  }
  fetchAdvisors = (storeNum) => {
    fetch(`http://localhost:3000/advisors/${storeNum}`, {
      method: 'GET'
    }).then(data => data.json())
    .then(jData => {
      console.log(jData)
      this.setState({
        advisors: jData
      })
    })
    this.handleView('advisors')
  }
  handleView = (goToView) => {
    this.setState({
      view: goToView
    })
  }
  componentDidMount() {
    this.fetchStores()
  }
  render() {
    return (
      <div className="container">
        <h1>MY BEAUTY ADVISORS</h1>
        {(()=>{
          if(this.state.view === 'stores') {
            return (
              <Stores
                view={this.state.view}
                createStore={this.createStore}
                stores={this.state.stores}
                deleteStore={this.deleteStore}
                fetchAdvisors={this.fetchAdvisors}
              />
            )
          } else if (this.state.view === 'advisors') {
            return (
              <Advisors
                view={this.state.view}
                advisors={this.state.advisors}
              />
            )
          }
        })()}

      </div>
    )
  }
}

export default App;

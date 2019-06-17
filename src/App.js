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
      weeks: [],
      selectedStore: 0
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
      this.setState({
        view: 'stores'
      })
      this.fetchStores()
    }).catch(error => console.log(error))
  }
  createAdvisor = (advisor) => {
    fetch(`http://localhost:3000/advisors`, {
      body:JSON.stringify(advisor),
      method:'POST',
      headers:{
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    }).then(createdAdvisor => createdAdvisor.json())
    .then(jData => {
      this.setState({
        advisors: [...this.state.advisors, jData]
      })
    })
  }
  fetchAdvisors = (storeNum) => {
    fetch(`http://localhost:3000/advisors/${storeNum}`, {
      method: 'GET'
    }).then(data => data.json())
    .then(jData => {
      console.log(jData)
      this.setState({
        advisors: jData,
        selectedStore: storeNum
      })
    })
  }
  deleteAdvisor = (id) => {
    fetch(`http://localhost:3000/advisors/${id}`, {
      method: 'DELETE'
    }).then(data => {
      this.fetchAdvisors(this.state.selectedStore)
    }).catch(error => console.log(error))
  }
  handleView = (goToView, storeNum) => {
    this.setState({
      view: goToView,
      selectedStore: storeNum
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
                handleView={this.handleView}
              />
            )
          } else if (this.state.view === 'advisors') {
            return (
              <Advisors
                view={this.state.view}
                fetchAdvisors={this.fetchAdvisors}
                advisors={this.state.advisors}
                createAdvisor={this.createAdvisor}
                deleteAdvisor={this.deleteAdvisor}
                selectedStore={this.state.selectedStore}
              />
            )
          }
        })()}

      </div>
    )
  }
}

export default App;

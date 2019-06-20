import React, {Component} from 'react'
import Stores from './components/Stores'
import Advisors from './components/Advisors'
import Weeks from './components/Weeks'
import Week from './components/Week'
import './App.css'
const URL = 'https://mybeautyadvisors-rails.herokuapp.com'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      view: 'stores',
      stores: [],
      advisors: [],
      weeks: [],
      selectedStore: {},
      selectedAdvisor: {},
      selectedWeek: {}
    }
  }
  createStore = (store) => {
    fetch(`${URL}/stores`, {
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
    fetch(`${URL}/stores`, {
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
    fetch(`${URL}/stores/${id}`, {
      method: 'DELETE'
    }).then(data => {
      this.fetchStores()
    }).catch(error => console.log(error))
  }
  createAdvisor = (advisor) => {
    fetch(`${URL}/advisors`, {
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
  fetchAdvisors = (store) => {
    fetch(`${URL}/advisors/${store.store_number}`, {
      method: 'GET'
    }).then(data => data.json())
    .then(jData => {
      console.log(jData)
      this.setState({
        advisors: jData,
        selectedStore: store
      })
    })
  }
  deleteAdvisor = (id) => {
    fetch(`${URL}/advisors/${id}`, {
      method: 'DELETE'
    }).then(data => {
      this.fetchAdvisors(this.state.selectedStore)
    }).catch(error => console.log(error))
  }
  createWeek = (week) => {
    fetch(`${URL}/weeks`, {
      body:JSON.stringify(week),
      method:'POST',
      headers:{
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    }).then(createdWeek => createdWeek.json())
    .then(jData => {
      this.setState({
        weeks: [...this.state.weeks, jData]
      })
    })
  }
  fetchWeeks = (advisorId) => {
    fetch(`${URL}/weeks/${advisorId}`, {
      method: 'GET'
    }).then(data => data.json())
    .then(jData => {
      this.setState({
        weeks: jData
      })
    })
  }
  deleteWeek = (id) => {
    fetch(`${URL}/weeks/${id}`, {
      method: 'DELETE'
    }).then(data => {
      this.fetchWeeks(this.state.selectedAdvisor.id)
    }).catch(error => console.log(error))
  }
  handleStoreView = (goToView, store) => {
    this.setState({
      view: goToView,
      selectedStore: store
    })
  }
  handleAdvisorView = (goToView, advisor) => {
    this.setState({
      view: goToView,
      selectedAdvisor: advisor
    })
  }
  handleWeekView = (goToView, week) => {
    this.setState({
      view: goToView,
      selectedWeek: week
    })
    console.log(week)
  }
  setView = (goToView) => {
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
        <h1 onClick={()=>{this.setView('stores')}}><span className="red">MY</span> <span className="thin">BEAUTY ADVISORS</span></h1>
        {(()=>{
          if(this.state.view === 'stores') {
            return (
              <Stores
                view={this.state.view}
                createStore={this.createStore}
                stores={this.state.stores}
                deleteStore={this.deleteStore}
                handleStoreView={this.handleStoreView}
              />
            )
          } else if (this.state.view === 'advisors') {
            return (
              <Advisors
                view={this.state.view}
                setView={this.setView}
                fetchAdvisors={this.fetchAdvisors}
                advisors={this.state.advisors}
                createAdvisor={this.createAdvisor}
                deleteAdvisor={this.deleteAdvisor}
                selectedStore={this.state.selectedStore}
                handleAdvisorView={this.handleAdvisorView}
              />
            )
          } else if (this.state.view === 'weeks') {
            return (
              <Weeks
                view={this.state.view}
                setView={this.setView}
                selectedAdvisor={this.state.selectedAdvisor}
                weeks={this.state.weeks}
                createWeek={this.createWeek}
                fetchWeeks={this.fetchWeeks}
                deleteWeek={this.deleteWeek}
                handleWeekView={this.handleWeekView}
              />
            )
          } else if (this.state.view === 'week') {
            return (
              <Week
                setView={this.setView}
                selectedAdvisor={this.state.selectedAdvisor}
                selectedWeek={this.state.selectedWeek}
              />
            )
          }
        })()}

      </div>
    )
  }
}

export default App;

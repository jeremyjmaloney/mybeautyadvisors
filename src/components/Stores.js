import React, {Component} from 'react';

class Stores extends Component {
  constructor(props) {
    super(props)
    this.state = {
      store_number: '',
      store_name: '',
      manager_name: ''
    }
  }
  handleStoreNumber = (event) => {
    this.setState({
      store_number: event.target.value
    })
  }
  handleStoreName = (event) => {
    this.setState({
      store_name: event.target.value
    })
  }
  handleManagerName = (event) => {
    this.setState({
      manager_name: event.target.value
    })
  }
  handleSubmit = (event) => {
    event.preventDefault()
    this.props.createStore(this.state)
    this.clearForm()
  }
  clearForm = () => {
    this.setState({
      store_number: '',
      store_name: '',
      manager_name: ''
    })
  }
  render() {
    return (
      <div className="stores-container">
        <div className="stores-form">
          <h2>NEW STORE</h2>
          <form className="form" onSubmit={this.handleSubmit}>
            <input type="text" name="store_number" value={this.state.store_number} placeholder="STORE NUMBER" autoComplete="off" onChange={this.handleStoreNumber}/>

            <input type="text" name="store_name" value={this.state.store_name} placeholder="STORE LOCATION" autoComplete="off" onChange={this.handleStoreName}/>

            <input type="text" name="manager_name" value={this.state.manager_name} placeholder="MANAGER NAME" autoComplete="off" onChange={this.handleManagerName}/>

            <input type="submit" value="ADD"/>
          </form>
        </div>
        <div className="stores-list">
          <h2>ALL STORES</h2>
          {this.props.stores.map((store, index) => {
            return (
              <div className="store" key={index}>
                <button className="delete" onClick={()=>{this.props.deleteStore(store.id)}}>X</button>
                <h3><span className="red">STORE</span> | #{store.store_number}</h3>
                <h3><span className="red">LOCATION</span> | {store.store_name}</h3>
                <h3><span className="red">MANAGER</span> | {store.manager_name}</h3>
                <button onClick={()=>{this.props.handleStoreView('advisors', store)}}>VIEW STORE</button>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Stores;

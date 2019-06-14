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
          <h2>ADD A NEW STORE</h2>
          <form className="form" onSubmit={this.handleSubmit}>
            <input type="text" name="store_number" value={this.state.store_number} placeholder="STORE NUMBER" autoComplete="off" onChange={this.handleStoreNumber}/>

            <input type="text" name="store_name" value={this.state.store_name} placeholder="STORE NAME" autoComplete="off" onChange={this.handleStoreName}/>

            <input type="text" name="manager_name" value={this.state.store_manager_name} placeholder="MANAGER NAME" autoComplete="off" onChange={this.handleManagerName}/>

            <input type="submit" value="ADD"/>
          </form>
        </div>
        <div className="stores-list">
          <h2>ALL STORES</h2>
          {this.props.stores.map((store, index) => {
            return (
              <div className="store" key={index}>
                <h3>STORE #{store.store_number}</h3>
                <h4>{store.store_name}</h4>
                <h4>MANAGER: {store.manager_name}</h4>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Stores;

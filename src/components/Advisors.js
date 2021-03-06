import React, {Component} from 'react';

class Advisors extends Component {
  constructor(props) {
    super(props)
    this.state = {
      belongs_to_store: 0,
      name: ''
    }
  }
  handleName = (event) => {
    this.setState({
      name: event.target.value
    })
  }
  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.state.belongs_to_store);
    this.props.createAdvisor(this.state)
    this.clearForm()
  }
  clearForm = () => {
    this.setState({
      name: ''
    })
  }
  componentWillMount = () => {
    this.setState({
      belongs_to_store: this.props.selectedStore.store_number
    })
    this.props.fetchAdvisors(this.props.selectedStore)
  }
  render() {
    return (
      <div className="advisors-container">
        <button className="backbtn" onClick={()=>{this.props.setView('stores')}}>BACK</button>
        <h2 className="center"><span className="red">STORE</span> | #{this.props.selectedStore.store_number}</h2>
        <div className="advisors-form">
          <h2>NEW BEAUTY ADVISOR</h2>
          <form className="form" onSubmit={this.handleSubmit}>
            <input type="text" name="name" value={this.state.name} placeholder="ADVISOR NAME" autoComplete="off" onChange={this.handleName}/>

            <input type="submit" value="ADD"/>
          </form>
        </div>
        <div className="advisors-list">
          <h2>ALL BEAUTY ADVISORS</h2>
          {this.props.advisors.map((advisor, index) => {
            return (
              <div className="advisor" key={index}>
                <button onClick={()=>{this.props.deleteAdvisor(advisor.id)}} className="delete">X</button>
                <h3 className="name">{advisor.name}</h3>
                <button onClick={()=>{this.props.handleAdvisorView('weeks', advisor)}}>VIEW ADVISOR</button>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Advisors;

import React, {Component} from 'react';

class Advisors extends Component {
  constructor(props) {
    super(props)
    this.state = {
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
    this.props.createAdvisor(this.state)
    this.clearForm()
  }
  render() {
    return (
      <div className="advisors-container">
        <div className="advisors-form">
          <h2>ADD A NEW BEAUTY ADVISOR</h2>
          <form className="form" onSubmit={this.handleSubmit}>
            <input type="text" name="name" value={this.state.name} placeholder="ADVISOR NAME" autoComplete="off" onChange={this.handleName}/>

            <input type="submit" value="ADD"/>
          </form>
        </div>
        <div className="advisors-list">
          <h2>ALL ADVISORS</h2>
          {this.props.advisors.map((advisor, index) => {
            return (
              <div className="advisor" key={index}>
                <button className="delete">X</button>
                <h3>{advisor.name}</h3>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Advisors;

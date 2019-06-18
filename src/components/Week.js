import React, {Component} from 'react'

class Week extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <div className="week-container">
        <h1>{this.props.selectedAdvisor.name} ... {this.props.selectedWeek.date}</h1>
      </div>
    )
  }
}

export default Week;

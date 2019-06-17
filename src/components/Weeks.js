import React, {Component} from 'react';

class Weeks extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <h2>{this.props.selectedAdvisor.name}</h2>
    )
  }
}

export default Weeks;

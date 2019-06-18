import React, {Component} from 'react';

class Weeks extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      date: '',
      act_upt: '',
      goal_upt: '',
      act_atv: '',
      goal_atv: '',
      act_sbr: '',
      goal_sbr: '',
      act_total: '',
      goal_total: ''

    }
  }
  handleDate = (event) => {
    this.setState({
      date: event.target.value
    })
  }
  handleActUpt = (event) => {
    this.setState({
      act_upt: event.target.value
    })
  }
  handleGoalUpt = (event) => {
    this.setState({
      goal_upt: event.target.value
    })
  }
  handleActAtv = (event) => {
    this.setState({
      act_atv: event.target.value
    })
  }
  handleGoalAtv = (event) => {
    this.setState({
      goal_atv: event.target.value
    })
  }
  handleActSbr = (event) => {
    this.setState({
      act_sbr: event.target.value
    })
  }
  handleGoalSbr = (event) => {
    this.setState({
      goal_sbr: event.target.value
    })
  }
  handleActTotal = (event) => {
    this.setState({
      act_total: event.target.value
    })
  }
  handleGoalTotal = (event) => {
    this.setState({
      goal_total: event.target.value
    })
  }
  handleSubmit = (event) => {
    event.preventDefault()
  }
  componentWillMount = () => {
    this.setState({
      name: this.props.selectedAdvisor.name
    })
  }
  render() {
    return (
      <div className="weeks-container">
        <h1>{this.props.selectedAdvisor.name}</h1>
        <div className="weeks-form">
          <h2>ADD A NEW WEEK / MONTH</h2>
          <form className="form" onSubmit={this.handleSubmit}>
            <input type="text" name="date" value={this.state.date} placeholder="DATES / MONTH" autoComplete="off" onChange={this.handleDate}/><br />

            <input type="text" name="act_upt" value={this.state.act_upt} placeholder="ACTUAL UPT" autoComplete="off" onChange={this.handleActUpt}/>

            <input type="text" name="goal_upt" value={this.state.goal_upt} placeholder="GOAL UPT" autoComplete="off" onChange={this.handleGoalUpt}/><br/>

            <input type="text" name="act_atv" value={this.state.act_atv} placeholder="ACTUAL ATV" autoComplete="off" onChange={this.handleActAtv}/>

            <input type="text" name="goal_atv" value={this.state.goal_atv} placeholder="GOAL ATV" autoComplete="off" onChange={this.handleGoalAtv}/><br/>

            <input type="text" name="act_sbr" value={this.state.act_sbr} placeholder="ACTUAL SBR" autoComplete="off" onChange={this.handleActSbr}/>

            <input type="text" name="goal_sbr" value={this.state.goal_sbr} placeholder="GOAL SBR" autoComplete="off" onChange={this.handleGoalSbr}/><br/>

            <input type="text" name="act_total" value={this.state.act_total} placeholder="ACTUAL TOTAL" autoComplete="off" onChange={this.handleActTotal}/>

            <input type="text" name="goal_total" value={this.state.goal_total} placeholder="GOAL TOTAL" autoComplete="off" onChange={this.handleGoalTotal}/><br/>

            <input type="submit" value="ADD"/>
          </form>
        </div>
      </div>
    )
  }
}

export default Weeks;

import React, {Component} from 'react'
import {VictoryPie} from 'victory'

class Week extends Component {
  constructor(props) {
    super(props)
    this.state = {
      upt_data: 0,
      upt_color: '',
      upt_perc: 0,
      upt_var: 0,
      atv_data: 0,
      atv_color: '',
      atv_perc: '',
      atv_var: 0,
      sbr_data: 0,
      sbr_color: '',
      sbr_perc: 0,
      sbr_var: 0,
      total_data: 0,
      total_color: '',
      total_perc: 0,
      total_var: 0
    }
  }
  checkData = (data) => {
    if(data < 50) {
      return("#ff0000")
    } else if (data >= 50 && data < 75) {
      return("#ffff00")
    } else if (data >= 75) {
      return("#00ff00")
    }
  }
  checkSbrData = (data) => {
    if(data < 60) {
      return("#ff0000")
    } else if (data >= 60 && data < 65) {
      return("#ffff00")
    } else if (data >= 65) {
      return("#00ff00")
    }
  }
  checkTotalData = (data) => {
    if(data < 75) {
      return("#ff0000")
    } else if (data >= 75 && data < 100) {
      return("#ffff00")
    } else if (data >= 100) {
      return("#00ff00")
    }
  }
  componentWillMount = () => {
    this.setState({
      upt_data: ((this.props.selectedWeek.act_upt / this.props.selectedWeek.goal_upt) * 100),
      upt_var: (this.props.selectedWeek.act_upt - this.props.selectedWeek.goal_upt).toFixed(2),
      atv_data: ((this.props.selectedWeek.act_atv / this.props.selectedWeek.goal_atv) * 100),
      atv_var: (this.props.selectedWeek.act_atv - this.props.selectedWeek.goal_atv).toFixed(2),
      sbr_data: this.props.selectedWeek.act_sbr,
      sbr_var: (this.props.selectedWeek.act_sbr - this.props.selectedWeek.goal_sbr).toFixed(2),
      total_data: ((this.props.selectedWeek.act_total / this.props.selectedWeek.goal_total) * 100),
      total_var: (this.props.selectedWeek.act_total - this.props.selectedWeek.goal_total).toFixed(2)
    })
  }
  componentDidMount = () => {
    this.setState({
      upt_color: this.checkData(this.state.upt_data),
      upt_perc: this.state.upt_data.toFixed(2),
      atv_color: this.checkData(this.state.atv_data),
      atv_perc: this.state.atv_data.toFixed(2),
      sbr_color: this.checkSbrData(this.state.sbr_data),
      sbr_perc: this.state.sbr_data.toFixed(2),
      total_color: this.checkTotalData(this.state.total_data),
      total_perc: this.state.total_data.toFixed(2)
    })
  }
  render() {
    return (
      <div className="week-container">
        <h1>{this.props.selectedAdvisor.name} - {this.props.selectedWeek.date}</h1>
        <div className="graph">
          <h2 className="graphtitle">UNITS PER TRANSACTION</h2>
          <svg width={300} height={300}>
            <text x={150} y={165} textAnchor="middle" >
              {this.state.upt_perc}%
            </text>
            <VictoryPie
              standalone={false}
              padAngle={0}
              labels={()=>null}
              innerRadius={80}
              width={300} height={300}
              data={[{'key': "actual", 'y': this.state.upt_data}, {'key': "goal", 'y': (100-this.state.upt_data)}]}
              colorScale={[this.state.upt_color, "#dddddd"]}
            />
          </svg>
          <h4>UPT: {this.props.selectedWeek.act_upt} | GOAL: {this.props.selectedWeek.goal_upt} | VARIANCE: {this.state.upt_var} units</h4>
        </div>
        <div className="graph">
          <h2 className="graphtitle">AVERAGE TRANSACTION VALUE</h2>
          <svg width={300} height={300}>
            <text x={150} y={160} textAnchor="middle" >
              {this.state.atv_perc}%
            </text>
            <VictoryPie
              standalone={false}
              padAngle={0}
              labels={()=>null}
              innerRadius={80}
              width={300} height={300}
              data={[{'key': "actual", 'y': this.state.atv_data}, {'key': "goal", 'y': (100-this.state.atv_data)}]}
              colorScale={[this.state.atv_color, "#dddddd"]}
            />
          </svg>
          <h4>ATV: ${this.props.selectedWeek.act_atv} | GOAL: ${this.props.selectedWeek.goal_atv} | VARIANCE: ${this.state.atv_var}</h4>
        </div>
        <div className="graph">
          <h2 className="graphtitle">SALLY BEAUTY REWARDS</h2>
          <svg width={300} height={300}>
            <text x={150} y={160} textAnchor="middle" >
              {this.state.sbr_perc}%
            </text>
            <VictoryPie
              standalone={false}
              padAngle={0}
              labels={()=>null}
              innerRadius={80}
              width={300} height={300}
              data={[{'key': "actual", 'y': this.state.sbr_data}, {'key': "goal", 'y': (100-this.state.sbr_data)}]}
              colorScale={[this.state.sbr_color, "#dddddd"]}
            />
          </svg>
          <h4>SBR: {this.props.selectedWeek.act_sbr}% | GOAL: {this.props.selectedWeek.goal_sbr}% | VARIANCE: {this.state.sbr_var}%</h4>
        </div>
        <div className="graph">
          <h2 className="graphtitle">TOTAL SALES</h2>
          <svg width={300} height={300}>
            <text x={150} y={160} textAnchor="middle" >
              {this.state.total_perc}%
            </text>
            <VictoryPie
              standalone={false}
              padAngle={0}
              labels={()=>null}
              innerRadius={80}
              width={300} height={300}
              data={[{'key': "actual", 'y': this.state.total_data}, {'key': "goal", 'y': (100-this.state.total_data)}]}
              colorScale={[this.state.total_color, "#dddddd"]}
            />
          </svg>
          <h4>SALES: ${this.props.selectedWeek.act_total} | GOAL: ${this.props.selectedWeek.goal_total} | VARIANCE: ${this.state.total_var}</h4>
        </div>
      </div>
    )
  }
}

export default Week;

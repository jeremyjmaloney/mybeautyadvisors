import React, {Component} from 'react'
import {VictoryPie} from 'victory'

class Week extends Component {
  constructor(props) {
    super(props)
    this.state = {
      upt_data: 0,
      upt_color: '',
      upt_perc: 0,
      atv_data: 0,
      atv_color: '',
      atv_perc: '',
      sbr_data: 0,
      sbr_color: '',
      total_data: 0,
      total_color: ''
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
  componentWillMount = () => {
    this.setState({
      upt_data: ((this.props.selectedWeek.act_upt / this.props.selectedWeek.goal_upt) * 100),
      atv_data: ((this.props.selectedWeek.act_atv / this.props.selectedWeek.goal_atv) * 100)
    })
  }
  componentDidMount = () => {
    this.setState({
      upt_color: this.checkData(this.state.upt_data),
      upt_perc: this.state.upt_data.toFixed(2),
      atv_color: this.checkData(this.state.atv_data),
      atv_perc: this.state.atv_data.toFixed(2)
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
          <h4>UPT: {this.props.selectedWeek.act_upt} | GOAL: {this.props.selectedWeek.goal_upt} | VARIANCE: {this.props.selectedWeek.act_upt - this.props.selectedWeek.goal_upt} units</h4>
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
          <h4>ATV: ${this.props.selectedWeek.act_atv} | GOAL: ${this.props.selectedWeek.goal_atv} | VARIANCE: ${this.props.selectedWeek.act_atv - this.props.selectedWeek.goal_atv}</h4>
        </div>
      </div>
    )
  }
}

export default Week;

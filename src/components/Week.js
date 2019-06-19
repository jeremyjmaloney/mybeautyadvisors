import React, {Component} from 'react'
import {VictoryPie} from 'victory'

class Week extends Component {
  constructor(props) {
    super(props)
    this.state = {
      upt_data: 0,
      upt_color: '',
      atv_data: 0,
      sbr_data: 0,
      total_data: 0
    }
  }
  checkData = (data) => {
    if(data < 33) {
      return("red")
    } else if (data > 33 && data < 66) {
      return("yellow")
    } else if (data > 66) {
      return("green")
    }
  }
  componentDidMount = () => {
    this.setState({
      upt_data: ((this.props.selectedWeek.act_upt / this.props.selectedWeek.goal_upt) * 100),
      upt_color: this.checkData(this.state.upt_data)
    })
    console.log(this.state.upt_data);
  }
  render() {
    return (
      <div className="week-container">
        <h1>{this.props.selectedAdvisor.name} - {this.props.selectedWeek.date}</h1>
        <div className="graph">
          <VictoryPie
            padAngle={0}
            labels={()=>null}
            innerRadius={70}
            width={200} height={200}
            data={[{'key': "actual", 'y': this.state.upt_data}, {'key': "goal", 'y': (100-this.state.upt_data)}]}
            colorScale={[this.state.upt_color, "#808080"]}
          />
          <h3>{this.state.upt_data}%</h3>
        </div>
      </div>
    )
  }
}

export default Week;

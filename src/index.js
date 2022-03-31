import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class Timer extends Component {
  state = {
    hour: 0,
    minute: 0,
    second: 0,
    startDisable: false,
    stopTimerVal: "",
  }

  hourAdd = () => {
    const { hour } = this.state

    this.setState({
      hour: hour + 1
    })
  }

  hourRemove = () => {
    const { hour } = this.state
    if (hour === 0) {
      this.setState({
        hour: 0,
      })
    } else {
      this.setState({
        hour: hour - 1,
      })
    }
  }

  minuteAdd = () => {
    const { minute } = this.state

    if (minute === 59) {
      this.setState({
        minute: 0,
      })
    } else {
      this.setState({
        minute: minute + 1,
      })
    }

  }
  minuteRemove = () => {
    const { minute } = this.state;

    if (minute === 0) {
      this.setState({
        minute: 59,
      })
    } else {
      this.setState({
        minute: minute - 1,
      })
    }
  }
  secondAdd = () => {
    const { second } = this.state;

    if (second === 59) {
      this.setState({
        second: 0,
      })
    } else {
      this.setState({
        second: second + 1,
      })
    }
  }
  secondRemove = () => {
    const { second } = this.state;

    if (second === 0) {
      this.setState({
        second: 59,
      })
    } else {
      this.setState({
        second: second - 1,
      })
    }
  }
  startTimer = () => {
    let a = setInterval(() => {
      const { second, minute, hour, startDisable, stopTimerVal } = this.state;
      if (second === 0 && minute === 0 && hour === 0) {
        this.setState({
          startDisable: true,
        })

        clearInterval(this.state.stopTimerVal)
      }
      else if (second === 0) {
        if (minute === 0) {
          this.setState({
            hour: hour - 1,
            minute: 59,
            second: 59,
          })
        }
        else {
          this.setState({
            minute: minute - 1,
            second: 59,
          })
        }
      }
      else {
        this.setState({
          second: second - 1,
        })
      }
    }, 1);


    this.setState({
      stopTimerVal: a
    })
    
  }

  stopTimer = () => {
    clearInterval(this.state.stopTimerVal)
  }

  resetTimer= () => {
    const {second, hour, minute} = this.state;

    this.setState ({
      second: 0,
      minute: 0,
      hour: 0
    })
  }







  render() {

    const { hour, minute, second, startDisable } = this.state;

    return (
      <div className="container">
        <div className="timer-container">
          <div className="timer-title">Timer</div>
          <div className="timer">
            <div className="timer-numbers">
              <div className="add" id='hour-add' onClick={this.hourAdd}></div>
              <div className="number">{hour}</div>
              <div className="remove" id='hour-remove' onClick={this.hourRemove}></div>
            </div>
            <div className="timer-numbers">
              <div className="add" id='minute-add' onClick={this.minuteAdd}></div>
              <div className="number">{minute}</div>
              <div className="remove" id='minute-remove' onClick={this.minuteRemove}></div>
            </div>
            <div className="timer-numbers">
              <div className="add" id='second-add' onClick={this.secondAdd}></div>
              <div className="number">{second}</div>
              <div className="remove" id='second-remove' onClick={this.secondRemove}></div>
            </div>
          </div>
          <div className="timer-btns">
            <input className="start" type="button" disabled={startDisable} onClick={this.startTimer} value={"Start"} />
            <input className='stop' type="button" onClick={this.stopTimer} value={"Stop"} />
            <input className='reset' type="button" onClick={this.resetTimer} value={"Reset"} />
          </div>
        </div>
      </div>
    );
  }
}

export default Timer;


ReactDOM.render(
  <Timer />
  ,
  document.getElementById('root')
);


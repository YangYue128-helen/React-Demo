import React, {Component} from "react";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import './style/style.css'

class Clock extends Component {
    constructor(props) {
      super(props);
      this.state = {
        date: new Date(),
        show: true,
        list: []
      };
      this.handleClockToggle = this.handleClockToggle.bind(this);
      this.handleAddItem = this.handleAddItem.bind(this);
    }
  
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    tick() {
      this.setState({
        date: new Date()
      });
    }
  
    render() {
      return (
        <div>
          <CSSTransition
            in={this.state.show}
            timeout={1000} //动画执行多久
            classNames="fade"
            unmountOnExit
            onEntered={(el) => {el.style.color = 'blue'}}
            appear = {true}
          >
            <h3 >It is {this.state.date.toLocaleTimeString()}.</h3>
          </CSSTransition>
          <button onClick={this.handleClockToggle}>clock toggle</button>
          <TransitionGroup> 
            {
              this.state.list.map((item, index) => {
                return (
                  <CSSTransition
                    key={index}
                    timeout={1000} //动画执行多久
                    classNames="fade"
                    unmountOnExit
                    onEntered={(el) => {el.style.color = 'blue'}}
                    appear = {true}
                  >
                    <div key={index}>{item}</div>
                  </CSSTransition>
                )
                
              })
            }
          </TransitionGroup>
          <button onClick={this.handleAddItem}>Add item</button>
        </div>
      );
    }

    handleAddItem() {
      this.setState((prevState) => {
        return {
          list: [...prevState.list, 'item']
        }
      })
    }

    handleClockToggle() {
      this.setState( {
        show: this.state.show ? false : true
      })
    }
}

export default Clock;

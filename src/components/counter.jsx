import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };

  //   constructor() {
  //     //when an object counter is created
  //     super(); //if super is not used 'this' is going to be undefined and error appear
  //     this.handleIncrement = this.handleIncrement.bind(this); //set the value of this, will return a new instance of the handledincrement and is going to referencve the counter
  //   }

  handleIncrement = product => {
    console.log(product);
    this.setState({ count: this.state.count + 1 }); //simple add to the state count (stateChanges)
  };

  doHandleIncrement = () => {
    this.handleIncrement({ id: 1 });
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement({ id: 1 })}
          className="btn btn-secondary btn-nm"
        >
          Increment
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;

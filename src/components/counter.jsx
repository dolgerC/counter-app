import React, { Component } from "react";

class Counter extends Component {
  // state = {
  //   value: this.props.counter.value
  // };

  //   constructor() {
  //     //when an object counter is created
  //     super(); //if super is not used 'this' is going to be undefined and error appear
  //     this.handleIncrement = this.handleIncrement.bind(this); //set the value of this, will return a new instance of the handledincrement and is going to referencve the counter
  //   }

  // handleIncrement = () => {
  //   //console.log("EventHandler Called", product);
  //   this.setState({ value: this.state.value + 1 }); //simple add to the state count (stateChanges)
  // };

  //deleted the state and the handle increment so we can use the props from the counters array and not the state local in counter
  //this is done for reseting the values if not the page just simply stay as it is

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)} //{this.handleIncrement} removed since local we need to make it as the ondelete
          className="btn btn-secondary btn-nm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)} //delete button
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter; // we removed the local state and rely on the props
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;

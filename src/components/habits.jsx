import React, { Component } from "react";
import Habit from "./habit";
import HabitAddForm from "./habitAddForm";

class Habits extends Component {
  reset = React.createRef();

  handleAdd = (name) => {
    this.props.onAdd(name);
  };

  render() {
    console.log("habit");
    return (
      <>
        <HabitAddForm onAdd={this.handleAdd} />
        <ul>
          {this.props.habits.map((habit) => (
            <Habit
              key={habit.id}
              habit={habit}
              onIncrement={this.props.onIncrement}
              onDecrement={this.props.onDecrement}
              onDelete={this.props.onDelete}
            />
          ))}
        </ul>
        <button
          ref={this.reset}
          className="resetBtn"
          onClick={this.props.onReset}
        >
          Reset All
        </button>
      </>
    );
  }
}

export default Habits;

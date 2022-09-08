import React, { Component } from 'react';
import Overview from './components/Overview';

class App extends Component {
  constructor() {
    super();

    this.state = {
      task: {text: ''},
      taskArray: []
    };
  }

  handleChange = (event) => {
    this.setState({
      task: {
        text: event.target.value
      }
    });
  };

  onSubmitTask = (event) => {
    event.preventDefault();
    this.setState({
      taskArray: [...this.state.taskArray, this.state.task],
      task: {
        text: ''
      }
    });
  };

  render() {
    const { task, taskArray } = this.state;

    return (
      <div>
        <form onSubmit={this.onSubmitTask}>
          <label htmlFor='taskInput'>Enter Task:</label>
          <input type='text' id='taskInput' value={task.text} onChange={this.handleChange} />
          <button type='submit'>Add Task</button>
        </form>
      </div>
    );
  }
}

export default App;
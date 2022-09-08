import React, { Component } from 'react';
import uniqid from 'uniqid';
import Overview from './components/Overview';

class App extends Component {
  constructor() {
    super();

    this.state = {
      task: {
        text: '',
        id: uniqid()
      },
      taskArray: []
    };
  }

  handleChange = (event) => {
    this.setState({
      task: {
        text: event.target.value,
        id: this.state.task.id
      }
    });
  };

  onSubmitTask = (event) => {
    event.preventDefault();
    this.setState({
      taskArray: [...this.state.taskArray, this.state.task],
      task: {
        text: '',
        id: uniqid()
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
        <Overview tasks={taskArray} />
      </div>
    );
  }
}

export default App;
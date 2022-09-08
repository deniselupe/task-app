import React, { Component } from 'react';
import Overview from './components/Overview';

class App extends Component {
    constructor() {
        super();

        this.state = {
            task: '',
            taskArray: []
        };
    }

    render() {
        const { task, taskArray } = this.state;

        return (
          <div>
            <form>
              <label htmlFor='taskInput'>Enter Task:</label>
              <input type='text' id='taskInput' />
              <button>Add Task</button>
            </form>
          </div>
        );
    }
}

export default App;
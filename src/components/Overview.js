import React, { Component } from 'react';

class Overview extends Component {
    constructor() {
        super();

        this.state = {
            task: '',
            taskArray: []
        };
    }

    handleTask = (event) => {
        this.setState({task: event.target.value});
    };

    render() {
        return (
            <div>
                <input value={this.state.task} onChange={this.handleTask} />
            </div>
        );
    }
}

export default Overview;
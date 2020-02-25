import React from "react";

import { observer, inject } from "mobx-react";

@inject("store")
@observer
class AddTask extends React.Component {
  state = {
    content: ""
  };

  handleChange = e => {
    const { value } = e.target;
    this.setState({
      content: value
    });
  };

  addTask = e => {
    e.preventDefault();
    const { content } = this.state;
    const {
      TaskStore: { addTask }
    } = this.props.store;

    addTask(content);

    this.setState({
      content: ""
    });
  };

  render() {
    return (
      <>
        <form className="addTaskForm" onSubmit={this.addTask}>
          <input
            className="taskFormInput"
            type="text"
            value={this.state.content}
            onChange={this.handleChange}
            placeholder="Enter you task"
            required
          />
          <button className="taskFormButton" type="submit">
            <i className="material-icons">add_circle_outline</i>
          </button>
        </form>
      </>
    );
  }
}

export default AddTask;

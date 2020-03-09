import React from "react";

import ChangeInputHoc from "../HocComponents/ChangeInputHoc";

class AddTask extends React.Component {
  render() {
    const { addTask, content, handleChange } = this.props;

    return (
      <>
        <form className="addTaskForm" onSubmit={addTask}>
          <input
            className="taskFormInput"
            type="text"
            value={content}
            onChange={handleChange}
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

export default ChangeInputHoc(AddTask);

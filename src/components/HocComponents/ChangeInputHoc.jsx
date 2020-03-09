import React from "react";

import { observer, inject } from "mobx-react";

var uniqid = require("uniqid");

const ChangeInputHoc = Wrapped => {
  @inject("store")
  @observer
  class Protected extends React.Component {
    state = {
      text: ""
    };

    handleChange = event => {
      this.setState({
        text: event.target.value
      });
    };

    addColumn = (e, id) => {
      e.preventDefault();

      const { text } = this.state;
      let idColumn = uniqid();
      const {
        ColumnsStore: { addColumn },
        TaskStore: { createTaskList }
      } = this.props.store;

      addColumn(text, idColumn);
      createTaskList(idColumn);

      this.setState({
        text: ""
      });
    };

    addTask = e => {
      e.preventDefault();
      const { text } = this.state;
      const {
        TaskStore: { addTask }
      } = this.props.store;

      addTask(text);

      this.setState({
        text: ""
      });
    };
    render() {
      return (
        <Wrapped
          handleChange={this.handleChange}
          addTask={this.addTask}
          content={this.state.text}
          title={this.state.text}
          addColumn={this.addColumn}
          {...this.props}
        />
      );
    }
  }
  return Protected;
};
export default ChangeInputHoc;

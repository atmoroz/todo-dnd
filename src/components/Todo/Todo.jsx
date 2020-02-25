import React from "react";
import { observer, inject } from "mobx-react";
import Column from "../Column/Column";

@inject("store")
@observer
class Todo extends React.Component {
  cleareAllTask = () => {
    const {
      ColumnsStore: { cleareAllColumn },
      TaskStore: { cleareAllTask }
    } = this.props.store;

    cleareAllTask();
    cleareAllColumn();
  };
  render() {
    return (
      <>
        <div className="todo">
          <Column />
          <a
            href="/"
            className="waves-effect waves-light btn clearetask"
            onClick={this.cleareAllTask}
          >
            clear
          </a>
        </div>
      </>
    );
  }
}
export default Todo;

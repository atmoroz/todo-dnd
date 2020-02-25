import React from "react";
import { observer, inject } from "mobx-react";

var uniqid = require("uniqid");

@inject("store")
@observer
class AddColumn extends React.Component {
  state = {
    title: ""
  };

  handleChange = event => {
    this.setState({
      title: event.target.value
    });
  };

  addColumn = (e, id) => {
    e.preventDefault();

    const { title } = this.state;
    let idColumn = uniqid();
    const {
      ColumnsStore: { addColumn },
      TaskStore: { createTaskList }
    } = this.props.store;

    addColumn(title, idColumn);

    createTaskList(idColumn);

    this.setState({
      title: ""
    });
  };

  render() {
    return (
      <div className="addColumn">
        <form onSubmit={this.addColumn}>
          <div className="addColumnInputWrapp">
            <input
              type="text"
              value={this.state.title}
              onChange={this.handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="addColumnFormButton waves-effect waves-light btn"
          >
            add column
          </button>
        </form>
      </div>
    );
  }
}
export default AddColumn;

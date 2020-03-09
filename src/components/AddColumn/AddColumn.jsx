import React from "react";

import ChangeInputHoc from "../HocComponents/ChangeInputHoc";
class AddColumn extends React.Component {
  render() {
    return (
      <div className="addColumn">
        <form onSubmit={this.props.addColumn}>
          <div className="addColumnInputWrapp">
            <input
              type="text"
              value={this.props.title}
              onChange={this.props.handleChange}
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
export default ChangeInputHoc(AddColumn);

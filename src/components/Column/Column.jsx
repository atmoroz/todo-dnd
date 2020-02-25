import React from "react";
import { Droppable } from "react-beautiful-dnd";

import { observer, inject } from "mobx-react";
import AddTask from "../AddTask/AddTask";
import Task from "../Task/Task";

@inject("store")
@observer
class Column extends React.Component {
  removeColumn = id => {
    const {
      ColumnsStore: { removeColumn },
      TaskStore: { removeTaskList }
    } = this.props.store;
    removeColumn(id);
    removeTaskList(id);
  };

  render() {
    const {
      ColumnsStore: { columns }
    } = this.props.store;
    console.log(columns.length);
    if (columns.length > 0)
      localStorage.setItem("columns", JSON.stringify(columns));

    return (
      <>
        {columns.map(column => {
          return (
            <Droppable
              droppableId={column.columnId}
              key={`droppableKey=${column.columnId}`}
            >
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  style={{
                    backgroundColor: snapshot.isDraggingOver
                      ? "rgba(148, 196, 192, .7)"
                      : "rgba(148, 196, 192, .3)",
                    margin: "0 15px 20px"
                  }}
                >
                  <div
                    className="todoColumn"
                    key={`todoColumnKey=${column.columnId}`}
                  >
                    <div className="columnTitle">
                      <h2
                        className="todoTitle"
                        key={`todoTitleKey=${column.columnId}`}
                      >
                        {column.title}
                      </h2>
                      {column.isDelete && (
                        <i
                          className="material-icons removeTask"
                          onClick={this.removeColumn.bind(
                            null,
                            column.columnId
                          )}
                        >
                          remove
                        </i>
                      )}
                    </div>
                    {column.isInput && (
                      <div className="todoInput">
                        <AddTask />
                      </div>
                    )}
                    <Task columns={column} />
                  </div>
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          );
        })}
      </>
    );
  }
}
export default Column;

import React from "react";
import { Draggable } from "react-beautiful-dnd";

import { observer, inject } from "mobx-react";

@inject("store")
@observer
class Task extends React.Component {
  removeTask = id => {
    const {
      TaskStore: { removeTask }
    } = this.props.store;

    removeTask(id);
  };

  render() {
    const {
      TaskStore: { taskList }
    } = this.props.store;
    const { columns } = this.props;

    if (taskList) localStorage.setItem("taskList", JSON.stringify(taskList));

    return (
      <>
        <ul key={`taskListKey=${columns.columnId}`}>
          {taskList.find(
            taskColumnId => taskColumnId.columnId === columns.columnId
          ) &&
            taskList
              .find(taskColumnId => taskColumnId.columnId === columns.columnId)
              .task.map((task, i) => (
                <Draggable
                  draggableId={task.taskId}
                  index={i}
                  key={`draggableKey=${task.taskId}`}
                >
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <li className="taskList" key={`taskKey=${task.taskId}`}>
                        <span className="taskContent">{task.content}</span>

                        <i
                          className="material-icons removeTask"
                          onClick={this.removeTask.bind(null, task.taskId)}
                        >
                          remove_circle_outline
                        </i>
                      </li>
                    </div>
                  )}
                </Draggable>
              ))}
        </ul>
      </>
    );
  }
}

export default Task;

import { observable, action } from "mobx";

var uniqid = require("uniqid");

class TaskStore {
  @observable taskList = JSON.parse(localStorage.getItem("taskList")) || [];

  @action.bound createTaskList(columnId) {
    this.taskList.push({
      taskListId: `taskListId-${uniqid()}`,
      columnId: `columnId-${columnId}`,
      task: []
    });
  }

  @action.bound addTask(content) {
    this.taskList[0].task.push({
      taskId: `taskId-${uniqid()}`,
      content: content
    });
  }

  @action.bound removeTask(id) {
    let newTask;
    this.taskList.map(taskItem => {
      newTask = taskItem.task.filter((task, i) => task.taskId !== id);
      taskItem.task = [...newTask];
      return true;
    });
  }

  @action.bound removeTaskList(columnId) {
    let newTaskList = this.taskList.filter(
      tasks => tasks.columnId !== columnId
    );
    this.taskList = [...newTaskList];
  }

  @action.bound changeLineTask(sourceIndex, destinationIndex, columnId) {
    let sourceTaskList = this.taskList.find(
      taskItem => taskItem.columnId === columnId
    );
    let copyTask = { ...sourceTaskList.task[sourceIndex] };
    sourceTaskList.task.splice(sourceIndex, 1);
    sourceTaskList.task.splice(destinationIndex, 0, copyTask);
  }

  @action.bound changeColumnTask(
    sourceDroppableId,
    sourceIndex,
    destinationDroppableId,
    destationIndex,
    taskId
  ) {
    let sourceTaskList = this.taskList.find(
      taskItem => taskItem.columnId === sourceDroppableId
    );
    let droppableTaskList = this.taskList.find(
      taskItem => taskItem.columnId === destinationDroppableId
    );

    let copyTask = { ...sourceTaskList.task[sourceIndex] };
    sourceTaskList.task.splice(sourceIndex, 1);
    droppableTaskList.task.splice(destationIndex, 0, copyTask);
  }

  @action.bound cleareAllTask() {
    this.taskList = [];
    localStorage.clear();
  }
}

export default new TaskStore();

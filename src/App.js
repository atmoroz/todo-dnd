import React from "react";
import { observer, inject } from "mobx-react";
import { DragDropContext } from "react-beautiful-dnd";
import Todo from "./components/Todo/Todo";
import AddColumn from "./components/AddColumn/AddColumn";

@inject("store")
@observer
class App extends React.Component {
  onDragEnd = result => {
    //TODO
    console.log(result);
    const {
      TaskStore: { changeLineTask, changeColumnTask }
    } = this.props.store;
    const { source, destination, draggableId } = result;
    if (!destination) {
      return;
    }
    if (
      source.index === destination.index &&
      source.droppableId === destination.droppableId
    ) {
      return;
    }
    if (
      source.droppableId === destination.droppableId &&
      source.index !== destination.index
    ) {
      changeLineTask(source.index, destination.index, source.droppableId);
    }
    if (source.droppableId !== destination.droppableId) {
      changeColumnTask(
        source.droppableId,
        source.index,
        destination.droppableId,
        destination.index,
        draggableId
      );
    }
  };

  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div className="App">
          <AddColumn />
          <div className="TodoContainer">
            <Todo />
          </div>
        </div>
      </DragDropContext>
    );
  }
}

export default App;

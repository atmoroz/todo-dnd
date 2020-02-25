import { observable, action } from "mobx";

class ColumnsStore {
  @observable columns = JSON.parse(localStorage.getItem("columns")) || [];

  @action.bound addColumn(title, id) {
    this.columns.push({
      columnId: `columnId-${id}`,
      title: title,
      isInput: this.columns.length === 0 ? true : false,
      isDelete: this.columns.length === 0 ? false : true
    });
  }

  @action.bound removeColumn(id) {
    let newColumns = this.columns.filter(column => column.columnId !== id);
    this.columns = [...newColumns];
  }
  @action.bound cleareAllColumn() {
    this.columns = [];
  }
}

export default new ColumnsStore();

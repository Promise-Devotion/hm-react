// 两个有序数组
arr1 = [1, 2, 3]
arr2 = [1, 5, 6]

let result = []
function combine ( data1, data2 ) {
	result = data1
	data2.map( ( item, index ) => {
		result.map( ( resultItem, rindex ) => {
			if ( item <= resultItem ) {
			  result.splice(rindex, 1, item)
			}
		} )
	} )
}



  addTodo = (data) => {
    const todaData = this.todos;
    const newData = [...todaData, data];
    this.setState({ todos: newData });
  };
  updateTodo = (id, done) => {
    const { todos } = this.state;
    const newData = todos.map((item) => {
      if (item.id === id) {
        return { ...item, done };
      } else {
        return item;
      }
    });
    this.setState({ todos: newData });
  };
  deletetodo = (id) => {
    const { todos } = this.state;
    const newTodos = todos.filter((item) => item.id !== id);
    this.setState({
      todos: newTodos,
    });
  };
  checkAll = (done) => {
    const { todos } = this.state;
    const newTodo = todos.map((todoobj) => {
      let obj = Object.assign(todoobj, {});
      obj.done = done;
      return obj;
    });
    this.setState({ todos: newTodo });
  };
  // 清楚全部已完成的
  clearAllDone = () => {
    const { todos } = this.state;
    const newTodo = todos.filter((todoobj) => !todoobj.done);
    this.setState({ todos: newTodo });
  };

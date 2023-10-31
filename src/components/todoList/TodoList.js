import React, { Component } from "react";
import "../../style/style.css";
import TodoItem from "./TodoItem";

import store from "../../store";
import { getInputChangeAction, getAddItemAction, getDeleteItemAction, getTodoList } from "../../store/actionCreators";
import TodoListUI from './TodoListUI';


class TodoList extends Component {
    constructor (props) {
      super(props);
      this.state = store.getState();

      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleClick = this.handleClick.bind(this);
      this.handleItemDelete = this.handleItemDelete.bind(this);
      this.handleStoreChange = this.handleStoreChange.bind(this);
      store.subscribe(this.handleStoreChange);
    }

    render () {
      return (
        <TodoListUI 
          inputValue={this.state.inputValue}
          list={this.state.list}
          handleInputChange={this.handleInputChange}
          handleClick={this.handleClick}
          handleItemDelete={this.handleItemDelete}
        ></TodoListUI>
      )
    }

    handleStoreChange() {
      this.setState(store.getState);
    }

    componentDidMount() {
      //ajax request here (default practice)
      const action = getTodoList();
      store.dispatch(action);
    }

		getTodoItem() {
			return this.state.list.map((item, index) => {
				return (
					<TodoItem 
						key={index}
						content={item} 
						index={index}
						deleteItem={this.handleItemDelete}>
					</TodoItem>
				)}
			)
		}

    handleInputChange(e) {
			// console.log(this.input); /* this.input指向真实的DOM节点*/
      const action = getInputChangeAction(e.target.value);
      store.dispatch(action);
    }

    handleClick() {
      const action = getAddItemAction();
      store.dispatch(action);
			// this.setState((prevState) => (
			// 	{
			// 		list: [...prevState.list, prevState.inputValue], 
			// 		inputValue: ''
			// 	}
			// ))

    }

    handleItemDelete(index) {
      const action = getDeleteItemAction(index);
      store.dispatch(action);
				// this.setState((prevState) => {
				// 	const list = [...prevState.list];
				// 	list.splice(index, 1);
				// 	return {list}
				// });
    }
}

export default TodoList;
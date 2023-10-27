import React, { Component, Fragment } from "react";
import "../../style/style.css";
import TodoItem from "./TodoItem";
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import store from "../../store";
import axios from "axios";

class TodoList extends Component {
    constructor (props) {
      super(props);
      this.state = store.getState();

      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleClick = this.handleClick.bind(this);
      this.handleItemDelete = this.handleItemDelete.bind(this);
      this.renderRow = this.renderRow.bind(this);
      this.handleStoreChange = this.handleStoreChange.bind(this);
      store.subscribe(this.handleStoreChange);
    }

    render () {
      return (
        <div style={{marginTop: '10px', marginLeft: '10px'}} >
          
          <Stack spacing={4} direction="row">
            <TextField 
              id="outlined-basic" 
              label="todo info" 
              variant="outlined" 
              style={{width: 300}} 
              value={this.state.inputValue}
              onChange={this.handleInputChange} />
            <Button variant="contained" onClick={this.handleClick}>Add todo item</Button>
          </Stack>
          <div style={{marginTop: '10px'}}>
            <List>
              {this.renderRow()}
            </List>
          </div>
          {/* <div>
              <label htmlFor="insertArea">Type here</label>
              <input 
                  id="insertArea"
                  className='input'
                  value={this.state.inputValue}
                  onChange={this.handleInputChange}
                  ref={(input) => {this.input = input}}
              />
              <button onClick={this.handleClick}>submit</button>
          </div>
          <ul ref={(ul) => {this.ul = ul}}>
              {this.getTodoItem()}
          </ul> */}
        </div>
      );
    }

    handleStoreChange() {
      this.setState(store.getState);
    }

    renderRow() {
      return this.state.list.map((item, index) => {
        console.log(index);
        return (
          <ListItemButton key={index} onClick={() => this.handleItemDelete(index)}>
            <ListItemText primary={item} />
          </ListItemButton>
        )
      })
    }

    componentDidMount() {
      //ajax request here (default practice)
      axios.get('https://0c397e32-3dca-4b86-bf49-4d95db72dac6.mock.pstmn.io/api/todolist')
        .then((res)=>{
          const action = {
            type: 'load_existing_item',
            value: res
          }
          store.dispatch(action);
          // this.setState((prevState) => {
          //   return {
          //     list: [...prevState.list, ...res.data]
          //   }});
        })
        .catch(()=>{alert('error')})
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
      const action = {
        type: 'change_input_value',
        value: e.target.value
      }
      store.dispatch(action);
    }

    handleClick() {
      const action = {
        type: 'add_todo_item'
      };
      store.dispatch(action);
			// this.setState((prevState) => (
			// 	{
			// 		list: [...prevState.list, prevState.inputValue], 
			// 		inputValue: ''
			// 	}
			// ))

    }

    handleItemDelete(index) {
      const action = {
        type: 'delete_item',
        index: index
      }
      store.dispatch(action);
				// this.setState((prevState) => {
				// 	const list = [...prevState.list];
				// 	list.splice(index, 1);
				// 	return {list}
				// });
    }
}

export default TodoList;
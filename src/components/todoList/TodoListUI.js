import React, { Component } from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

class TodoListUI extends Component {
  constructor(props) {
    super(props);

    this.renderRow = this.renderRow.bind(this);
  }
  render() {
    return (
      <div style={{marginTop: '10px', marginLeft: '10px'}} >
        
        <Stack spacing={4} direction="row">
          <TextField 
            id="outlined-basic" 
            label="todo info" 
            variant="outlined" 
            style={{width: 300}} 
            value={this.props.inputValue}
            onChange={this.props.handleInputChange} />
          <Button variant="contained" onClick={this.props.handleClick}>Add todo item</Button>
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
  renderRow() {
    return this.props.list.map((item, index) => {
      return (
        <ListItemButton key={index} onClick={() => {
          this.props.handleItemDelete(index)}}>
          <ListItemText primary={item} />
        </ListItemButton>
      )
    })
  }
}

export default TodoListUI;
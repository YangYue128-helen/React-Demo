import React, { Component } from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const TodoListUI = (props) => {
  const renderRow = () => {
      return props.list.map((item, index) => {
        return (
          <ListItemButton key={index} onClick={() => {
            props.handleItemDelete(index)}}>
            <ListItemText primary={item} />
          </ListItemButton>
        )
      })
  }
  return (
    <div style={{marginTop: '10px', marginLeft: '10px'}} >
      
      <Stack spacing={4} direction="row">
        <TextField 
          id="outlined-basic" 
          label="todo info" 
          variant="outlined" 
          style={{width: 300}} 
          value={props.inputValue}
          onChange={props.handleInputChange} />
        <Button variant="contained" onClick={props.handleClick}>Add todo item</Button>
      </Stack>
      <div style={{marginTop: '10px'}}>
        <List>
          {renderRow()}
        </List>
      </div>
    </div>
  );
}

export default TodoListUI;
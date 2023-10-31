import React, { Component } from "react";
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import "../../style/style.css";

import store from "../../store";
import { getInputChangeAction, getAddItemAction, getDeleteItemAction, getTodoList } from "../../store/actionCreators";
import { connect } from 'react-redux';

class TodoList extends Component {

  render () {
    const { inputValue, list, changeInputValue, addItem, deleteItem } = this.props;
    const renderRow = () => {
      return list.map((item, index) => {
        return (
          <ListItemButton key={index} onClick={() => {
            deleteItem(index)}}>
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
            value={inputValue}
            onChange={changeInputValue} />
          <Button variant="contained" onClick={addItem}>Add todo item</Button>
        </Stack>
        <div style={{marginTop: '10px'}}>
          <List>
            {renderRow()}
          </List>
        </div>
      </div>

    )
  }
  componentDidMount() {
    //ajax request here (default practice)
    const { initItem } = this.props;
    initItem();
  }
}

const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}

//store.dispatch, props
const mapDispatchToProps = (dispatch) => {
  return {
    changeInputValue(e) {
      const action = getInputChangeAction(e.target.value);
      dispatch(action);
    },
    addItem() {
      const action = getAddItemAction();
      store.dispatch(action);
    },
    deleteItem(index) {
      const action = getDeleteItemAction(index);
      store.dispatch(action);
    },
    initItem() {
      const action = getTodoList();
      store.dispatch(action);
    }
  }
}
//TodoList 是UI组件 
//connect 方法导出的是容器组件
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
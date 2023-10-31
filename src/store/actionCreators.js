import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_ITEM, LOAD_EXISTING_ITEM} from "./actionTypes";
import axios from "axios";

export const getInputChangeAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value

});

export const getAddItemAction = () => ({
    type: ADD_TODO_ITEM
});

export const getDeleteItemAction = (index) => ({
    type: DELETE_ITEM,
    index
});

export const getLoadItemAction = (data) => ({
    type: LOAD_EXISTING_ITEM,
    data
});

export const getTodoList = () => {
    return (dispatch) => {
        axios.get('https://0c397e32-3dca-4b86-bf49-4d95db72dac6.mock.pstmn.io/api/todolist')
        .then((res)=>{
          const data = res.data;
          const action = getLoadItemAction(data);
          dispatch(action);
        })
        .catch(()=>{alert('error')})

    }
}
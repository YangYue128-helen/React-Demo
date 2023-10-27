const defaultState = {
    inputValue: '',
    list: []
}

//reducer can receive the state but cannot change state
export default (state = defaultState, action) => {
    if (action.type === 'change_input_value') {
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    } 
    if (action.type === 'add_todo_item') {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        return newState;
    }
    if (action.type === 'load_existing_item') {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list = [...state.list, ...action.value.data];
        return newState;
    }
    if (action.type === 'delete_item') {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index, 1);
        console.log(newState.list);
        return newState;
    }
    return state;
};
import React, { Component } from "react";
import PropTypes from 'prop-types';

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    render() {
        const {content} = this.props;
        return (
            <div 
                onClick={this.handleClick}>
                {content}
            </div>)
    };

    shouldComponentUpdate(nextProps, nextState) {
        if(nextProps.content !== this.props.content) {
            return true;
        } else {
            return false;
        }
    }

    handleClick() {
        const {deleteItem, index} = this.props;
        deleteItem(index);
    }
}

TodoItem.propTypes = {
    content: PropTypes.string,
    deleteItem: PropTypes.func,
    index: PropTypes.number,
}
export default TodoItem;
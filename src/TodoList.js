import React from "react";
import TodoItem from "./TodoItem"

class TodoList extends React.Component{

    renderItem(i) {
        return (
            <TodoItem
                key={this.props.items[i].id}
                text={this.props.text}
                value={this.props.items[i]}
                onClick={this.props.onClick}
                onDoubleClick={this.props.onDoubleClick}
                edit={this.props.edit}
                delete={this.props.delete}
                onChange={this.props.onChange}
                onKeyPress={this.props.onKeyPress}
            />
        );
    }

    render() {
        let listItems = this.props.items.map((item, index) => this.renderItem(index))
        return (

            <ul>
                {listItems}
            </ul>
        )
    }
}

export default TodoList
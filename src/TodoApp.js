import React from "react";
import TodoList from "./TodoList"

class TodoApp extends React.Component{
    render() {
        return (
            <div className="container">
                <h1>Todos</h1>
                <div className="newItem"></div>
                <div className="list">
                    <TodoList />
                </div>
            </div>
        )
    }
}

export default TodoApp
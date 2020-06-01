import React from "react";
import TodoList from "./TodoList"


class TodoApp extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            id: 0,
            text: '',
            editing: 'null',
            deleting: 'null'
        };
        this.handleChange = this.handleChange.bind(this)
        this.handleKeyPress = this.handleKeyPress.bind(this)
        this.handleClickEdit = this.handleClickEdit.bind(this)
        this.handleClickDelete = this.handleClickDelete.bind(this)
        this.handleKeyPressEdition = this.handleKeyPressEdition.bind(this)
    }

    //ADD ITEM
    handleChange(e) {
        this.setState({text: e.target.value})
    }

    handleKeyPress(e) {
        if (e.key === "Enter"){

            let newItem = {id: this.state.id, text: this.state.text, status: "to-do"}
            this.setState(state => ({
                items: state.items.concat(newItem),
                text: '',
                id: state.id + 1
            }))
        }
    }

    //EDIT
    handleClickEdit(e){
        this.state.items.forEach(item => {

            if (item.id === Number(e.target.dataset.id)){
                this.setState({editing: item.id})
                this.setState({text: item.text})
            }

        })
    }

    handleKeyPressEdition(e) {

        if (e.key === "Z"){
            this.setState({editing: 'null'})
            this.setState({text: ''})
        }

        this.state.items.forEach(item => {

                if (item.id === Number(this.state.editing) && e.key === "Enter"){
                    item.text = this.state.text
                    item.status = "edited"
                    this.setState({editing: 'null'})
                    this.setState({text: ''})
                }
        })
    }


    //DELETE
    handleClickDelete(e){
        let itemTextId = Number(e.target.parentNode.dataset.id)

        if (itemTextId === Number(e.target.dataset.number)){
            this.setState({deleting: itemTextId})
            let indexOfItemToRemove = this.state.items.findIndex(indexOfItem => indexOfItem.id === itemTextId)
            this.state.items.splice(indexOfItemToRemove, 1)
        }
    }


    //RENDER
    render() {
        return (
            <div className="content">
                <h1>Todos</h1>
                <input
                    type="text"
                    name="new"
                    id="new"
                    onKeyPress={this.handleKeyPress}
                    onChange={this.handleChange}
                    value={this.state.editing !== 'null' ? '' : this.state.text}
                />
                <div className="list">
                    <TodoList
                        items={this.state.items}
                        text={this.state.text}
                        onClick={(e) => this.handleClickEdit(e)}
                        onDoubleClick={(e) => this.handleClickDelete(e)}
                        edit={Number(this.state.editing)}
                        delete={Number(this.state.deleting)}
                        onChange={(e) => this.handleChange(e)}
                        onKeyPress={(e) => this.handleKeyPressEdition(e)}
                    />
                </div>
            </div>
        )
    }
}


export default TodoApp
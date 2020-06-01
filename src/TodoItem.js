import React from "react";

function TodoItem(props) {

    function completed(){
        let item = document.querySelector(`[data-id="${props.value.id}"]`)
        const test = item.dataset.id

        if (Number(test) === props.value.id){
            item.classList.toggle("done")
            changeSrc()
        }

    }

    function changeSrc(){
        let item = document.querySelector(`[data-id="${props.value.id}"]`)
        let imageCercle = document.querySelector(`[data-cercle="${props.value.id}"]`)
        const test = item.dataset.id

        if (Number(test) === props.value.id){
            if (item.classList.contains("done")){
                imageCercle.src = "https://img.icons8.com/material-rounded/24/000000/approval.png"
            }else{
                imageCercle.src="https://img.icons8.com/material-sharp/24/000000/circled.png"
            }
        }
    }

    if (props.edit === props.value.id) {
        return (
            <li>
                <input
                    type="text"
                    className="edit"
                    onChange={props.onChange}
                    value={props.text}
                    onKeyPress={props.onKeyPress}
                />
            </li>
        );
    }else{
        return (
            <li>
                <p data-id={props.value.id} onClick={props.onClick}>
                    <img data-cercle={props.value.id} onClick={completed} src="https://img.icons8.com/material-sharp/24/000000/circled.png"/>
                    {props.value.text}
                    <img data-number={props.value.id} onDoubleClick={props.onDoubleClick} src="https://img.icons8.com/metro/26/000000/trash.png"/>
                </p>
            </li>
        );
    }
}

export default TodoItem
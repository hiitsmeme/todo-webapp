import React from 'react';
import $ from 'jquery';

class Menu extends React.Component {
    constructor(props) {
        super(props);

        //functions
        this.deleteTodo = this.deleteTodo.bind(this);
        this.moveTodo = this.moveTodo.bind(this);
        this.editTodo = this.editTodo.bind(this);
        this.reload = this.reload.bind(this);
    }

    reload() {
        window.location.reload(false);
    }

    deleteTodo() {    
        $.ajax({
            url: 'http://127.0.0.1:5000/delete',
            type: 'POST',
            data: this.props.todo,
            dataType: 'json',
            success: this.reload
        })
    }

    moveTodo() {
        $.ajax({
            url: 'http://127.0.0.1:5000/move',
            type: 'POST',
            data: this.props.todo,
            dataType: 'json',
            success: this.reload
        })   
    }

    editTodo() {

    }

    render() {
        return <ul class='flex text-sm flex-col space-y-1 z-10 absolute ml-2 bg-black text-gray-200 border border-gray-400'>
        <button onClick={this.deleteTodo} class='p-2 text-left hover:bg-gray-800'>delete</button>
        <button onClick={this.moveTodo} class='p-2 text-left  hover:bg-gray-800'>move to next day</button>
        <button onclick={this.editTodo} class='p-2 text-left  hover:bg-gray-800'>edit</button>
    </ul>   
    }
}

export default Menu;
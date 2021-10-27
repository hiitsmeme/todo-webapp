import React from 'react';
import TodoForm from './todo-form';

class Day extends React.Component {
    constructor(props) {
        super(props);

        this.renderForm = this.renderForm.bind(this);

    }

    renderForm() {
        //make it a popup somehow?
        return <Todo day={this.props.day} />;
    }

    render() {
        return (
            <div class="flex flex-col h-full w-full bg-black text-green-400 p-5">
                <div class="flex flex-col p-3 border border-green-400 text-xl font-bold self-stretch mb-3">
                    <div class="self-center">{this.props.day}</div>
                </div>
                <div class="relative flex flex-col p-2 border border-pink-300 h-full text-pink-300 text-md">
                    <ul>
                        <Todo text="write text" />
                        <Todo text="read book" />
                    </ul>

                    <button class="absolute place-self-end bottom-2 right-2 font-bold text-blue-200 border px-1 hover:border-2"
                    onClick={this.renderForm}>+</button>
                </div>

            </div>
        )
    }

}

class Todo extends React.Component {
    render() {
        return (
            //make it movable to next day
            <div> <input type="checkbox"></input> {this.props.text}</div> 
        )
    }
}

export default Day;
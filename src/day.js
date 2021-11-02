import React from 'react';
import TodoForm from './todo-form';

class Day extends React.Component {
    constructor(props) {
        super(props);
        this.state = {todoform: <Todo day={this.props.day} />}
        //this.renderForm = this.renderForm.bind(this);

    }
    /*
    renderForm() {
        //make it a popup somehow?
        return <Todo day={this.props.day} />;
    }*/

    render() {
        return (
            <div class="flex flex-col h-full bg-black text-green-400 p-5 overflow-y-auto">
                <div class="flex flex-col p-3 border border-green-400 text-xl font-bold self-stretch mb-3">
                    <div class="self-center">{this.props.day}</div>
                </div>
                <div class="static flex flex-col p-2 border border-pink-300 text-pink-300 text-md overflow-auto">
                    <ul>
                        <Todo text="write text" />
                        <Todo text="read book" />
                    </ul>
                    <div class="">
                        <TodoForm day={this.props.day} />
                    </div>

                    <button class="static inline-block mt-2 place-self-end bottom-2 right-2 font-bold text-blue-200 border px-1 hover:border-2"
                    onClick={this.state.todoform}>+</button>
                    
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
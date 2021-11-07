import React from 'react';
import TodoForm from './todo-form';

class Day extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isFormDisplayed: false}
        this.state = {data: []}
        this.renderForm = this.renderForm.bind(this);
        this.loadData = this.loadData.bind(this);
    }

    //make get request for data somehow
    loadData() {
        //need to give day as input
        $.ajax({
            url: 'http://127.0.0.1:5000/todo',
            type: 'GET',
            success: function(res) {
                console.log(res);
                this.setState({data: res});
            }
        })
    }
    
    renderForm() {
        //make form disappear
        if (this.state.isFormDisplayed === true) {
            this.setState({
                isFormDisplayed: false
            })
        }
        //make form appear
        else {
            this.setState({
                isFormDisplayed: true
            })
        }
    }

    render() {
        return (
            <div class="flex flex-col h-full bg-black text-green-400 overflow-y-auto p-5">
                <div class="flex flex-col p-3 px-5 border border-green-400 text-xl font-bold self-stretch mb-3">
                    <div class="self-center">{this.props.day}</div>
                </div>
                <div class="static flex flex-col p-3 px-5 border border-pink-300 text-pink-300 text-md overflow-auto">
                    <ul id="data">
                        {/* display data somehow */}
                        <Todo text="write text"/>
                        <Todo text="read book" />
                        <div>{this.state.isFormDisplayed ? <TodoForm day={this.props.day} /> : ''}</div>
                    </ul>

                    <button class="static inline-block mt-2 place-self-end bottom-2 
                                    right-2 font-bold text-blue-200 border px-1 hover:border-2"
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
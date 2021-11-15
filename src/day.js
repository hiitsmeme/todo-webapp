import React from 'react';
import TodoForm from './todo-form';
import $ from 'jquery';

class Day extends React.Component {
    constructor(props) {
        super(props);

        //state vars
        this.state = {isFormDisplayed: false}
        this.state = {data: []}

        //functions
        this.renderForm = this.renderForm.bind(this);
        this.loadData = this.loadData.bind(this);
    }

    //request todos
    loadData() {
        var mytodos;
        let day = {
            'day' : this.props.day
        }
        $.ajax({
            url: 'http://127.0.0.1:5000/gettodos',
            type: 'POST',
            data: day,
            dataType: "json",
            success: function(res) {
                mytodos = JSON.parse(res);
                this.setState({data: mytodos});
            }, error: function(e) {
                console.log('Fail');
                return;
            } 
        });
    }
    
    //changes state var
    renderForm() {
        //make form disappear
        if (this.state.isFormDisplayed === true) {
            this.setState({
                isFormDisplayed: false
            });
        }
        //make form appear
        else {
            this.setState({
                isFormDisplayed: true
            })
        }
    }

    render() {
        this.loadData();
        const mytodos = this.state.data;
        const todos = [];
        for (const todo of mytodos) {
            for (const {todotext} of Object.entries(todo)) {
                todos.push(<li key={todo.id}><Todo text={todotext}/></li>)
            }
        }
        return (
            <div class="flex flex-col h-full bg-black text-green-400 overflow-y-auto p-5">
                <div class="flex flex-col p-3 px-5 border border-green-400 text-xl font-bold self-stretch mb-3">
                    <div class="self-center">{this.props.day}</div>
                </div>
                <div class="static flex flex-col p-3 px-5 border border-pink-300 text-pink-300 text-md overflow-auto">
                    <ul>
                        {/* display data */}
                        {todos}
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
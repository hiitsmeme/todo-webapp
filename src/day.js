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
        this.dataCallback = this.dataCallback.bind(this);

        this.loadData();
    }

    //request todos
    loadData() {
        let day = {
            'day' : this.props.day
        }
        $.ajax({
            url: 'http://127.0.0.1:5000/gettodos',
            type: 'POST',
            data: day,
            dataType: "json",
            success: this.dataCallback, error: function(e) {
                return;
            } 
        });
    }


    dataCallback(res){
        const mytodos = res;
        const todos = [];
        //assign todos to listitems
        for (const todo of mytodos) {
            todos.push(<li key={todo.id.toString()}><Todo text={todo.todotext}/></li>)
        }
        this.setState({data:  todos});
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
        return (
            <div class="flex flex-col h-full bg-black text-green-400 p-5">
                <div class="flex flex-col p-3 px-5 border border-green-400 text-xl font-bold mb-3">
                    <div class="self-center">{this.props.day}</div>
                </div>
                <div class="static flex flex-col h-full p-3 px-5 border border-pink-300 text-pink-300 text-md overflow-auto">
                    <ul>
                        {/* display data */}
                        {this.state.data}
                        <div>{this.state.isFormDisplayed ? <TodoForm day={this.props.day} /> : ''}</div>
                    </ul>

                    <button class="static mt-2 place-self-end bottom-2 inline-block 
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
            <div class='overflow-auto w-full'> <input type="checkbox"></input> {this.props.text}</div> 
        )
    }
}

export default Day;
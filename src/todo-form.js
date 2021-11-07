import React from 'react';
import $ from 'jquery';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        let todo = {
            "todotext" : this.state.value,
            "day": this.props.day
        }
       
        $.ajax({
            url: 'http://127.0.0.1:5000/todo',
            type: 'POST',
            data: todo,
            success: function(response){
                //
                return 200;
            }
        })    
    
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} class="bg-gray-700 border border-green-300 my-3 flex flex-col space-y-2 p-2">
               
                    <textarea
                    class="bg-black border border-green-300 active:border-green-300 p-1 resize-none inline-block"
                    value={this.state.value} 
                    placeholder='Todo:'
                    onChange={this.handleChange} />
               
                <input 
                class="bg-black border border-green-300 p-1 w-1/4 self-center"
                id='submittodo' type="submit" value="add" />
            </form>
        )
    }
}

export default TodoForm;
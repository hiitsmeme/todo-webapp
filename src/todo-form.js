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
        let tododict = {
            todotext: this.state.value,
            day: this.props.day
        }
       
        $.ajax({
            url: '/todo',
            type: 'POST',
            data: tododict,
            success: function(response){
                //
            }
        })    
    
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} class="bg-black flex flex-col">
                <label>Todo:
                    <textarea 
                    class="bg-black border border-blue-200 pt-1"
                    value={this.state.value} 
                    onChange={this.handleChange} />
                </label>
                <input 
                class="self-end bg-black border border-blue-200 p-1"
                id='submittodo' type="submit" value="submit" />
            </form>
        )
    }
}

export default TodoForm;
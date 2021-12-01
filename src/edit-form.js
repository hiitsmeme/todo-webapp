import React from 'react';
import $ from 'jquery';

class EditForm extends React.Component {
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
        if (this.state.value.length < 1)
        {
            window.alert ('Enter a todo')
        }
        let todo = {
            "id" : this.props.todo.id,
            "nexttext" : this.state.value
        }
       
        $.ajax({
            url: 'http://127.0.0.1:5000/edit',
            type: 'POST',
            data: todo,
            dataType: 'json',
            success: this.reload
        })   
    
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} class="flex flex-row space-x-2 w-full">
               
                <input type='text'
                    class="autofocus bg-black border border-green-300 focus:outline-none focus:bg-gray-800 focus:border-green-400 w-4/5 mr-2 p-1"
                    value={this.state.value} 
                    placeholder={this.props.todo.todotext}
                    onChange={this.handleChange} />
               
                <div class='inline-block'><input 
                    class="bg-black border px-2 py-1 cursor-pointer border-green-300 w-auto"
                    id='submittodo' type="submit" value="add" /></div>
            </form>
        )
    }
}

export default EditForm;
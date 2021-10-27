import React from 'react';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Todo:'
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault()
        let tododict = {
            todotext: this.state.value,
            day: this.props.day
        }

        //write ajax fct to send input to backend to /todo
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Todo:
                    <textarea value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default TodoForm;
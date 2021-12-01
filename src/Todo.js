import React from 'react';
import $ from 'jquery';

import menu from './images/menu.png';
import Menu from './menu';
import EditForm from './edit-form';

class Todo extends React.Component {
    constructor(props) {
        super(props);
        //vars
        this.state = {
            isMenuDisplayed: false,
            isEditMenuDisplayed: false,
            isCheckDisplayed: true
        }
       

        //functions
        this.displayMenu = this.displayMenu.bind(this);
        this.displayEditMenu = this.displayEditMenu.bind(this);
        this.makeTextaForm = this.makeTextaForm.bind(this);
        this.displayCheck = this.displayCheck.bind(this);
    }

    //display Menu
    displayMenu() {
        //make menu disappear
        if (this.state.isMenuDisplayed === true) {
            this.setState({
                isMenuDisplayed: false
            });
        }
        //make menu appear
        else {
            this.setState({
                isMenuDisplayed: true
            })
        }
    }

    displayEditMenu() {
       //make editmenu disappear
       if (this.state.isEditMenuDisplayed === true) {
        this.setState({
            isEditMenuDisplayed: false,
            isCheckDisplayed: true
        });
        }
        //make editmenu appear
        else {
            this.setState({
                isEditMenuDisplayed: true,
                isCheckDisplayed: false
            })
        } 
    }

    displayCheck() {
        //make check disappear
       if (this.state.isCheckDisplayed === true) {
        this.setState({
            isCheckDisplayed: false
        });
        }
        //make check appear
        else {
            this.setState({
                isCheckDisplayed: true
            })
        }   
    }

    makeTextaForm() {
        document.getElementById('todotext').innerHTML = <EditForm todo = {this.props.todo}/>
    }

    render() {
        return (
            <div class="flex flex-row space-x-2 w-full drag">
                {/* button for menu : move to next day, dragable?, delete, modify */}
                <div class='flex-shrink-0'><button onClick={this.displayMenu}><img width='14' src={menu} alt='menu'/></button></div>
                <div class=''>{this.state.isMenuDisplayed ? <Menu todo={this.props.todo} editmenufct={this.displayEditMenu} menufct={this.displayMenu} /> : ''}</div>
                <div >{this.state.isCheckDisplayed ? <input type="checkbox"></input> : ''}</div>
                <div id='todotext' class="overflow-auto">
                    {this.state.isEditMenuDisplayed ? <EditForm class='w-full' todo = {this.props.todo}/> : this.props.todo.todotext}
                </div>
            </div>
        )
    }
}

export default Todo;
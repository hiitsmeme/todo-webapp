import React from 'react';

import menu from './images/menu.png';
import Menu from './menu'

class Todo extends React.Component {
    constructor(props) {
        super(props);
        //vars
        this.state = {isMenuDisplayed: false}

        //functions
        this.displayMenu = this.displayMenu.bind(this);
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

    render() {
        return (
            <div class="flex flex-row space-x-2 w-full drag">
                {/* button for menu : move to next day, dragable?, delete, modify */}
                <div class='flex-shrink-0'><button onClick={this.displayMenu}><img width='14' src={menu} alt='menu'/></button></div>
                <div class=''>{this.state.isMenuDisplayed ? <Menu todo={this.props.todo} /> : ''}</div>
                <div ><input type="checkbox"></input></div>
                <div class="overflow-auto">{this.props.todo.todotext}</div>
            </div>
        )
    }
}

export default Todo;
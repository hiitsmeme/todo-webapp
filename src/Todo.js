import React from 'react';
import menu from './images/menu.png';

class Todo extends React.Component {
    constructor(props) {
        super(props);
        //vars
        this.state = {isMenuDisplayed: false}
        
        //get full todo item as props input -> use id to delete etc.

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
            //make it movable to next day
            <div class="flex flex-row space-x-2 w-full">
                {/* button for menu : move to next day, dragable?, delete, modify   <div><button class='' onClick={this.displayMenu}><img src={menu} alt='menu'/></button></div> */}
                <div class='flex-shrink-0'><button onClick={this.displayMenu}><img width='14' src={menu} alt='menu'/></button></div>
                <div class=''>{this.state.isMenuDisplayed ? <Menu/> : ''}</div>
                <div ><input type="checkbox"></input></div>
                <div class="overflow-auto">{this.props.text}</div>
            </div>
        )
    }
}

class Menu extends React.Component {
    render() {
        return <ul class='flex text-sm flex-col space-y-1 z-10 absolute ml-2 bg-black text-gray-200 border border-gray-400'>
        <button class='p-2 text-left hover:bg-gray-800'>delete</button>
        <button class='p-2 text-left  hover:bg-gray-800'>move to next day</button>
        <button class='p-2 text-left  hover:bg-gray-800'>edit</button>
    </ul>   
    }
}

export default Todo;
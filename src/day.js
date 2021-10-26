import React from 'react';

class Day extends React.Component {
    render() {
        let x = 10;
        return (
            <div class="flex flex-col h-full w-full bg-black text-green-400 p-5">
                <div class="flex flex-col p-3 border border-green-400 text-xl font-bold self-stretch mb-3">
                    <div class="self-center">{this.props.day}</div>
                </div>
                <div class="relative flex flex-col p-2 border border-pink-300 h-full text-pink-300 text-md">
                    <ul>
                        <Todo text="write text" />
                        <Todo text="read book" />
                    </ul>

                    <button class="absolute place-self-end bottom-2 right-2 font-bold text-blue-200 border px-1 hover:border-2">+</button>
                </div>

            </div>
        )
    }
}

class Todo extends React.Component {
    render() {
        return (
            <div class="p-x-2 flex flex-row">
                <div> <input type="checkbox"></input> {this.props.text}</div>
               
            </div>
        )
    }
}

export default Day;
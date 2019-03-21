// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, { Component } from 'react';

export default class TodoList extends Component {
    constructor(props){
        super(props);

        this.state = {
            userInput: '',
            list: []
        }
    }

    changeUserInput(input) {
        this.setState({
            userInput: input
        }, ()=> console.log(input));
    }

    addToList(input){
        let listArray = this.state.list; //clone of list:[]

        listArray.push(input);
        this.setState({
            list: listArray,
            userInput: ''
        })
    }

    render() {
        return(
            <div className="todo-list-main">
                <input
                 onChange= { (e) => this.changeUserInput(e.target.value)}
                 value={this.state.userInput} type="text" 
                 />
                <button onClick={()=> this.addToList(this.state.userInput)}>Add Item</button>
                <button>Clear Completed</button>
                <ul>
                    {this.state.list.map((val) => <li>{val}</li>)}
                </ul>
            </div>
        )
    }
}
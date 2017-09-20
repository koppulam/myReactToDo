import React from 'react'
import ToDo from './ToDo.jsx'
import data from '../data/data.json'

class ToDoList extends React.Component {

	constructor() {
		super()
		this.addToDo = this.addToDo.bind(this);
		this.showNewToDo = this.showNewToDo.bind(this);
	}


	addToDo() {

	}

	showNewToDo() {

	}

	componentDidMount() {

	}


	render () {
		var toDos = data;// ["one", "toe", "three"];
		return (
			<div> list of toDos 
				<ul>
					{ toDos.map(item => {
						return <li> <ToDo key={item.id} myTodo={item} /> </li>
					})
				}
				</ul>
				<button onClick={this.showNewToDo()}> Add New To Do </button>
			</div>
			)
	}
}

export default ToDoList;
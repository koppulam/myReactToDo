import React from 'react'
import ToDo from './ToDo.jsx'
import data from '../data/data.json'
import VisibleTodoList from '../containers/ToDoListContainer'

class ToDoList extends React.Component {

	constructor() {
		super()
	}

	
	render () {
		//var toDos = data;// ["one", "toe", "three"];
		var toDos = this.props.todos;

		return (
			<div> list of toDos 
				<ul>
					{ toDos.map(item => {
						return <ToDo  key={item.id}  myTodo={item} onClick={() => {this.props.onTodoClick(item.id)}} />
					})
				}
				</ul>
				
			</div>
			)
	}
}

ToDoList.propTypes = {
	todos: React.PropTypes.array.isRequired,
	onTodoClick: React.PropTypes.func.isRequired
}

export default VisibleTodoList(ToDoList);
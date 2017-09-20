import React from 'react'

class ToDo extends React.Component {
	constructor () {
		super()
		console.log("To do is called")
	}
	render() {
		return (
			<div>
				{this.props.myTodo.toDoText}
			</div>)
	}
}

ToDo.propTypes = {
	myTodo : React.PropTypes.string.isRequired
}

export default ToDo;
import React from 'react'

class ToDo extends React.Component {
	constructor () {
		super()
		console.log("To do is called")
	}
	render() {
		return (
			<li  onClick={this.props.onClick} style={{
      textDecoration: this.props.myTodo.completed ? 'line-through' : 'none'
    }}>
				{this.props.myTodo.toDoText}
			</li>)
	}
}

ToDo.propTypes = {
	myTodo : React.PropTypes.object.isRequired,
	onClick: React.PropTypes.func.isRequired
}

export default ToDo;
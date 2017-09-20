import React from 'react'
import ToDoList from './component/ToDoList.jsx'

class App extends React.Component {
	constructor() {
		super()
		console.log("test")
	}
	render() {
		return (
			<div>
				<ToDoList></ToDoList>
			</div>
			)
	}
}

export default App
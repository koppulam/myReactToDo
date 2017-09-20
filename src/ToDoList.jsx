import React from 'react'

class ToDOList extends React.Component {
	render () {
		var toDos = ["one", "toe", "three"];
		return (
			<div> list of toDos 
				<ul>
					toDos.map(function (val, i) {
						// body...
						return <ToDo key="i" />
					})
				<ul>
			</div>)
	}
}

export default ToDOList;
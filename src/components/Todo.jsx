import React from 'react'
import { Badge, ListGroup } from 'react-bootstrap'
import { GrFormClose } from 'react-icons/gr'
import '../App.css'

const Todo = ({ todos, removeTodo }) => {
	return (
		<ListGroup as='ol' numbered className='shadow'>
			{todos.map(todo => (
				<ListGroup.Item
					as='li'
					className='d-flex justify-content-between align-items-start'
					key={todo.id}
				>
					<div className='ms-2 me-auto'>
						<div className=''>{todo.text}</div>
					</div>
					<Badge bg='secondary' pill>
						<GrFormClose className='icon' onClick={() => removeTodo(todo.id)} />
					</Badge>
				</ListGroup.Item>
			))}
		</ListGroup>
	)
}

export default Todo

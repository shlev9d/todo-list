import React, { useState } from 'react'
import AlertMessage from './AlertMessage'
import Todo from './Todo'
import TodoForm from './TodoForm'

const MAX_TODO = 10

const TodoList = () => {
	const [todos, setTodos] = useState([])
	const [showAlert, setShowAlert] = useState(false)

	const addTodo = todo => {
		const newTodos = [todo, ...todos]
		if (todos.length >= MAX_TODO) {
			setShowAlert(true)
		} else {
			setTodos(newTodos)
		}
	}

	const removeTodo = id => {
		const arrTodos = [...todos].filter(todo => todo.id !== id)
		setTodos(arrTodos)
	}

	const closeAlert = () => {
		setShowAlert(false)
	}

	return (
		<div className='text-center maxWidth'>
			<h1>Your notes</h1>
			<TodoForm addTodo={addTodo} />
			<Todo todos={todos} removeTodo={removeTodo} />
			{showAlert && <AlertMessage closeAlert={closeAlert} />}
		</div>
	)
}

export default TodoList

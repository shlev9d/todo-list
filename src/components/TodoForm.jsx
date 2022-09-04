import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import '../App.css'

const TodoForm = ({addTodo}) => {
	const [inputValue, setInputValue] = useState('')

	const handleChange = e => setInputValue(e.target.value)

	const handleSubmit = e => {
		e.preventDefault()

		addTodo({
			id: Math.floor(Math.random() * 100000),
			text: inputValue,
		})

		setInputValue('')
	}

	return (
		<Form>
			<Form.Group className={'d-flex mb-3 gap-2 '}>
				<Form.Control
					type='text'
					placeholder='Write a note...'
					value={inputValue}
					onChange={handleChange}
					className='shadow input'
				/>
				<Button
					className='col-3 shadow'
					onClick={handleSubmit}
					type={'submit'}
					variant='secondary'
				>
					Add
				</Button>
			</Form.Group>
		</Form>
	)
}

export default TodoForm

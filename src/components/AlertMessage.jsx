import React from 'react'
import Toast from 'react-bootstrap/Toast'
import ToastContainer from 'react-bootstrap/ToastContainer'
import '../App.css'

const AlertMessage = ({ closeAlert }) => {
	return (
		<ToastContainer position='top-center' className='alertMessage'>
			<Toast onClose={closeAlert}>
				<Toast.Header>
					<strong className='me-auto'>Warning</strong>
				</Toast.Header>
				<Toast.Body>
					<strong>You can only 10 notes</strong>
				</Toast.Body>
			</Toast>
		</ToastContainer>
	)
}

export default AlertMessage

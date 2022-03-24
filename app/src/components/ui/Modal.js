import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

function Modal(props) {
	if (!props.open) {
		return null;
	}

	return (
		<React.Fragment>
			{ReactDOM.createPortal(
				<div className="backdrop"></div>,
				document.getElementById('backdrop-root')
			)}
			{ReactDOM.createPortal(
				<div className="modal">
					<p className="modal__message">{props.message}</p>
					<div className="modal__buttons">
						<button
							className="modal__button modal__button--yes"
							onClick={props.handleYes}
						>
							Yes
						</button>
						<button
							className="modal__button modal__button--no"
							onClick={props.handleNo}
						>
							No
						</button>
					</div>
				</div>,
				document.getElementById('modal-root')
			)}
		</React.Fragment>
	);
}

export default Modal;

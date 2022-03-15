import React from 'react';
import './CircleButton.css';

function CircleButton(props) {
	return (
		<button
			className="circle-button__button"
			type="button"
			onClick={props.onClick}
			style={props.style}
			disabled={props.disabled}
		>
			{props.children}
		</button>
	);
}

export default CircleButton;

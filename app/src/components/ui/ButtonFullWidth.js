import React from 'react';
import './ButtonFullWidth.css';

function ButtonFullWidth(props) {
	return (
		<button
			className="button-full-width"
			type="button"
			onClick={props.onClick}
			disabled={props.disabled}
		>
			{props.children}
		</button>
	);
}

export default ButtonFullWidth;

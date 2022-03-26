import React, { useState } from 'react';
import './ButtonFullWidth.css';

function ButtonFullWidth(props) {
	const [backgroundColor, setBackgroundColor] = useState(props.color);

	const style = {
		...props.style,
		backgroundColor,
	};

	return (
		<button
			className="button-full-width"
			type="button"
			onClick={props.onClick}
			onMouseEnter={() => setBackgroundColor(props.hoverColor)}
			onMouseLeave={() => setBackgroundColor(props.color)}
			style={style}
			disabled={props.disabled}
		>
			{props.children}
		</button>
	);
}

export default ButtonFullWidth;

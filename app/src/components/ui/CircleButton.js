import React, { useState } from 'react';
import './CircleButton.css';

function CircleButton(props) {
    const [backgroundColor, setBackgroundColor] = useState(props.color);

    const style = {
        ...props.style,
        backgroundColor,
    };

	return (
		<button
			className="circle-button__button"
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

export default CircleButton;

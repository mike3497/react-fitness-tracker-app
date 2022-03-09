import React from 'react';
import './BottomBar.css';

function BottomBar(props) {
	return <div className="bottom-bar">{props.children}</div>;
}

export default BottomBar;

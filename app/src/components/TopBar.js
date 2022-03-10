import React from 'react';
import './TopBar.css';

function TopBar(props) {
	return (
		<div className="top-bar">
			<div className="top-bar__body">
				<h3>Fitness Tracker</h3>
				<div className="top-bar__right-align">{props.children}</div>
			</div>
		</div>
	);
}

export default TopBar;

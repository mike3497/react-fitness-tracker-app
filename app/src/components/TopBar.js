import React from 'react';
import './TopBar.css';

function TopBar(props) {
	return (
		<div className="top-bar">
			<div className="top-bar__body">
				<h6>Fitness Tracker</h6>
				<div className="top-bar__right-align">{props.children}</div>
			</div>
		</div>
	);
}

export default TopBar;

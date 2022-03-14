import React from 'react';
import './TopBar.css';
import { Link } from 'react-router-dom';

function TopBar(props) {
	return (
		<div className="top-bar">
			<div className="top-bar__body">
				<h6>
					<Link to="/" className="top-bar__link">
						Fitness Tracker
					</Link>
				</h6>
				<div className="top-bar__right-align">{props.children}</div>
			</div>
		</div>
	);
}

export default TopBar;

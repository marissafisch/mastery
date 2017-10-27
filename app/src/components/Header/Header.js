import React, { Component } from 'react';
import './Header.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';



export default class Header extends Component {

	render() {
		return (
			<div id="header">
				<div className="header-container">
					
					
					<nav>
							
					    
						<ul className="nav-bar-left">
							<li>
								<Link
								className="Home-Link"
								to="/"
								>	
								Home
								</Link>
								</li>
								<li>
								<Link
								className="Workouts-Link"
								to="/workouts"
								>
								Workouts
								</Link>
                                </li>
					    </ul>

							
					</nav>
					
				</div>
			</div>
		)
	}

}


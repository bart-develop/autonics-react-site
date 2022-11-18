import React from 'react';
import '../styles/Header.scss';
import logo from '../img/autonics-slogan-dark.webp';
import robots from '../img/robots.webp';

function Header() {
	return (
		<>
			<header>
				<div className="header">
					<div className="header-cont">
						<img className="header-logo" src={logo} alt="" />
						<div className="text-cont">
							<h1>Most reliable automatics manufacturer in Europe.</h1>
							<p>
								We provide high-quality means of automation and robotics for
								many companies in the world.
							</p>
						</div>
					</div>
					<img className="header-img" src={robots} alt="" srcSet="" />
				</div>
			</header>
		</>
	);
}

export default Header;

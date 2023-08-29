import React, { useState, useEffect } from 'react'
import './style.css'
function Nav() {

	const [isDarkMode, setIsDarkMode] = useState(false);


	useEffect(() => {
		if (isDarkMode) {
			document.body.classList.add('dark');
		} else {
			document.body.classList.remove('dark');
		}
	}, [isDarkMode]);

	const handleToggleSwitch = () => {
		setIsDarkMode(!isDarkMode);
	}
	return (
		<nav>
			<i className='bx bx-menu' ></i>
			<a href="#" className="nav-link">Categories</a>
			<form action="#">
				<div className="form-input">
					<input type="search" placeholder="Search..." />
					<button type="submit" className="search-btn"><i className='bx bx-search' ></i></button>
				</div>
			</form>
			<input type="checkbox" className="switch-mode" hidden />
			<label htmlFor="switch-mode" onClick={handleToggleSwitch} className="switch-mode"></label>
			<a href="#" className="notification">
				<i className='bx bxs-bell' ></i>
				<span className="num">8</span>
			</a>
			<a href="#" className="profile">
				<img src="img/people.png" />
			</a>
		</nav>
	)
}

export default Nav
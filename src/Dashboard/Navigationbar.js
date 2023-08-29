import React, { useState, useEffect } from 'react'
import './style.css'
function Navigationbar() {
	const [isSidebarHidden, setIsSidebarHidden] = useState(window.innerWidth < 768);
	const [isSearchFormShown, setIsSearchFormShown] = useState(false);
	const [isDarkMode, setIsDarkMode] = useState(false);

	useEffect(() => {
		const allSideMenu = document.querySelectorAll('.sidebar .side-menu.top li a');
		allSideMenu.forEach(item => {
			const li = item.parentElement;

			item.addEventListener('click', function () {
				allSideMenu.forEach(i => {
					i.parentElement.classList.remove('active');
				})
				li.classList.add('active');
			})
		});

		const menuBar = document.querySelector('.content nav .bx.bx-menu');
		const sidebar = document.querySelector('.sidebar');

		menuBar.addEventListener('click', function () {
			setIsSidebarHidden(!isSidebarHidden);
		});

		const searchButton = document.querySelector('.content nav form .form-input button');
		const searchButtonIcon = document.querySelector('.content nav form .form-input button .bx');
		const searchForm = document.querySelector('.content nav form');

		searchButton.addEventListener('click', function (e) {
			if (window.innerWidth < 576) {
				e.preventDefault();
				setIsSearchFormShown(!isSearchFormShown);
				if (isSearchFormShown) {
					searchButtonIcon.classList.replace('bx-search', 'bx-x');
				} else {
					searchButtonIcon.classList.replace('bx-x', 'bx-search');
				}
			}
		});

		if (window.innerWidth < 768) {
			setIsSidebarHidden(true);
		} else if (window.innerWidth > 576) {
			searchButtonIcon.classList.replace('bx-x', 'bx-search');
			setIsSearchFormShown(false);
		}

		const handleResize = () => {
			if (window.innerWidth > 576) {
				searchButtonIcon.classList.replace('bx-x', 'bx-search');
				setIsSearchFormShown(false);
			}
			setIsSidebarHidden(window.innerWidth < 768);
		}

		window.addEventListener('resize', handleResize);

		return () => {
			allSideMenu.forEach(item => item.removeEventListener('click', () => { }));
			menuBar.removeEventListener('click', () => { });
			searchButton.removeEventListener('click', () => { });
			window.removeEventListener('resize', handleResize);
		}
	}, [isSidebarHidden, isSearchFormShown]);

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
		<div>
			<div>
				<h1 className="title">Dashboard</h1>
				<ul className="breadcrumbs">
					<li><a href="/" target="_blank">Home</a></li>
					<li className="divider">/</li>
					<li><a href="#" className="active">content</a></li>
				</ul>

			</div>


			<div className="info-data">
				<div className="card">
					<div className="head">
						<div>
							<h2>MORNING HN2</h2>
							<p>HND2</p>
						</div>
						<i className='bx bx-trending-up icon' ></i>
					</div>
					<span className="progress" data-value="HND2M"></span>
					<span className="label">HND2M</span>
				</div>

				<div className="card">
					<div className="head">
						<div>
							<h2>MORNING HN1</h2>
							<p>HND1</p>
						</div>

						<i className='bx bx-trending-up icon' ></i>
					</div>
					<span className="progress" data-value="HND1M"></span>
					<span className="label">HND1M</span>

				</div>


				<div className="card">
					<div className="head">
						<div>
							<h2>MORNING ND2</h2>
							<p>ND2</p>
						</div>

						<i className='bx bx-trending-up icon' ></i>
					</div>
					<span className="progress" data-value="ND2M"></span>
					<span className="label">ND2M</span>

				</div>
				<div className="card">
					<div className="head">
						<div>
							<h2>MORNING ND1</h2>
							<p>ND1</p>
						</div>


						<i className='bx bx-trending-up icon' ></i>
					</div>
					<span className="progress" data-value="ND1M"></span>
					<span className="label">ND1M</span>

				</div>
				<div className="card">
					<div className="head">
						<div>
							<h2>EVENING HN2</h2>
							<p>HND2</p>
						</div>

						<i className='bx bx-trending-up icon' ></i>
					</div>
					<span className="progress" data-value="HND2E"></span>
					<span className="label">HND2E</span>

				</div>

				<div className="card">
					<div className="head">
						<div>
							<h2>EVENING HN1</h2>
							<p>HND1</p>
						</div>

						<i className='bx bx-trending-up icon' ></i>
					</div>
					<span className="progress" data-value="HND1E"></span>
					<span className="label">HND1E</span>

				</div>
				<div className="card">
					<div className="head">
						<div>
							<h2>EVENING ND2</h2>
							<p>ND2</p>
						</div>

						<i className='bx bx-trending-up icon' ></i>
					</div>
					<span className="progress" data-value="ND2E"></span>
					<span className="label">ND2E</span>
				</div>
				<div className="card">
					<div className="head">
						<div>
							<h2>EVENING ND1</h2>
							<p>ND1</p>
						</div>

						<i className='bx bx-trending-up icon' ></i>
					</div>
					<span className="progress" data-value="ND1E"></span>
					<span className="label">ND1E</span>

				</div>


			</div>
		</div>
	)
}

export default Navigationbar
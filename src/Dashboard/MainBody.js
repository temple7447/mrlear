import React, { useState, useEffect } from 'react'
import TableStudent from './TableStudent';
import './style.css'
function MainBody() {
	const [isSidebarHidden, setIsSidebarHidden] = useState(window.innerWidth < 768);
	const [isSearchFormShown, setIsSearchFormShown] = useState(false);


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


	return (
		<main>
			<div className="head-title">
				<div className="left">
					<h1>Dashboard</h1>
					<ul className="breadcrumb">
						<li>
							<a href="#">Dashboard</a>
						</li>
						<li><i className='bx bx-chevron-right' ></i></li>
						<li>
							<a className="active" href="#">Home</a>
						</li>
					</ul>
				</div>
				<a href="#" className="btn-download">
					<i className='bx bxs-cloud-download' ></i>
					<span className="text">Download PDF</span>
				</a>
			</div>

			<ul className="box-info">
				<li>
					<i className='bx bxs-calendar-check' ></i>
					<span className="text">
						<h3>1020</h3>
						<p>New Order</p>
					</span>
				</li>
				<li>
					<i className='bx bxs-group' ></i>
					<span className="text">
						<h3>2834</h3>
						<p>Visitors</p>
					</span>
				</li>
				<li>
					<i className='bx bxs-dollar-circle' ></i>
					<span className="text">
						<h3>$2543</h3>
						<p>Total Sales</p>
					</span>
				</li>
			</ul>

			<TableStudent />

		</main>
	)
}

export default MainBody
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom';
import './style.css'
function SideBar() {
	const [isSidebarHidden, setIsSidebarHidden] = useState(window.innerWidth < 768);
	const [isSearchFormShown, setIsSearchFormShown] = useState(false);
	const navigate = useNavigate()
	let auth = getAuth();


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






	const HandleLoginOut = () => {
		signOut(auth).then(() => {
			navigate('/Admin')
		}).catch((error) => {
			alert(`${error}`)
		});

	}
	return (
		<section className="sidebar">

			<Link to="/Admin/Dashboard" className="brand">
				<i className='bx bxs-smile'></i>
				<span className="text">AdminHub</span>
			</Link>
			<ul className="side-menu top">
				<li className="active">
					<Link to="/Admin/Dashboard/Home">
						<i className='bx bxs-dashboard' ></i>
						<span className="text">Dashboard</span>
					</Link>
				</li>
				<li>
					<Link to="/Admin/Dashboard/Notification">
						<i className='bx bxs-shopping-bag-alt' ></i>
						<span className="text">Assignment Notification</span>
					</Link>
				</li>
				{/* <li>
					<Link to="/Admin/Dashboard/Analytics">
						<i className='bx bxs-doughnut-chart' ></i>
						<span className="text">Analytics</span>
					</Link>
				</li> */}
				<li>
					<Link to="/Admin/Dashboard/Message">
						<i className='bx bxs-message-dots' ></i>
						<span className="text">Message</span>
					</Link>
				</li>
			</ul>
			<ul className="side-menu">
				{/* <li>
					<a href="#">
						<i className='bx bxs-cog' ></i>
						<span className="text">Settings</span>
					</a>
				</li> */}
				<li >
					<a href="#" onClick={HandleLoginOut} className="logout">
						<i className='bx bxs-log-out-circle' ></i>
						<span className="text">Logout</span>
					</a>
				</li>
			</ul>
		</section>
	)
}

export default SideBar
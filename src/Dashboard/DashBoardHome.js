import React, { useState, useEffect } from 'react'
import './style.css'
import MainBody from './MainBody'


function DashBoardHome() {
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
			<MainBody />
		</div>


	)
}

export default DashBoardHome
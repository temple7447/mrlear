import React from 'react'
import Notication from './Notication'
import './style.css'
import { Link } from 'react-router-dom'
function Message() {
	return (
		<div>
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
								<Link className="active" to='/Admin/Dashboard/Notification'>Message</Link>

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

				<div className="table-data">

					<Notication />
				</div>

			</main>
		</div>
	)
}

export default Message
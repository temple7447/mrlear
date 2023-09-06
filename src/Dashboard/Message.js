import React from 'react'
import Notication from './Notication'
import './style.css'
import { Link , NavLink} from 'react-router-dom'
function Message() {
	return (
		<div>
			<main>
				<div className="head-title">
					<div className="left">
						<h1>Dashboard</h1>
						<ul className="breadcrumb">
							<li>
								<NavLink href="#">Dashboard</NavLink>
							</li>
							<li><i className='bx bx-chevron-right' ></i></li>
							<li>
								<Link className="active" to='/Admin/Dashboard/Notification'>Message</Link>

							</li>
						</ul>
					</div>
					{/* <a href="#" className="btn-download">
						<i className='bx bxs-cloud-download' ></i>
						<span className="text">Download PDF</span>
					</a> */}
				</div>


				<div className="table-data">

					<Notication />
				</div>

			</main>
		</div>
	)
}

export default Message
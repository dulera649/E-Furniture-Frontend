import React from 'react'
import { Helmet } from 'react-helmet'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
	return (
		<div>
			<Helmet>
				<link href="css/bootstrap.min.css" rel="stylesheet" />
				<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet" />
				<link href="css/tiny-slider.css" rel="stylesheet" />
				<link href="css/style.css" rel="stylesheet" />
				{/* <script src="js/bootstrap.bundle.min.js"></script>
		        <script src="js/tiny-slider.js"></script>
		        <script src="js/custom.js"></script> */}
			</Helmet>
			<nav class="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark" arial-label="Furni navigation bar">

				<div class="container">
					<Link to="/" class="navbar-brand">Furniture</Link>
					{/* <a class="navbar-brand" href="index.html">Furniture</a> */}

					<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni" aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
					</button>

					<div class="collapse navbar-collapse" id="navbarsFurni">
						<ul class="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
							<li class="nav-item">
								<Link class="nav-link" to="/">Home</Link></li>
							<li><Link to="/Shop" class="nav-link">Shop</Link></li>
							<li><Link to="/Aboutus" class="nav-link">About us</Link></li>
							<li><Link to="/Services" class="nav-link">Services</Link></li>
							<li><Link to="/Blog" class="nav-link">Blog</Link></li>
							<li><Link to="/Contactus" class="nav-link">Contact us</Link></li>
						</ul>

						<ul class="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
							{/* <li><Link class="nav-link" to="/UserLogin"><img src="images/user.svg"/></Link></li> */}
							<li><Link class="nav-link" to="/Cart"><img src="images/cart.svg" /></Link></li>
						</ul>
					</div>
				</div>

			</nav>
		</div>

	)
}

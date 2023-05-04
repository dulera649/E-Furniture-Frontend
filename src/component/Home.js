import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

export const Home = () => {
	return (
		<div>
			<Helmet>
				<link href="css/bootstrap.min.css" rel="stylesheet" />
				<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet" />
				<link href="css/tiny-slider.css" rel="stylesheet" />
				<link href="css/style.css" rel="stylesheet" />
				{/* <script src="js/bootstrap.bundle.min.js"></script>
		        <script src="js/tin y-slider.js"></script>
		        <script src="js/custom.js"></script> */}
			</Helmet>
			<div>
				<div class="hero">
					<div class="container">
						<div class="row justify-content-between">
							<div class="col-lg-5">
								<div class="intro-excerpt">
									<h1>Let's get started!</h1>
									<p class="mb-4"></p>
									<p>
										<Link to="/UserLogin" class="btn btn-secondary me-2">Login</Link>
										<Link to="/UserRegi" class="btn btn-white-outline">Registration</Link>
									</p>
								</div>
							</div>

							<div class="col-lg-7">
								<div class="hero-img-wrap">
									<img src="images/couch.png" class="img-fluid" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="product-section">
				<div class="container">
					<div class="row">

						<div class="col-md-12 col-lg-3 mb-5 mb-lg-0">
							<h2 class="mb-4 section-title">Crafted with excellent material.</h2>
							<p class="mb-4"></p>
							<p><a href="/shop" class="btn">Explore</a></p>
						</div>

						<div class="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
							<a class="product-item" href="/cart">
								<img src="images/product-1.png" class="img-fluid product-thumbnail" />
								<h3 class="product-title">Nordic Chair</h3>
								<strong class="product-price">Rs 4200.00</strong>

								<span class="icon-cross">
									<img src="images/cross.svg" class="img-fluid" />
								</span>
							</a>
						</div>

						<div class="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
							<a class="product-item" href="/cart">
								<img src="images/product-2.png" class="img-fluid product-thumbnail" />
								<h3 class="product-title">Dutchbone Bar Chair</h3>
								<strong class="product-price">Rs 6400.00</strong>

								<span class="icon-cross">
									<img src="images/cross.svg" class="img-fluid" />
								</span>
							</a>
						</div>

						<div class="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
							<a class="product-item" href="/cart">
								<img src="images/product-3.png" class="img-fluid product-thumbnail" />
								<h3 class="product-title">Clipper Chair</h3>
								<strong class="product-price">Rs 3500.00</strong>

								<span class="icon-cross">
									<img src="images/cross.svg" class="img-fluid" />
								</span>
							</a>
						</div>
					</div>
				</div>
			</div>
			<div class="why-choose-section">
				<div class="container">
					<div class="row justify-content-between">
						<div class="col-lg-6">
							<h2 class="section-title">Why Choose Us?</h2>
							<p></p>

							<div class="row my-5">
								<div class="col-6 col-md-6">
									<div class="feature">
										<div class="icon">
											<img src="images/truck.svg" alt="Image" class="imf-fluid" />
										</div>
										<h3>Fast &amp; Free Shipping</h3>
										<p></p>
									</div>
								</div>

								<div class="col-6 col-md-6">
									<div class="feature">
										<div class="icon">
											<img src="images/bag.svg" alt="Image" class="imf-fluid" />
										</div>
										<h3>Easy to Shop</h3>
										<p></p>
									</div>
								</div>

								<div class="col-6 col-md-6">
									<div class="feature">
										<div class="icon">
											<img src="images/support.svg" alt="Image" class="imf-fluid" />
										</div>
										<h3>24/7 Support</h3>
										<p></p>
									</div>
								</div>

								<div class="col-6 col-md-6">
									<div class="feature">
										<div class="icon">
											<img src="images/return.svg" alt="Image" class="imf-fluid" />
										</div>
										<h3>Hassle Free Returns</h3>
										<p></p>
									</div>
								</div>

							</div>
						</div>

						<div class="col-lg-5">
							<div class="img-wrap">
								<img src="images/why-choose-us-img.jpg" alt="Image" class="img-fluid" />
							</div>
						</div>

					</div>
				</div>
			</div>
			<div class="we-help-section">
				<div class="container">
					<div class="row justify-content-between">
						<div class="col-lg-7 mb-5 mb-lg-0">
							<div class="imgs-grid">
								<div class="grid grid-1"><img src="images/img-grid-1.jpg" alt="Untree.co" /></div>
								<div class="grid grid-2"><img src="images/img-grid-2.jpg" alt="Untree.co" /></div>
								<div class="grid grid-3"><img src="images/img-grid-3.jpg" alt="Untree.co" /></div>
							</div>
						</div>
						<div class="col-lg-5 ps-lg-5">
							<h2 class="section-title mb-4">We Help You Make Modern Interior Design</h2>
							<p></p>

							<ul class="list-unstyled custom-list my-4">
								{/* <li></li>
							<li></li>
							<li></li>
							<li></li> */}
							</ul>	
							<p><a href="/Shop" class="btn">Explore</a></p>
						</div>
					</div>
				</div>
			</div>
			<div class="blog-section">
				<div class="container">
					<div class="row mb-5">
						<div class="col-md-6">
							<h2 class="section-title">Recent Blog</h2>
						</div>
						<div class="col-md-6 text-start text-md-end">
							<a href="/blog" class="more">View All Posts</a>
						</div>
					</div>

					<div class="row">

						<div class="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
							<div class="post-entry">
								<a href="#" class="post-thumbnail"><img src="images/post-1.jpg" alt="Image" class="img-fluid" /></a>
								<div class="post-content-entry">
									<h3><a href="#">First Time Home Owner Ideas</a></h3>
									<div class="meta">
										<span>by <a href="#">Kristin Watson</a></span> <span> <a href="#"></a></span>
									</div>
								</div>
							</div>
						</div>

						<div class="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
							<div class="post-entry">
								<a href="#" class="post-thumbnail"><img src="images/post-2.jpg" alt="Image" class="img-fluid" /></a>
								<div class="post-content-entry">
									<h3><a href="#">How To Keep Your Furniture Clean</a></h3>
									<div class="meta">
										<span>by <a href="#">Robert Fox</a></span> <span><a href="#"></a></span>
									</div>
								</div>
							</div>
						</div>

						<div class="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
							<div class="post-entry">
								<a href="#" class="post-thumbnail"><img src="images/post-3.jpg" alt="Image" class="img-fluid" /></a>
								<div class="post-content-entry">
									<h3><a href="#">Small Space Furniture Apartment Ideas</a></h3>
									<div class="meta">
										<span>by <a href="#">Kristin Watson</a></span> <span><a href="#"></a></span>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
		</div>
	)
}

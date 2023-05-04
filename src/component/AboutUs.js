import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

export const Aboutus = () => {
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
			<div>
				<div class="hero">
					<div class="container">
						<div class="row justify-content-between">
							<div class="col-lg-5">
								<div class="intro-excerpt">
									<h1>About Us</h1>
									<p class="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
									<p><Link to="/Shop" class="btn btn-secondary me-2">Shop Now</Link> <Link to="/Shop" class="btn btn-white-outline">Explore</Link></p>
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

				<div class="why-choose-section">
					<div class="container">
						<div class="row justify-content-between align-items-center">
							<div class="col-lg-6">
								<h2 class="section-title">Why Choose Us</h2>
								<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>

								<div class="row my-5">
									<div class="col-6 col-md-6">
										<div class="feature">
											<div class="icon">
												<img src="images/truck.svg" alt="Image" class="imf-fluid" />
											</div>
											<h3>Fast &amp; Free Shipping</h3>
											<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
										</div>
									</div>

									<div class="col-6 col-md-6">
										<div class="feature">
											<div class="icon">
												<img src="images/bag.svg" alt="Image" class="imf-fluid" />
											</div>
											<h3>Easy to Shop</h3>
											<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
										</div>
									</div>

									<div class="col-6 col-md-6">
										<div class="feature">
											<div class="icon">
												<img src="images/support.svg" alt="Image" class="imf-fluid" />
											</div>
											<h3>24/7 Support</h3>
											<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
										</div>
									</div>

									<div class="col-6 col-md-6">
										<div class="feature">
											<div class="icon">
												<img src="images/return.svg" alt="Image" class="imf-fluid" />
											</div>
											<h3>Hassle Free Returns</h3>
											<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
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
			</div>
		</div>
	)
}

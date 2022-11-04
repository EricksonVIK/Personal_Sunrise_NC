import React from 'react'
import PhotoSlideshow from '../PhotoSlideshow'

const Home = () => {
	return (
		<>
			<section id="photoGallery">
				<h2 id="photoGalleryTitle">Photo Gallery</h2>
				<div id="photos">
					<PhotoSlideshow />
				</div>
			</section>
			<section id="description">
				<h2>Description</h2>
				<p id="descriptionText">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
					culpa qui officia deserunt mollit anim id est laborum
				</p>
			</section>
			<section id="reviews">
				<h2>Reviews</h2>
				{/* Probably a review component that takes 3 or so random reviews from a list or from the DB */}
				<div className="reviewItem">
					<h3 id="reviewTitle">Great place to stay!</h3>
					<p id="reviewContent">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</p>
					<p id="reviewAuthor">User1</p>
				</div>
				<div className="reviewItem">
					<h3 id="reviewTitle">Great place to stay!</h3>
					<p id="reviewContent">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</p>
					<p id="reviewAuthor">User2</p>
				</div>
				<div className="reviewItem">
					<h3 id="reviewTitle">Great place to stay!</h3>
					<p id="reviewContent">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</p>
					<p id="reviewAuthor">User3</p>
				</div>
			</section>
		</>
	)
}

export default Home

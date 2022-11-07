import React from 'react'
import PhotoSlideshow from '../PhotoSlideshow'
import reviews from '../../assets/reviews/reviews'

const Home = () => {
	return (
		<div id="homePage">
			<section id="photoGallery">
				<h2 id="photoGalleryTitle">Photo Gallery</h2>
				<div id="photos">
					<PhotoSlideshow />
				</div>
			</section>
			<section id="description">
				<h2>Oceanfront townhome walking distance from boardwalk!</h2>
				<p id="descriptionText">
					“Personal Sunrise” is the perfect getaway from the business of life.
					Equipped with 3 smart tv's, full sized washer/dryer, elevator and
					stocked kitchen, this 5BR 3.5 BA townhome is sure to set up for a
					wonderful vacation. Enjoy private boardwalk to the beach where you and
					your loved ones can enjoy playing in the ocean and clean off in the
					outdoor shower. Walking distance to shops, restaurants and lake. Quick
					drive to NC Aquarium and Wilmington. Come enjoy all Carolina Beach has
					to offer!
				</p>
			</section>
			<section id="reviews">
				<h2>Reviews</h2>
				{reviews.map((data, index) => {
					return (
						<div className="reviewItem" key={index}>
							<h3 className="reviewTitle">{data.title}</h3>
							<p className="reviewContent">{data.text}</p>
							<p className="reviewDate">{data.date}</p>
						</div>
					)
				})}
			</section>
		</div>
	)
}

export default Home

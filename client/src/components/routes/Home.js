import React from "react";
import PhotoSlideshow from "../PhotoSlideshow";

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
        <h2>Oceanfront townhome walking distance from boardwalk!</h2>
        <p id="descriptionText">
          “Personal Sunrise” is the perfect getaway from the business of life.
          Equipped with 3 smart tv’s, full sized washer/dryer, elevator and
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
  );
};

export default Home;

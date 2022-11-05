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
        <h2>Description</h2>
        <p id="descriptionText">
          Oceanfront townhome walking distance from boardwalk! Take a quick trip
          to Carolina beach to enjoy this ocean front home. Plenty of rooms and
          beds to accommodate multiple families. 5 bedrooms, 3.5 baths. Walk out
          on your newly renovated boardwalk to play in the sand. Clean off in
          the outdoor shower. Stroll downtown for shops/restaurants and around
          the lake where you can paddle boat. Take a short drive to the NC
          Aquarium. This home has parking on premises, 4 smart TVs, full sized
          washer/dryer, and an elevator. Come back to grill outside and enjoy a
          cocktail on one of the 3 decks.
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

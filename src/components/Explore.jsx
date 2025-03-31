import React from 'react';
import './Explore.css'; // CSS for styling
import flower from '../flower.jpg';
import oldtree from '../oldtree.jpg';
import mountains from '../mountains.jpg';
import wildanimal from '../wildanimal.jpg';
import bigcats from '../bigcats.jpg';
import desert from '../desert.jpg';


function Explore() {
  
  return (
    <div className="explore-nature-container">
      <header className="explore-header">
        <h81>Explore the Wonders of Nature</h81><br/>
        <p11>Discover the beauty of plants, animals, landscapes, and more.</p11>
      </header>

      <section className="explore-plants">
        <h82>Plants & Trees</h82>
        <div className="image-gallery">
          <div className="image-card">
            <img src={oldtree} alt="Tree" />
            <h83>Ancient Trees</h83>
            <p11>Explore the world's oldest and tallest trees.</p11>
          </div>
          <div className="image-card">
            <img src={flower} alt="Flower" />
            <h83>Colorful Flowers</h83>
            <p11>Discover the beauty of vibrant flowers blooming everywhere.</p11>
          </div>
        </div>
      </section>

      <section className="explore-animals">
        <h82>Wildlife & Animals</h82>
        <div className="image-gallery">
          <div className="image-card">
            <img src={wildanimal} alt="Wildlife" />
            <h83>Wild Animals</h83>
            <p11>Learn about wildlife in forests, savannas, and jungles.</p11>
          </div>
          <div className="image-card">
            <img src={bigcats} alt="Lion" />
            <h83>Big Cats</h83>
            <p11>Discover the majesty of lions, tigers, and other big cats.</p11>
          </div>
        </div>
      </section>

      <section className="explore-landscapes">
        <h82>Stunning Landscapes</h82>
        <div className="image-gallery">
          <div className="image-card">
            <img src={mountains} alt="Mountain Landscape" />
            <h83>Majestic Mountains</h83>
            <p11>Climb the highest peaks and enjoy breathtaking views.</p11>
          </div>
          <div className="image-card">
            <img src={desert} alt="Desert Landscape" />
            <h83>Vast Deserts</h83>
            <p11>Experience the solitude and beauty of the world's deserts.</p11>
          </div>
        </div>
      </section>

      
  

      <footer className="explore-footer">
        <p11>Start your nature adventure today. Explore, protect, and preserve.</p11>
      </footer>
    </div>
  );
}

export default Explore;

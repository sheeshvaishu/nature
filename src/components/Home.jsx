import React, { useEffect, useState } from 'react';
import './Home.css';
import Image from '../image.jpg';

const Home = () => {
  const [showNature, setShowNature] = useState(false);

  // Set the showNature state to true after component mounts
  useEffect(() => {
    setShowNature(true);
  }, []);

  return (
    <div>
      <div className="naturepageone">
        <h1 className={`h1 ${showNature ? 'h1-visible' : ''}`}>
          Nature is the physical world around us, including plants, animals, landscapes, and natural phenomena. <br />
          It encompasses ecosystems, biodiversity, and the processes that sustain life. Nature is essential <br />
          for our well-being and inspires art, culture, and spirituality.
        </h1>

        {/* Conditionally add 'nature-visible' class */}
        <div className={`nature ${showNature ? 'nature-visible' : ''}`}>Nature</div>

        <div className="circleone"></div>
        <div className="circletwo"></div>
        <div className="circlethree"></div>
        <div className="circlefour"></div>

        
        <div className="image">
          <img src={Image} height={700} />
        </div>
      </div>
    </div>
  );
}

export default Home;

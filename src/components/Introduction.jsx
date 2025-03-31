import React from 'react';
import './Introduction.css';
import { useNavigate } from 'react-router-dom';

const Introduction = () => {
  const navigate = useNavigate();
  const explore = () => {
    navigate('/Explore', { state: { explore } });
  };
  const community = () => {
    navigate('/Community', { state: { community } });
  };

  return (
    <div className="introduction-page">
      {/* Hero Section */}
      <div className="hero-section">
        <h5>Welcome to Nature's Wonders</h5>
        <p1>
          Explore the beauty of the natural world—plants, animals, landscapes, and more. Let's uncover the secrets of nature together.
        </p1><br/>
        <button className="explore-button" onClick={() => window.location.href = '/explore'}>Start Exploring</button>
      </div>

      {/* About Section */}
      <div className="about-section">
        <h6>About Our Website</h6>
        <p2>
          Nature's Wonders is a platform dedicated to showcasing the splendor and diversity
           of the natural world. From lush forests to exotic wildlife,<br/> discover a world of fascinating information and breathtaking visuals.
        </p2>
      </div>

      {/* Features Section */}
      <div className="features-section">
        <h8>What You'll Find</h8>
        <div className="features-grid">
          <div className="feature">
            <h7>Plants & Trees</h7>
            <p3>Learn about the flora that keeps our planet alive.</p3>
          </div>
          <div className="feature">
            <h7>Animals</h7>
            <p4>Discover amazing creatures and their habitats.</p4>
          </div>
          <div className="feature">
            <h7>Landscapes</h7>
            <p5>Explore breathtaking landscapes from around the globe.</p5>
          </div>
          <div className="feature">
            <h7>Interactive Maps</h7>
            <p6>Find nature spots near you with our interactive maps.</p6>
          </div>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="cta-section">
        <h9>Join Us</h9><br/>
        <p8>
          Be part of the journey to explore and protect the wonders of nature. Together, we can make a difference.
        </p8><br/>
        <button className="join-button" onClick={() => window.location.href = '/community'}>Join the Community</button>
      </div>
    </div>
  );
};

export default Introduction;

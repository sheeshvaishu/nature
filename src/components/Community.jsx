import React, { useState } from 'react';
import './Community.css';

function Community() {
  // State hooks to manage input values
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission (which reloads the page)
    console.log('Form submitted with:');
    console.log('Name:', name);
    console.log('Email:', email);

    // You can add further logic to submit the form or reset fields
    setName('');
    setEmail('');
  };

  return (
    <div>
      <div className='naturepagecom'>
      <h60>Submit Your Information to Join the Community</h60>
      <div className='communitycen'><div className="info-form">
          
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="input-field"
              placeholder="Name..."
              value={name}
              onChange={(e) => setName(e.target.value)} // Update name state
              required
            />
            <input
              type="email"
              className="input-field"
              placeholder="Email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Update email state
              required
            />
            <button type="submit" className="submit-button">Submit</button>
          </form>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Community;

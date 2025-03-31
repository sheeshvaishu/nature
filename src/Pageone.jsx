import React from 'react'
import Image from './download.jpeg';
import {FaBars,FaTimes} from "react-icons/fa";
import { useRef } from 'react';
export default function Pageone() {
  const navRef = useRef();
  const showNavbar=()=>{
    navRef.current.classList.toggle("responsive_nav");
  }
  return (
 <><div>
     <div className="naturepageone">
     <header>
<nav ref={navRef}>
  <ul>
  <a href="/#">Home</a>
  <a href="Form.jsx">Rules</a>
  <a href="/#">Introduction</a>
  <a href="/#">Details</a></ul>
  <button className="nav-btn nav-close-btn" onClick={showNavbar}>
<faTimes/>
  </button>
</nav>
<button className="nav-btn" onClick={showNavbar}>
  <FaBars/>
</button>
    </header>
      <div className="nature">Nature</div> 
    <div className="circleone"></div>
    <div className="circletwo"></div>
    <div className="circlethree"></div>
    <div className="circlefour"></div>
    <div className="student">
    <form action="">
      <input type="text" className="border1" placeholder="Name..."></input>  <br/>
      <input type="number" className="border2" placeholder="Student Number..."></input>  
    </form>
  </div>
    </div> 

    <div className="image">
        <img src={Image} height={700} />
      </div>

      <div className="naturepagetwo">
        
       <h2> Things<br/> we can do to <br/>Protect our<br/> Nature</h2>
       
      <div className="divg">
      <div className="rec1">
        <div className="h4">Reduce, reuse and recycle.</div>
        <p>Cut down on what you throw away. Follow the three "R's" to conserve natural resources and landfill space.</p>
      </div>
      <div className="rec2">
      <div className="h4">Volunteer.</div>
      <p>Volunteer for cleanups in your community. You can get involved in protecting your watershed, too.</p>
      </div>
      <div className="rec3">
      <div className="h4">Educate.</div>
      <p> When you further your own education, you can help others understand the importance and value of our natural resources.</p>
      </div>
      <div className="rec4"><div className="h4">Conserve water.</div>
      <p>The less water you use, the less runoff and wastewater that eventually end up in the ocean.</p>
      </div>
      <div className="rec5"><div className="h4">Shop wisely.</div>
        <p> Buy less plastic and bring a reusable shopping bag.</p>
        </div>
      <div className="rec6"><div className="h4">Use long-lasting light bulbs.</div>
      <p> Energy efficient light bulbs reduce greenhouse gas emissions. Also flip the light switch off when you leave the room!</p>
      </div>
      <div className="rec7"><div className="h4">Plant a tree.</div>
      <p>Trees provide food and oxygen. They help save energy, clean the air, and help combat climate change.</p>
      </div>
      <div className="rec8"><div className="h4">Don't send chemicals into our waterways.</div>
      <p>Choose non-toxic chemicals in the home and office.</p>
      </div>
      </div>
    </div>
    
    <div className="naturepagethree">
     <h3> What is Nature</h3>
    <marquee >hi</marquee>
    </div>
    <div className="naturepagefour">
      
    </div>

    </div></>
  )
}

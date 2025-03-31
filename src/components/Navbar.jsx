import React from 'react'
import { Link } from 'react-router-dom';


const Navbar = () => {
 
  return (
    <div>
     <div className="naturee">
     <nav>
      <Link to="/"> <li>Home</li></Link> 
      <Link to="/introduction"><li>Introduction</li></Link> 
      <Link to="/details"><li>Details</li></Link>
     
  

</nav>
  
</div>
    
      </div>
    
  )
}

export default Navbar

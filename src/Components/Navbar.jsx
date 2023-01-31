import React from 'react'
import { Link } from 'react-router-dom'
import "../App.css"
const Navbar = () => {
  return (
    <div className='box'>
      <nav   >
       
         <ul className='nav' >
           <h4><li> <Link to='/'>Home</Link> </li> </h4>
           <h4><li> <Link to='/student'>Studnet</Link> </li> </h4>
           <h4><li> <Link to='/contactus'>Contactus</Link> </li> </h4>
         </ul>
      
     </nav>

    </div>
  )
}

export default Navbar
  
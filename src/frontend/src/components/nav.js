import React, { useState, useEffect } from 'react';
import Figure from 'react-bootstrap/Figure';
import { Link } from 'react-router-dom';



function Navbar() {
  
  return (
   <div>
    <Link to="/"><Figure>
      <Figure.Image
        width={171}
        height={180}
        alt="171x180"
        src="./icon.png"
      />
    </Figure></Link>
    <Link to="/">Cadastre-se</Link>
    <Link to="/">Login</Link>


   </div>
  );
}

export default Navbar;
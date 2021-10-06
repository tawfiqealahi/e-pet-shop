import React from 'react';
import Cart from '../Cart/Cart';

const Header = (props) => {

    return (
      
<div  className="navbar d-block   navbar-expand-lg navbar-dark bg-dark"  >
<a  className="navbar-brand" href="#"><h1  style={{"margin-left":"40%"}}  >E-Pet Shop</h1></a>
<h2 style={{"margin-left":"40%", "margin-top":"-35px"}} className="navbar-brand">Total Budget: $100000</h2>
  <form  className="d-flex w-50 mx-auto" >
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-warning" type="submit">Search</button>
    </form>
</div>

      

    );
};




export default Header;
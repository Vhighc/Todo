import React from 'react'
// import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import "./Navbar.css"

const Navbar = () => {
  // const Navbar = (props) => {
  // let className = props.nav ? 'nav' : ""


  return (
    <div className='nav'>
      {/* <div className={className}> */}
    <div className="logo">
      <img src="./Images/CandLeafLogo1.svg" alt="logo" />
      <img src="./Images/NavWordmarkLogo1.svg" alt="candleaf" />
    </div>
    <div className="clicklinks">
    <select>
      <option value="Discovery">Discovery</option>
    </select>
    <a href="/">Contact us</a>
    <a href="/Auth">About</a>
    </div>
    <div className="navicons">
    {/* <Link to="/"> */}
      <div className='buttconts'>
        <button>
          <img src="./Images/NavProfileIcon1.svg" alt="profile icon" />
        </button>
      </div>
    {/* </Link> */}
    {/* <Link to="/cart"> */}
      <div className='buttconts'>
        <button>
          <img src="./Images/NavCartIcon1.svg" alt="cart icon" />
        </button>
      </div>
    {/* </Link> */}
    </div>
  </div>
  )
}

export default Navbar;


import './navbar.scss';
import logo from '../../assets/LogoWhite.svg';
import search from '../../assets/icons/Search.svg';
import microphone from '../../assets/icons/Microphone.svg';
import cart from '../../assets/icons/Cart.svg';
import profile from '../../assets/icons/Profile.svg';
import favorite from '../../assets/icons/Heart.svg';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';


const Navbar = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    let previousScrollPosition = 0;
    let currentScrollPosition = 0;

    window.addEventListener('scroll', function (e) {

      // Get the new Value
      currentScrollPosition = window.scrollY;

      //Subtract the two and conclude
      if (previousScrollPosition - currentScrollPosition < 0) {
        setShow(false);
      } else if (previousScrollPosition - currentScrollPosition > 0) {
        setShow(true);
      }

      // Update the previous value
      previousScrollPosition = currentScrollPosition;
    });
  }, []);

  return (
    <nav className={`navBar ${show && 'visible'}`}>
      <div className='top'>
        <Link to="/" className='logo'>
          <img src={logo} alt="" className='logo' />
        </Link>
        <div>
          <div className="searchBar">
            <img src={search} alt="" />
            <input type="text" placeholder='Search for Products' />
            <button className='voiceSearch'>
              <img src={microphone} alt="" />
            </button>
          </div>
          <div className="links">
            <Link to="/favorites">
              <img src={favorite} alt="" />
              <p>Favorite</p>
            </Link>
            <Link to="/profile">
              <img src={profile} alt="" />
              <p>Profile</p>
            </Link>
            <Link to="/cart">
              <img src={cart} alt="" />
              <p>Cart</p>
            </Link>
          </div>
        </div>
      </div>
      <div className='bottom'>
        <div className="left">
          <Link to="/products/men">Men</Link>
          <Link to="/products/women">Women</Link>
          <Link to="/products/footwear">Footwear</Link>
          <Link to="/products/Accessories">Accessories</Link>
          <Link to="/products/best-sellers">Best Sellers</Link>
        </div>
        <div className="right">
          <Link to="/help-and-support">Help & Support</Link>
          <button>Gift</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;

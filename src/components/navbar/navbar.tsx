import './navbar.scss';
import logo from '../../assets/LogoWhite.svg';
import search from '../../assets/icons/Search.svg';
import microphone from '../../assets/icons/Microphone.svg';
import cart from '../../assets/icons/Cart.svg';
import profile from '../../assets/icons/Profile.svg';
import favorite from '../../assets/icons/Heart.svg';
import { Link } from 'react-router-dom';
import { useContext, useEffect, useRef, useState } from 'react';
import CartContext from '../../contexts/cartContext';
import NavContext from '../../contexts/navContext';


const Navbar = () => {
  const [show, setShow] = useState(true);
  const { itemCount } = useContext(CartContext);

  useEffect(() => {
    let previousScrollPosition = 0;
    let currentScrollPosition = 0;

    window.addEventListener('scroll', function (e) {

      currentScrollPosition = window.scrollY;

      if (previousScrollPosition - currentScrollPosition < 0) {
        setShow(false);
      } else if (previousScrollPosition - currentScrollPosition > 0) {
        setShow(true);
      }

      previousScrollPosition = currentScrollPosition;
    });
  }, []);

  const myRef = useRef<HTMLDivElement | null>(null);
  const { setNavPos } = useContext(NavContext);

  useEffect(() => {
    const updatePosition = () => {
      if (myRef.current) {
        const rect = myRef.current.getBoundingClientRect();
        const curPos = Math.round(rect.top);
        setNavPos(curPos);
      }
    };

    window.addEventListener('resize', updatePosition);
    window.addEventListener('scroll', updatePosition);

    updatePosition();

    return () => {
      window.removeEventListener('resize', updatePosition);
      window.removeEventListener('scroll', updatePosition);
    };
  }, []);

  return (
    <nav className={`navBar ${show && 'visible'}`} ref={myRef}>
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
              <div className="cartBtn">
                <img src={cart} alt="" />
                <span className="count">{itemCount}</span>
              </div>
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

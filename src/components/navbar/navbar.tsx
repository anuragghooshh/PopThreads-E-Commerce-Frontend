import './navbar.scss';
import logo from '../../assets/LogoWhite.svg';
import search from '../../assets/icons/Search.svg';
import search2 from '../../assets/icons/Search(Light).svg';
import microphone from '../../assets/icons/Microphone.svg';
import cart from '../../assets/icons/Cart.svg';
import profile from '../../assets/icons/Profile.svg';
import favorite from '../../assets/icons/Heart.svg';
import { Link } from 'react-router-dom';
import { useContext, useEffect, useRef, useState } from 'react';
import CartContext from '../../contexts/cartContext';
import NavContext from '../../contexts/navContext';
import ham from "../../assets/icons/ham.svg";
import Underline from '../underline/underline';


const Navbar = () => {
  const [show, setShow] = useState<boolean>(true);
  const { itemCount } = useContext(CartContext);
  const [sidebar, setSideBar] = useState<boolean>(false);
  const [searchBar, setSearchBar] = useState<boolean>(false);

  useEffect(() => {
    let previousScrollPosition = 0;
    let currentScrollPosition = 0;

    window.addEventListener('scroll', () => {

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

  const toggleSideBar = () => {
    setSideBar(!sidebar);
  }

  const toggleSearchBar = () =>{
    setSearchBar(!searchBar);
  }

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
          <div className="buttons">
            <button id='searchBtn' onClick={toggleSearchBar}>
              <img src={search2} alt="" />
              <p>Search</p>
            </button>
            <button id='ham' onClick={toggleSideBar}>
              <img src={ham} alt="" />
            </button>
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
      <div className={`sideNav ${sidebar && 'active'}`}>
        <div className="sideNavTop">
          <div>
            <Link to="/products/men">Men</Link>
            <Link to="/products/women">Women</Link>
            <Link to="/products/footwear">Footwear</Link>
            <Link to="/products/Accessories">Accessories</Link>
            <Link to="/products/best-sellers">Best Sellers</Link>
          </div>
          <Underline color='Light' />
          <div>
            <Link to="/help-and-support">Help & Support</Link>
            <button>Gift</button>
          </div>
        </div>
        <div className="sideNavBottom">
          <button>Log In/Log Out</button>
        </div>
      </div>
      <div className={`searchBar ${searchBar && "active"}`}>
        <img src={search} alt="" />
        <input type="text" placeholder='Search for Products' />
        <button className='voiceSearch'>
          <img src={microphone} alt="" />
        </button>
      </div>
    </nav>
  )
}

export default Navbar;

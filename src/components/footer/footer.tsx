import './footer.scss';

import logo from '../../assets/LogoColour.svg';
import instagram from '../../assets/icons/Instagram(Color).svg';
import facebook from '../../assets/icons/Facebook(Color).svg';

import gpay from '../../assets/icons/gpay.svg';
import paypal from '../../assets/icons/PayPal.svg';
import upi from '../../assets/icons/upi.svg';
import visa from '../../assets/icons/visa.svg';


const Footer = () => {
  return (
    <footer className='footer'>
        <div>
            <div className="left">
                <img src={logo} alt="" />
                <div>
                    <img src={instagram} alt="" />
                    <img src={facebook} alt="" />
                </div>
            </div>
            <div className="right">
                <div className="top">
                    <div className="pageList">
                        <h3>Page Type</h3>
                        <div className="pages">
                            <a href="" className='small'>Page</a>
                            <a href="" className='small'>Page</a>
                            <a href="" className='small'>Page</a>
                            <a href="" className='small'>Page</a>
                            <a href="" className='small'>Page</a>
                        </div>
                    </div>
                    <div className="pageList">
                        <h3>Page Type</h3>
                        <div className="pages">
                            <a href="" className='small'>Page</a>
                            <a href="" className='small'>Page</a>
                            <a href="" className='small'>Page</a>
                            <a href="" className='small'>Page</a>
                            <a href="" className='small'>Page</a>
                        </div>
                    </div>
                    <div className="pageList">
                        <h3>Page Type</h3>
                        <div className="pages">
                            <a href="" className='small'>Page</a>
                            <a href="" className='small'>Page</a>
                            <a href="" className='small'>Page</a>
                            <a href="" className='small'>Page</a>
                            <a href="" className='small'>Page</a>
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <img src={gpay} alt="" />
                    <img src={visa} alt="" />
                    <img src={paypal} alt="" />
                    <img src={upi} alt="" />
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer

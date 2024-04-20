import './cartItem.scss';
import close from '../../assets/icons/Cross.svg'
import CartDropdown from '../cartDropdown/cartDropdown';

const CartItem = () => {
  return (
    <div className='cartItem'>
      <div className="">
        <div className="imgChck">
          <input type="checkbox" name="" id="" />
          <div className="gradient"/>
          <div 
            className="thumbnail"
            style={{
              backgroundImage:`url('https://cdn.pixabay.com/photo/2016/07/07/16/46/dice-1502706_640.jpg')`
            }}
          />
        </div>
        <div className="flexbox">
          <div className="top">
            <h4>Product Name</h4>
            <div>
              <p className="actlPrice">Rs.XXX</p>
              <p className="discntPrice">Rs.XXX</p>
              <div className="discnt">
                <p>%Off</p>
              </div>
            </div>
          </div>
          <div className="bottom">
            <CartDropdown
              buttonText='Size'
              options={["XXL","XL","XL","L"]}
            />
            <CartDropdown
              buttonText='Size'
              options={["XXL","XL","XL","L"]}
            />
            <CartDropdown
              buttonText='Size'
              options={["XXL","XL","XL","L"]}
            />
          </div>
        </div>
      </div>
      <button className='close'>
        <img src={close} alt="" />
      </button>
    </div>
  )
}

export default CartItem;

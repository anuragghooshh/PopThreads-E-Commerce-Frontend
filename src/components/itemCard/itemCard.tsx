import './itemCard.scss'

import star from '../../assets/icons/RatingStar.svg';
import heart from '../../assets/icons/heartFilled.svg';
import close from '../../assets/icons/Cross.svg';
import Button from '../button/button';
import { useContext } from 'react';
import CartContext from '../../contexts/cartContext';

interface Props {
  prodName: string,
  prodPrice: number,
  prodActPrice: number,
  prodRating: number,
  prodReviews: number,
  colors: string[],
  sizes: string[],
  type: string
}

const ItemCard = (props: Props) => {
  let { items, setItems, setItemCount } = useContext(CartContext);

  const addToCart = () => {
    const updatedItems = [...items, "productID"];
    setItems(updatedItems);
    setItemCount(items.length + 1);
  }

  return (
    <div className='itemCard'>
      <div className="imagery">
        <div className="above">
          <div className="first">
            <div className="top">
              <div className="label">
                <p>Featured</p>
              </div>
              {
                props.type == 'default' ?
                  <button className='itemBtn'>
                    <img src={heart} alt="" />
                  </button> :
                  <button className='itemBtn'>
                    <img src={close} alt="" />
                  </button>
              }
            </div>
            <div>
              <div className="bottom">
                <div className="rating">
                  <img src={star} alt="" />
                  <p>{props.prodRating} | {props.prodReviews}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="last">
            <Button
              type='filled'
              text='Buy now'
              color='light'
            />
            <Button
              type='filled'
              text='Add to Cart'
              color='dark'
              onClick={addToCart}
            />
          </div>
        </div>
        <div className="images">

        </div>
      </div>
      <div className="details">
        <h3>{props.prodName}</h3>
        <div className="bottom">
          <div className="sizeColors">
            <div className="colors">
              {props.colors.map((color, index) => (
                <div className='color' key={index} style={{ backgroundColor: color }} />
              ))}
            </div>
            <div className="sizes">
              {props.sizes.map((size, index) => (
                <p className='size' key={index}>{size}</p>
              ))}
            </div>
          </div>
          <div className="price">
            <p>Rs.{props.prodActPrice}</p>
            <p>Rs.{props.prodPrice}</p>
          </div>
        </div>
      </div>
      <div className="hiddenBtnsContainer">
        <Button
          type='stroked'
          text='Buy now'
          color='dark'
        />
        <Button
          type='filled'
          text='Add to Cart'
          color='dark'
          onClick={addToCart}
        />
      </div>
    </div>
  )
}

export default ItemCard;

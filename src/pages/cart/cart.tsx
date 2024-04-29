import { useContext, useEffect, useState } from 'react'
import Button from '../../components/button/button'
import InputAndButton from '../../components/inputAndButton/inputAndButton'
import ItemCard from '../../components/itemCard/itemCard'
import SpecialItems from '../../components/specialtems/specialItems'
import './cart.scss'
import CartContext from '../../contexts/cartContext'
import CartItem from '../../components/cartItem/cartItem'
import NavContext from '../../contexts/navContext'

const Cart = () => {
  const { navPos } = useContext(NavContext);
  const { items } = useContext(CartContext);

  const [top, setTop] = useState(0);

  useEffect(()=>{
    setTop(navPos);
  },[navPos]);

  return (
    <div className='page' id='cart'>
      <div className="section">
        <div className="cartControls">
          <h2>Your Cart</h2>
          <div>
            <p>{0} / {0} Selected Items</p>
            <div>
              <Button
                type='underlined'
                color='dark'
                text='Move to Favorites'
              />
              <Button
                type='underlined'
                color='dark'
                text='Clear'
              />
            </div>
          </div>
        </div>
        <div className="flexbox">
          <div className="left">
            {items.map((item, index) => (
              <CartItem
                key={index}
                prodName={item}
                prodPrice={5000}
                prodActPrice={7000}
                prodRating={5}
                prodReviews={14}
                type='men'
                colors={["Red","Blue","Yellow"]}
                sizes={["L","M","XL"]}
              />
            ))}
          </div>
          <div className="right">
            <div className="addressPreview">
              <div>
                <div>
                  <p>Delivering to</p>
                  <div>
                    <h4>John Doe</h4>
                    <p>xxx-xxx</p>
                  </div>
                </div>
                <p>Torem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <Button
                type='stroked'
                text='Change Address'
                color='dark'
              />
            </div>

            <div className="promoCode">
              <p>Enter promo code</p>
              <InputAndButton
                btnText='Apply'
              />
            </div>

            <div className={`breakup ${top >= -20 ? 'adjust' : ''}`}>
              <p>Price Details (1 item)</p>
              <table>
                <tr>
                  <th>Total MRP</th>
                  <td>Rs.2000</td>
                </tr>
                <tr>
                  <th>Discount</th>
                  <td>Rs.500</td>
                </tr>
                <tr>
                  <th>Total Amount</th>
                  <td>Rs.1500</td>
                </tr>
              </table>
              <Button
                text='Proceed to Checkout'
                type='filled'
                color='dark'
              />
            </div>
          </div>
        </div>
      </div>
      <section className='section'>
        <SpecialItems
          title="Similar Products"
          items={[
            <ItemCard
              prodName='Product Name'
              prodActPrice={2000}
              prodPrice={1500}
              prodRating={4}
              prodReviews={1000}
              colors={["#861E35", "#CED71D", "#6C9AD3"]}
              sizes={["S", "M", "L"]}
              type='default'
            />,
            <ItemCard
              prodName='Product Name'
              prodActPrice={2000}
              prodPrice={1500}
              prodRating={4}
              prodReviews={1000}
              colors={["#861E35", "#CED71D", "#6C9AD3"]}
              sizes={["S", "M", "L"]}
              type='default'
            />,
            <ItemCard
              prodName='Product Name'
              prodActPrice={2000}
              prodPrice={1500}
              prodRating={4}
              prodReviews={1000}
              colors={["#861E35", "#CED71D", "#6C9AD3"]}
              sizes={["S", "M", "L"]}
              type='default'
            />,
            <ItemCard
              prodName='Product Name'
              prodActPrice={2000}
              prodPrice={1500}
              prodRating={4}
              prodReviews={1000}
              colors={["#861E35", "#CED71D", "#6C9AD3"]}
              sizes={["S", "M", "L"]}
              type='default'
            />
          ]}
        />
      </section>
    </div>
  )
}

export default Cart

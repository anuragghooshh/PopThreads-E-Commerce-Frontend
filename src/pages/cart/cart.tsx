import Button from '../../components/button/button'
import './cart.scss'

const Cart = () => {
  return (
    <div className='page'>
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

        </div>
      </div>
    </div>
  )
}

export default Cart

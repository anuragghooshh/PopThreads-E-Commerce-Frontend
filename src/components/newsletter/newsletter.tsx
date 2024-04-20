import InputAndButton from '../inputAndButton/inputAndButton';

import './newsletter.scss';

import newsLetterImg from '../../assets/images/newsletter.jpg';

const Newsletter = () => {
  return (
    <section className="section newsletter">
      <div>
        <div className="left">
          <h2>Join the table</h2>
          <p className='small'>Subscribe to our newsletter to stay updated to the latest fashion trends.</p>
          <InputAndButton btnText='Subscribe' />
        </div>
        <div className="right" style={{ backgroundImage: `url('${newsLetterImg}')` }}></div>
      </div>
    </section>
  )
}

export default Newsletter

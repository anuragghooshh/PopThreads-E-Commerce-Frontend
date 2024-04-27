import Faq from '../../components/faq/faq';
import instagram from '../../assets/icons/Instagram.svg'
import facebook from '../../assets/icons/Facebook.svg'
import './helpAndSupport.scss'

const HelpAndSupport = () => {
  return (
    <div className='page' id='help-and-support'>
      <section className="section" id='help-and-support-intro'>
        <h2>Help & Support</h2>
        <p>
          Our dedicated team is here to assist you with any questions or concerns you may have. Whether you need help with placing an order, navigating our website, finding the perfect fit, or managing your account, we're here to help every step of the way. Explore our comprehensive FAQs for quick answers, or reach out to our friendly customer support team for personalized assistance. Your satisfaction is our top priority, and we're committed to providing you with an exceptional shopping experience. Thank you for choosing PopThreads!
        </p>
      </section>
      <section className="section">
        <h3>FAQs</h3>
        <div className="faqs">
          <Faq
            question='What types of clothing do you sell?'
            answer='Lorem Ipsum blah blah blah'
          />
          <Faq
            question='What types of clothing do you sell?'
            answer='Lorem Ipsum blah blah blah'
          />
          <Faq
            question='What types of clothing do you sell?'
            answer='Lorem Ipsum blah blah blah'
          />
        </div>
      </section>
      <section className="section" id='contact'>
        <h3>Contact Us</h3>
        <div className='mail'>
          <p>Reach us with your issue here</p>
          <a href="">xyz@gmail.com</a>
        </div>
        <div className='socials'>
          <a href="">
            <img src={instagram} alt="" />
            <p>Instagram</p>
          </a>
          <a href="">
            <img src={facebook} alt="" />
            <p>Facebook</p>
          </a>
        </div>
      </section>
    </div>
  )
}

export default HelpAndSupport;
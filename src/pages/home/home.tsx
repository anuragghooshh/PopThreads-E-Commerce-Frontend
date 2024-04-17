import Button from '../../components/button/button';
import ItemCard from '../../components/itemCard/itemCard';
import Newsletter from '../../components/newsletter/newsletter';

import home2_1 from '../../assets/images/hero2 (1).jpg';
import home2_2 from '../../assets/images/hero2 (2).jpg';
import home2_3 from '../../assets/images/hero2 (3).jpg';
import home2_4 from '../../assets/images/hero2 (4).jpg';

import home3_1 from '../../assets/images/hero1 (1).jpg';
import home3_2 from '../../assets/images/hero1 (2).jpg';
import home3_3 from '../../assets/images/hero1 (3).jpg';


import './home.scss';

const Home = () => {

  return (
    <div className='page' id='home'>
      <section className='section' id='hero'>
        <div>
          <h1>Welcome to the One Stop,  your go-to-place for all things Fashion!</h1>
          <Button type='stroked' color='light' text='Shop the Collection' />
        </div>
      </section>
      <section className="section" id='newArrival'>
        <h2>Explore the newest arrivals</h2>
        <div className="itemsHolder">
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

        </div>
      </section>
      <section className='section' id='home2'>
        <p>Crafted with Care: Our clothes<br />Reflect Quality, Style and Passion.</p>
        <div>
          <div>
            <div style={{ backgroundImage: `url('${home2_1}')`}} />
            <div style={{ backgroundImage: `url('${home2_2}')`}}/>
          </div>
          <div>
          <div style={{ backgroundImage: `url('${home2_3}')`}} />
            <div style={{ backgroundImage: `url('${home2_4}')`}}/>
          </div>
        </div>
      </section>
      <section className="section" id="home3">
        <div style={{ backgroundImage: `url('${home3_1}')`}}/>
        <div style={{ backgroundImage: `url('${home3_2}')`}}/>
        <div style={{ backgroundImage: `url('${home3_3}')`}}/>
      </section>
    </div>
  );
}

export default Home;

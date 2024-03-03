import React from 'react';
import { Link } from 'react-router-dom';
import foodImage from './images/food.jpg';
import saladImage from './images/salad.jpg';
import bruchettaImage from './images/bruchetta.jpg';
import pastaImage from './images/pasts.jpg';

function Main() {
  return (
    <main className="main">
      <section className="restaurant-info">
        <div className="restaurant-details">
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>We are a family owned Mediterranean restaurant, Located at Maldove Street in Chicago, Illinois. We focus on traditional recipes served with a modern twist.</p>
          <Link to="/reservations" className="reserve-button">Reserve a Table</Link>
        </div>
        <div className="restaurant-image">
          <img src={foodImage} alt="Restaurant food" />
        </div>
      </section>
      <section className="weekly-specials">
        <h2 className="specials-title">This Week's Specials!</h2>
        <button className="online-menu-button">Online Menu</button>
        <div className="specials-container">
          <div className="special-card">
            <img src={saladImage} alt="Greek Salad" />
            <div>
              <h3>Greek Salad <span className="price">$12.99</span></h3>
              <p>The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
              <button className="order-button">Order Delivery</button>
            </div>
          </div>
          <div className="special-card">
            <img src={bruchettaImage} alt="Bruchetta" />
            <div>
              <h3>Bruchetta <span className="price">$5.99</span></h3>
              <p>Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Perfect for starting your meal on a high note</p>
              <button className="order-button">Order Delivery</button>
            </div>
          </div>
          <div className="special-card">
            <img src={pastaImage} alt="Mediterranean Pasta" />
            <div>
              <h3>Mediterranean Pasta <span className="price">$8.99</span></h3>
              <p>Al dente pasta combined with sun-kissed tomatoes and a spicy kick of chili, all enhanced with aromatic herbs and a garlic-infused olive oil sauce.</p>
              <button className="order-button">Order Delivery</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;

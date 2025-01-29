import React from "react";
import "../Home.css";

export const Home = () => {
  return (
    <div>
      <div id="hero">
        <video autoPlay muted loop>
          <source src="/src/assets/hero.mp4" type="video/mp4" />
        </video>
        <div className="hero-text">
          <h1>Sparkle with Love, Shine with Passion</h1>
          <p>
            From dazzling jewelry to exquisite accessories, our collection is
            designed to capture the magic of romance and timeless elegance.
          </p>
          <button className="shop">SHOP COLLECTION</button>
        </div>
      </div>
      <div className="decor">
        <div className="decor-text">

          <h2>Celebrate Love in Every Sparkle</h2>
          <a href="../html/shop.html">
            <button className="shop">SHOP COLLECTION</button>
          </a>
        </div>
      </div>
      <div className="home-p" id="home-p1">
        This Valentine’s Day, express your affection with timeless treasures
        that speak from the heart. From radiant jewelry to dazzling accessories,
        Enamoré helps you make every moment unforgettable.
      </div>

      <div className="home-p">
        <h1>Discover Our Valentine’s Exclusives</h1>
        <p>
          Romantic Jewelry – Elegant necklaces, bracelets, and rings to
          symbolize your love.
        </p>
        <p>
          Couple’s Collection – Matching pieces to celebrate your unique bond.
        </p>
        <p>Eternal Gifts – Thoughtful keepsakes that last beyond the season.</p>
      </div>
    </div>
  );
};

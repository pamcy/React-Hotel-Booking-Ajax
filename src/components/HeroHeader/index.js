import React from 'react';

const slideImages = [
  'https://images.unsplash.com/photo-1519974719765-e6559eac2575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=70',
  'https://images.unsplash.com/photo-1533759413974-9e15f3b745ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=70',
  'https://images.unsplash.com/photo-1501876725168-00c445821c9e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=70',
];

const HeroHeader = () => (
  <header className="main__hero">
    <div className="hero__info">
      <div className="hero__info-wrapper">
        <img src="/images/hero-logo_white.svg" alt="White space" className="hero__info-logo" />
        <div className="hero__info-content">
          <div className="hero__info-left">
            <img
              src="/images/hero-instagram-brands.svg"
              alt="White space's instagram"
              className="hero__info-social-icon"
            />
            <img
              src="/images/hero-facebook-square-brands.svg"
              alt="White space's facebook"
              className="hero__info-social-icon"
            />
          </div>
          <div className="hero__info-right">
            <div className="hero__info-item">
              <img
                src="/images/hero-phone-alt-solid.svg"
                alt="tel"
                className="hero__info-contact-icon"
              />
              <span className="hero__info-text">+49 (0) 271/740-5120</span>
            </div>
            <div className="hero__info-item">
              <img
                src="/images/hero-envelope-solid.svg"
                alt="email"
                className="hero__info-contact-icon"
              />
              <span className="hero__info-text">contact@whitespace.com</span>
            </div>
            <div className="hero__info-item">
              <img
                src="/images/hero-home-solid.svg"
                alt="address"
                className="hero__info-contact-icon"
              />
              <span className="hero__info-text">Talblick 268, Siegen</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="hero__slides">
      {slideImages.map((img, i) => (
        <div key={i} className="hero__slide" style={{ backgroundImage: `url(${img})` }} />
      ))}
    </div>
  </header>
);

export default HeroHeader;

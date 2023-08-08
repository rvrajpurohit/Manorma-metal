import React, {useState, useEffect} from "react";
import "./Home.css"; 
import metalProducts from "../../api/Api.json";


const Home = () => {

  

  return (
    <div className="home-page">
      <header className="header">
        <nav>
          <h1>Metal Supplier</h1>
          {/* Add navigation links here */}
        </nav>
      </header>

      <section className="hero">
        <div className="hero__content">
          {/* Add a call-to-action button here */}
        </div>
      </section>

      {/* Services or Products Section */}
      <section className="services">
        <h2>WELCOME TO MANORMA METAL</h2>
        <p>
          Founded in the year <b>2020</b>, We <b>"Manorma Metal"</b> are a leading <b>Wholesaler,
          Trader and Importer qualitative array of Stainless Steel Perforated
          Sheet, SS Pipes & Tube, Stainless Steel Bar, SS Sheet & Plate, SS
          Mosquito Net</b> and many more. We are a <b>Sole Proprietorship</b> organization
          that is located at <b>Rakhial, Ahmedabad (Gujarat, India)</b> and provides these
          flanges and fittings in large quantity with the help of our well
          functional infrastructural unit. Under the headship of our <b>CEO "Mr.
          Ravi A Sen"</b>, We have gained tremendous success in the national
          market.
        </p>
        <a href="/about">
          <button className="bttn">READ MORE</button></a>
      </section>
      <section className="contact">
        <h2>OUR PRODUCTS</h2>
        <div className="product-images">
          {metalProducts.map((images, index) => (
            <div key={index} className="product-item">
              <img src={images.image} alt={images.name} />
              <p>{images.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">{/* Add footer content here */}</footer>
    </div>
  );
};

export default Home;

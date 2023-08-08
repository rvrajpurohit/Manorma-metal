import React, { useState, useEffect } from "react";
import metalProducts from "../../api/Api.json";
import "./Product.css";

function Products() {
  const storedActiveProduct = localStorage.getItem("activeProduct");
  const [activeProduct, setActiveProduct] = useState(
    storedActiveProduct ? parseInt(storedActiveProduct, 10) : null
  );

  const handleClick = (productId) => {
    setActiveProduct(productId === activeProduct ? null : productId);
  };

  useEffect(() => {
    if (activeProduct !== null) {
      localStorage.setItem("activeProduct", activeProduct);
    } else {
      localStorage.removeItem("activeProduct");
    }
  }, [activeProduct]);

  return (
    <div className="products">
      <h1>
        <b>Metal Products</b>
      </h1>
      <div className="product-page">
        <div className="sidebar">
          <nav className="menu">
            <ul>
              {metalProducts.map((product) => (
                <li key={product.id}>
                  <a 
                    href={`#product${product.id}`}
                    onClick={() => handleClick(product.id)}
                    className={activeProduct === product.id ? "active" : ""}
                  >
                    {product.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          {/* Contact widget */}
        </div>
        <div className="product-list">
          {metalProducts.map((product) => (
            <div
              key={product.id}
              className={`product ${ activeProduct === product.id ? "active" : "" }`}
              id={`product${product.id}`}
            >
              <img
                src={product.image}
                alt={product.name}
                style={{ maxWidth: "350px", maxHeight: "250px" }}
              />
              <h2>{product.name}</h2>
              <p>{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;

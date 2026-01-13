import { useState } from "react";
import productsData from "../ProductData";
import { useCart } from "../Context/CartContext";
import { Link } from "react-router-dom";

const categories = [
  "All",
  "Headphones",
  "Earbuds",
  "Earphones",
  "Neckbands",
];

export const TopProducts = () => {
  const [active, setActive] = useState("All");
  const { addToCart, cartItems } = useCart();

  const filteredProducts =
    active === "All"
      ? productsData
      : productsData.filter((p) => p.category === active);

  return (
    <div className="top-products">
      <h3 className="section-title">Top Products</h3>

      {/* CATEGORY TABS */}
      <div className="category-tabs">
        {categories.map((cat) => (
          <button
            key={cat}
            className={active === cat ? "active" : ""}
            onClick={() => setActive(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* PRODUCTS GRID */}
      <div className="products-grid">
        {filteredProducts.map((product) => {
          const isAdded = cartItems.some(
            (item) => item.id === product.id
          );

          return (
            <div className="product-card" key={product.id}>
              <img
                src={product.images[0]}
                alt={product.title}
              />

              <h4>{product.title}</h4>
              <p className="info">{product.info}</p>

              <div className="rating">
                {"★".repeat(product.rateCount)}
              </div>

              <p className="price">
                ₹{product.finalPrice.toLocaleString()}
                <span>
                  ₹{product.originalPrice.toLocaleString()}
                </span>
              </p>

              <button
                className={`add-cart ${isAdded ? "added" : ""}`}
                onClick={() => addToCart(product)}
                disabled={isAdded}
              >
                {isAdded ? "Added to Cart" : "Add to Cart"}
              </button>
            </div>
          );
        })}

        {/*  BROWSE ALL CARD */}
        {active !== "All" && (
  <Link to="/productcard" className="browse-link">
    <div className="product-card browse-card">
      <div className="browse-content">
        <h4>Browse All</h4>
        <p>Products →</p>
      </div>
    </div>
  </Link>
)}

     
      
      </div>
    </div>
  );
};
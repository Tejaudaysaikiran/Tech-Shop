import { useState } from "react";
import productsData from "../ProductData";
import { useCart } from "../Context/CartContext";

const categories = [
  "All",
  "Headphones",
  "Earbuds",
  "Earphones",
  "Neckbands",
];

export const ProductCard= () => {
  const { addToCart, cartItems } = useCart();
  const [category, setCategory] = useState("All");
  const [price, setPrice] = useState(20000);

  const filteredProducts = productsData.filter((p) => {
    const byCategory =
      category === "All" || p.category === category;
    const byPrice = p.finalPrice <= price;
    console.log(setCategory)
    return byCategory && byPrice;
  });

  return (
    <div className="products-page">
      {/* LEFT FILTER */}
      <aside className="filters">
        <h3>Category</h3>
        {categories.map((cat) => (
          <label key={cat}>
            <input
              type="radio"
              checked={category === cat}
              onChange={() => setCategory(cat)}
            />
            {cat}
          </label>
        ))}

        <h3>Price</h3>
        <input
          type="range"
          min="500"
          max="20000"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <p>₹{price}</p>
      </aside>

      {/* PRODUCTS GRID */}
      <section className="products-grid">
        {filteredProducts.map((product) => {
          const isAdded = cartItems.some(
            (item) => item.id === product.id
          );

          return (
            <div className="product-card" key={product.id}>
              <img src={product.images[0]} alt={product.title} />
              <h4>{product.title}</h4>

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
      </section>
    </div>
  );
};
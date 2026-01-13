import { useState } from "react";
import { useSearch } from "../Context/SearchContext";
import productsData from "../ProductData";
import { useNavigate } from "react-router-dom";

export const Searchbar = () => {
  const { open, setOpen } = useSearch();
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  if (!open) return null;

  const filteredProducts = productsData.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );

  const handleClick = (item) => {
    setOpen(false); // ✅ close search
    navigate(`/product/${item.id}`); // ✅ open product
  };

  return (
    <div className="search-overlay" onClick={() => setOpen(false)}>
      <div className="search-box" onClick={(e) => e.stopPropagation()}>
        
        <input
          type="text"
          placeholder="Search for products..."
          autoFocus
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <span className="close" onClick={() => setOpen(false)}>✕</span>

        {query && (
          <div className="search-results">
            {filteredProducts.length ? (
              filteredProducts.map((item) => (
                <div
                  key={item.id}
                  className="result-item"
                  onClick={() => handleClick(item)}
                >
                  {item.title}
                </div>
              ))
            ) : (
              <div className="no-result">No products found</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
import { FiSearch } from "react-icons/fi";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { useRef, useState, useEffect } from "react";
import { useSearch } from "../Context/SearchContext";
import { UserPopup } from "./UserpopUp";
import { Login } from "./Login";
import { Signup } from "./Signup";
import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";

export const Header = () => {
  const { cartItems } = useCart();   
  const { setOpen } = useSearch();

  const [showPopup, setShowPopup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const popupRef = useRef(null);

  
  const totalQty = cartItems.reduce(
    (sum, item) => sum + item.qty,
    0
  );

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        setShowPopup(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <header className="header">
        <Link to="/" className="logo">Tech-Shop</Link>

        <div className="icons">
          
          <FiSearch
            size={20}
            color="white"
            style={{ cursor: "pointer" }}
            onClick={() => setOpen(true)}
          />

        
          <Link to="/cart" className="cart-icon">
            <FaShoppingCart />
            {totalQty > 0 && (
              <span className="cart-count">{totalQty}</span>
            )}
          </Link>

        
          <FaUser
            style={{ cursor: "pointer" }}
            onClick={() => setShowPopup((prev) => !prev)}
          />
        </div>
      </header>

      {showPopup && (
        <div ref={popupRef}>
          <UserPopup
            openLogin={() => {
              setShowPopup(false);
              setShowLogin(true);
            }}
          />
        </div>
      )}

      {showLogin && (
        <Login
          onClose={() => setShowLogin(false)}
          openSignup={() => {
            setShowLogin(false);
            setShowSignup(true);
          }}
        />
      )}

      {showSignup && (
        <Signup
          onClose={() => setShowSignup(false)}
          openLogin={() => {
            setShowSignup(false);
            setShowLogin(true);
          }}
        />
      )}
    </>
  );
};
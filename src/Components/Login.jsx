import { useEffect, useRef } from "react";
import { IoClose } from "react-icons/io5";

export const Login = ({ onClose, openSignup }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  return (
    <div className="login-overlay">
      <div className="login-modal" ref={modalRef}>

        {/* Close */}
        <button className="login-close" onClick={onClose}>
          <IoClose size={18} />
        </button>

        {/* Title */}
        <h2 className="login-title">Login</h2>

        {/* FIX HERE */}
        <p className="login-subtitle">
          New to Tech-Shop?{" "}
          <span
            onClick={openSignup}
            style={{ color: "red", cursor: "pointer" }}
          >
            Create an account
          </span>
        </p>

        {/* Inputs */}
        <input type="email" placeholder="Email" className="login-input" />
        <input type="password" placeholder="Password" className="login-input" />

        <button className="login-btn">Login</button>

        <div className="login-divider">
          <span>or login with</span>
        </div>

        <div className="social-login">
          <button className="facebook">Facebook</button>
          <button className="google">Google</button>
          <button className="twitter">Twitter</button>
        </div>

      </div>
    </div>
  );
};
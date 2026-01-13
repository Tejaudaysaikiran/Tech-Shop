import { useEffect, useRef } from "react";

export const Signup = ({ onClose, openLogin }) => {
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
        <button className="close-btn" onClick={onClose}>×</button>

        <h2>Signup</h2>
        <p className="subtitle">
          Already have an account?{" "}
          <span onClick={openLogin}>Login</span>
        </p>

        <input type="text" placeholder="Username" className="login-input"/>
        <input type="email" placeholder="Email" className="login-input"/>
        <input type="password" placeholder="Password" className="login-input"/>
        <input type="password" placeholder="Confirm Password" className="login-input" />

        <button className="login-btn">Signup</button>
      </div>
    </div>
  );
};
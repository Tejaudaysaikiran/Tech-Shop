
 export const UserPopup = ({openLogin}) => {
  return (
    <div className="user-popup">
      <h4>Hello!</h4>
      <p>Access account and manage orders</p>

      <button className="login-btn" onClick={openLogin}>Login / Signup</button>

      <span className="divider"></span>

      <p className="login-text">Please Login</p>
    </div>
  );
};


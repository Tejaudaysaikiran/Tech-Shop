import { useCart } from "../Context/CartContext"


const Cart = () => {
  const { cartItems, increaseQty, decreaseQty, removeItem } = useCart();

  const originalPrice = cartItems.reduce(
    (sum, item) => sum + item.originalPrice * item.qty, 0
  );

  const finalPrice = cartItems.reduce(
    (sum, item) => sum + item.finalPrice * item.qty, 0
  );

  const discount = originalPrice - finalPrice;

  return (
    <div className="cart-page">
      <div className="cart-left">
        {cartItems.map(item => (
          <div className="cart-item" key={item.id}>
            <img src={item.images[0]} alt={item.title} />

            <div className="cart-info">
              <h4>{item.title}</h4>
              <p>₹{item.finalPrice.toLocaleString()}</p>

              <div className="qty">
                <button onClick={() => decreaseQty(item.id)}>-</button>
                <span>{item.qty}</span>
                <button onClick={() => increaseQty(item.id)}>+</button>
              </div>
            </div>

            <button className="remove" onClick={() => removeItem(item.id)}>
              🗑
            </button>
          </div>
        ))}
      </div>

      <div className="cart-right">
        <h3>Order Summary</h3>
        <p>Original Price <span>₹{originalPrice}</span></p>
        <p>Discount <span className="green">-₹{discount}</span></p>
        <p>Delivery <span className="green">Free</span></p>

        <h2>Total Price <span>₹{finalPrice}</span></h2>
        <button className="checkout">Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
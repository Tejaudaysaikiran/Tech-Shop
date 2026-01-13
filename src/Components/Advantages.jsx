import { FaCreditCard, FaShareAlt, FaTags, FaTruck } from "react-icons/fa"


export const Adavantage=()=>{
    return(
        <>
         <section className="advantages">
      <h2 className="advantages-title">Our Advantages</h2>

      <div className="advantages-grid">
        <div className="adv-item">
          <FaTruck className="adv-icon" />
          <h4>Express Delivery</h4>
          <p>Ships in 24 Hours</p>
        </div>

        <div className="adv-item">
          <FaShareAlt className="adv-icon" />
          <h4>Brand Warranty</h4>
          <p>100% Original products</p>
        </div>

        <div className="adv-item">
          <FaTags className="adv-icon" />
          <h4>Exciting Deals</h4>
          <p>On all prepaid orders</p>
        </div>

        <div className="adv-item">
          <FaCreditCard className="adv-icon" />
          <h4>Secure Payments</h4>
          <p>SSL / Secure certificate</p>
        </div>
      </div>
    </section>
        </>
    )
}
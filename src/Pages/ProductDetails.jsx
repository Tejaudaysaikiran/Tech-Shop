import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import Slider from "react-slick";
import productsData from "../ProductData";
import { Adavantage } from "../Components/Advantages";

export const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = productsData.find(p => p.id.toString() === id);
  const [activeImg, setActiveImg] = useState(product?.images[0]);
  const [tab, setTab] = useState("specs");

  if (!product) return <p>Product not found</p>;

  const related = productsData.filter(p => p.id !== product.id);

  const sliderSettings = {
    arrows: false,
    dots: true,
    slidesToShow: 4,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 3 } },
      { breakpoint: 576, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <div className="pd-page">

      {/* TOP SECTION */}
      <div className="pd-top">

        {/* LEFT THUMBNAILS */}
        <div className="pd-thumbs">
          {product.images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt=""
              className={activeImg === img ? "active" : ""}
              onClick={() => setActiveImg(img)}
            />
          ))}
        </div>

        {/* MAIN IMAGE */}
        <div className="pd-main-img">
          <img src={activeImg} alt={product.title} />
        </div>

        {/* PRODUCT INFO */}
        <div className="pd-info">
          <h2>{product.title}</h2>
          <p className="subtitle">Wireless Over-Ear NC Headphones</p>

          <div className="rating">
            ⭐⭐⭐⭐⭐ <span>| 1234 Ratings</span>
          </div>

          <div className="price-row">
            <span className="price">₹{product.finalPrice.toLocaleString()}</span>
            <span className="mrp">₹{product.originalPrice.toLocaleString()}</span>
          </div>

          <p className="save">You save ₹5,000 (33%)</p>
          <span className="stock">✔ In Stock</span>

          <div className="offers">
            <div>No Cost EMI on Credit Card</div>
            <div>Pay Later & Avail Cashback</div>
          </div>

          <button className="add-cart">Add to cart</button>
        </div>
      </div>

      {/* TABS */}
      <div className="pd-tabs">
        <button
          className={tab === "specs" ? "active" : ""}
          onClick={() => setTab("specs")}
        >
          Specifications
        </button>
        <button
          className={tab === "overview" ? "active" : ""}
          onClick={() => setTab("overview")}
        >
          Overview
        </button>
        <button
          className={tab === "reviews" ? "active" : ""}
          onClick={() => setTab("reviews")}
        >
          Reviews
        </button>
      </div>

      {/* TAB CONTENT */}
      {tab === "specs" && (
        <div className="specs-table">
          <div><span>Brand</span><span>JBL</span></div>
          <div><span>Model</span><span>JBL Live 660NC</span></div>
          <div><span>Generic Name</span><span>Headphones</span></div>
          <div><span>Headphone Type</span><span>Over Ear</span></div>
          <div><span>Connectivity</span><span>Wireless</span></div>
          <div><span>Microphone</span><span>Yes</span></div>
        </div>
      )}

      {/* RELATED PRODUCTS */}
      <h3 className="section-title">Related Products</h3>

      <Slider {...sliderSettings} className="related-slider">
        {related.map(item => (
          <div key={item.id} className="related-card">
            <img src={item.images[0]} alt="" />
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <h4>{item.title}</h4>
            <p className="rp">
              ₹{item.finalPrice.toLocaleString()}
              <span>₹{item.originalPrice.toLocaleString()}</span>
            </p>
            <button>Add to cart</button>
          </div>
        ))}
      </Slider>
      <Adavantage />
      {/* ADVANTAGES
      <h3 className="section-title">Our Advantages</h3>
      <div className="advantages">
        <div>🚚 Express Delivery<br /><span>Ships in 24 Hours</span></div>
        <div>🛡 Brand Warranty<br /><span>100% Original</span></div>
        <div>🔥 Exciting Deals<br /><span>Prepaid Orders</span></div>
        <div>🔒 Secure Payments<br /><span>SSL Protected</span></div>
      </div> */}

    </div>
  );
};
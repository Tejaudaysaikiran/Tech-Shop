import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
let slides = [
{
    id: 7,
    title: "Give Your Favourite Music A Boost.",
    subtitle: "Sony WH-XB910N",
    price: "₹13,489",
    oldPrice: "₹19,999",
    image:"/src/assets/sonyXb910n-1 (1).png"
},
{  
    id:7,
    title: "Featherweight For Comfort All-Day",
    subtitle: "Sony WH-1000XM5",
    price: "₹24,999",
    oldPrice: "₹29,999",
    image:"/src/assets/boat131-3.png"
},
{
    id:7,
    title: "Give Your Favourite Music A Boost",
    subtitle: "Sony WH-1000XM5",
    price: "₹24,999",
    oldPrice: "₹29,999",
    image:"/src/assets/jbl660nc-1.png"
},

];
export const Cursole=()=>{
const navigate = useNavigate();
let[current, setCurrent]=useState(0)
useEffect(() => {
let timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

    return(
        <>
         <div className="carousel">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === current ? "active" : ""}`}
        >
          <div className="content">
            <p className="subtitle">{slide.subtitle}</p>
            <h1>{slide.title}</h1>

            <div className="price">
              <span className="new">{slide.price}</span>
              <span className="old">{slide.oldPrice}</span>
            </div>

            <button className="btn" onClick={()=>navigate(`/product/${slide.id}`)}>Shop Now</button>
          </div>

          <div className="image">
            <img src={slide.image} alt="product" />
          </div>
        </div>
      ))}
    </div>
     
        </>
    )
}
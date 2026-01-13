// import { useSearch } from "../Context/SearchContext";
// import { useNavigate } from "react-router-dom";
// import productsData from "../Data/productsData";
// import { useState } from "react";
// import { IoClose } from "react-icons/io5";

// export const SearchPopup = () => {
//   const { setOpen } = useSearch();
//   const navigate = useNavigate();
//   const [query, setQuery] = useState("");

//   const filteredProducts = productsData.filter((product) =>
//     product.title.toLowerCase().includes(query.toLowerCase())
//   );

//   const handleProductClick = (product) => {
//     setOpen(false); 
//     navigate(`${product.path}${product.id}`); 
//   };

//   return (
//     <div className="search-popup">
   
//       <button className="close-btn" onClick={() => setOpen(false)}>
//         <IoClose size={22} />
//       </button>

//       <input
//         type="text"
//         placeholder="Search products..."
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//       />

 
//       <ul>
//         {filteredProducts.map((product) => (
//           <li
//             key={product.id}
//             onClick={() => handleProductClick(product)}
//             className="search-item"
//           >
//             {product.title}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };
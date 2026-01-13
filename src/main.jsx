import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import { SearchProvider } from './Context/SearchContext.jsx'
import { CartProvider } from './Context/CartContext.jsx';

createRoot(document.getElementById('root')).render(
   <BrowserRouter>
   <SearchProvider>
   <CartProvider >
    <App />
    </CartProvider>
    </SearchProvider>
    </BrowserRouter>
 
)
import { Route, Routes } from "react-router-dom"
import { Home } from "../Pages/Home"
import { ProductDetails } from "../Pages/ProductDetails"
import Cart from "../Pages/Cart"
import { ProductCard} from "../Pages/ProductCard"


export const AppRouter=()=>{
    return(
        <>
     
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/product/:id" element={<ProductDetails/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/productcard" element={<ProductCard />}/>
        </Routes>
     
        </>
    )
}
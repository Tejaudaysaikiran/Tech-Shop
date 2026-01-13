

import { Footer } from "../Components/Footer"
import { Header } from "../Components/Header"

import { Searchbar } from "../Pages/Searchbar"
import { AppRouter } from "../RouterDom/AppRouter"

export const Mainlayout=()=>{
    return(
        <>
       
        <Header />
        <Searchbar />
        <AppRouter />
        <Footer />
        </>
    )
}
import React from "react";
import { Routes , Route} from "react-router";
import Home from './Home';
import Shop from "./Shop";
import Cart from "./Cart";
import Contact from "./Contact";
 
const Rout= ({shop,Filter,allcatfilter, addtocart, cart ,setCart})=>{
    return(
        <>
         <Routes>
            <Route path="/" element={<Home addtocart={addtocart}/>}/>
            <Route path="/cart" element={<Cart cart={cart} setCart={setCart}></Cart>}></Route>
            <Route path="shop" element={<Shop shop={shop} Filter={Filter} allcatfilter={allcatfilter} addtocart={addtocart}/>}></Route>
            <Route path="/contact" element={<Contact/>}/>
            </Routes> 
           
        </>
    )
}
export default Rout;
import React, { useState } from "react";
import Nav from "./myApp/Nav";
import { BrowserRouter } from "react-router-dom";
import Rout from "./myApp/Rout";
import Footer from "./myApp/Footer";
import HomeProduct from "./myApp/HomeProduct";

const App = () => {
  const [cart, setCart] = useState([]);

  const [shop, setShop] = useState(HomeProduct);

  const [search, setSearch] = useState("");

  const Filter = (x) => {
    const catefilter = HomeProduct.filter((product) => {
      return product.cat === x;
    });
    setShop(catefilter);
  };

  const allcatfilter = () => {
    setShop(HomeProduct);
  };

  const searchlength = (search || []).length === 0;
  const searchProduct = () => {
    if (searchlength) {
      alert("please search somthing");
      setShop(HomeProduct);
    } else {
      const searchfilter = HomeProduct.filter((x) => {
        return x.cat === search;
      });
      setShop(searchfilter);
    }
  };

  const addtocart = (product) => {
    const exist = cart.find((x) => {
      return x.id === product.id;
    });
    if (exist) {
      alert("already in cart");
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
      alert("Added to cart");
    }
  };
  console.log(cart);
  return (
    <>
      <BrowserRouter>
        <Nav
          search={search}
          setSearch={setSearch}
          searchProduct={searchProduct}
        ></Nav>

        <Rout
          setCart={setCart}
          cart={cart}
          shop={shop}
          Filter={Filter}
          allcatfilter={allcatfilter}
          addtocart={addtocart}
        ></Rout>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
};
export default App;

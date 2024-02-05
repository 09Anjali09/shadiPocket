import React, {useState } from "react";
import {useEffect} from "react";
import "./styleHome.css";
import { Link } from "react-router-dom";
import HomeProduct from "./HomeProduct";

import { FaEye } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaRupeeSign } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";

const Home = ({addtocart}) => {
  const [newProduct, setNewProduct] = useState([]);
  const [FeaturedProduct, setFeaturedProduct] = useState([]);
  const [topProduct, setTopProduct] = useState([]);


  const [trendingProduct, setTrendingProduct] = useState(HomeProduct);

  const filtercate = (x) => {
    const filterProduct = HomeProduct.filter((curlElm) => {
      return curlElm.type === x;
    });
    setTrendingProduct(filterProduct);
  };
  const allTrendingProduct = () => {
    setTrendingProduct(HomeProduct);
  }

  useEffect(() => { 
    productCategory();
  });
  const productCategory = () => {
    //new product
    const newCategory = HomeProduct.filter((x) => {
      return x.type === 'new';
    });
    setNewProduct(newCategory)

    //feature product
    const featuredCategory=HomeProduct.filter((x)=>{
      return x.type ==='featured';
    });
    setFeaturedProduct(featuredCategory)

    //top product

    const topCategory = HomeProduct.filter((x)=>{
      return x.type === 'top';
    });
    setTopProduct(topCategory)
  };
  return (
    <>
      <div className="home">
        <div className="top-banner">
          <div className="content">
            <h3>Shadi Products</h3>
            <h2>All Variety Available Here...</h2>
            <p>30% off at your first order</p>
            <Link to="/shop" className="link">
              Shop Now
            </Link>
          </div>
        </div>
        <div className="trending">
          <div className="container">
            <div className="left-box">
              <div className="header">
                <div className="heading">
                  <h2 onClick={() => allTrendingProduct()}>Useful Products</h2>
                </div>
                <div className="cate">
                  <h3 onClick={() => filtercate("new")}>New</h3>
                  <h3 onClick={() => filtercate("featured")}>Featured</h3>
                  <h3 onClick={() => filtercate("top")}>Top Selling</h3>
                </div>
              </div>
              <div className="products">
                <div className="container">
                  {trendingProduct.map((curlElm) => {
                    return (
                      <>
                        <div className="box">
                          <div className="img-box">
                           <img src={curlElm.images} alt="" />

                            <div className="icon">
                              <div className="icon-box">
                                <FaEye />
                              </div>
                              <div className="icon-box">
                                <FaHeart />
                              </div>
                            </div>
                          </div>
                          <div className="info">
                            <h3>{curlElm.name}</h3>
                            <p>
                              <FaRupeeSign />
                              {curlElm.price}
                            </p>
                            <button className="btn" onClick={()=> addtocart(curlElm)}>Add To Cart</button>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
                <button>Show More</button>
              </div>
            </div>
            <div className="right-box">
              <div className="container">
                <div className="testmonial">
                  <div className="head">
                    <h3>Our Testmonial</h3>
                  </div>
                  <div className="detail">
                    <div className="img-box">
                      <img src="images/developer.jpeg" alt=".." />
                    </div>
                    <div className="info">
                      <h3>Aditya</h3>
                      <h4>web Designer</h4>
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Accusantium ab vitae minima voluptatem voluptates.
                        Omnis totam excepturi, vero reiciendis quasi doloribus
                        repellat libero ratione necessitatibus tempore
                        reprehenderit? Porro, voluptatem possimus.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="newsletter">
                <div className="head">
                  <h3>newsletter</h3>
                </div>
                <div className="form">
                  <p>Join our mailing list</p>
                  <input type="email" placeholder="E-mail" autoComplete="off" />
                  <button>subscribe</button>
                  <div className="icon-box">
                    <div className="icon">
                      <FaSquareFacebook />
                    </div>
                    <div className="icon">
                      <FaSquareInstagram />
                    </div>
                    <div className="icon">
                      <FaSquareTwitter />
                    </div>
                    <div className="icon">
                      <IoLogoYoutube />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="product-type">
          <div className="container">

            <div className="box">
              <div className="header">
                <h2>New Product</h2>
                 </div>
                 {newProduct.map((curlElm)=>{
                  return(
                    <>
                    <div className="productbox">
                      <div className="img-box">
                        <img src={curlElm.images} alt="..." />
                         </div>
                         <div className="detail">
                          <h3>{curlElm.name}</h3>
                          <p><FaRupeeSign />
                              {curlElm.price}</p>
                              <div className="icon">
                                <button><FaEye></FaEye></button>
                                <button><FaHeart color="red"></FaHeart></button>
                                <button onClick={()=>addtocart(curlElm)}><IoCartOutline /></button>
                              </div>
                         </div>
                    </div>
                    </>
                  )
                 })}
            </div>

            <div className="box">
              <div className="header">
                <h2>Featured Product</h2>
                 </div>
                 {FeaturedProduct.map((curlElm)=>{
                  return(
                    <>
                    <div className="productbox">
                      <div className="img-box">
                        <img src={curlElm.images} alt="..." />
                         </div>
                         <div className="detail">
                          <h3>{curlElm.name}</h3>
                          <p><FaRupeeSign />
                              {curlElm.price}</p>
                              <div className="icon">
                                <button ><FaEye ></FaEye></button>
                                <button><FaHeart color="red"></FaHeart></button>
                                <button onClick={()=>addtocart(curlElm)}><IoCartOutline /></button>
                              </div>
                         </div>
                    </div>
                    </>
                  )
                 })}
            </div>
            

            <div className="box">
              <div className="header">
                <h2>Top Product</h2>
                 </div>
                 {topProduct.map((curlElm)=>{
                  return(
                    <>
                    <div className="productbox">
                      <div className="img-box">
                        <img src={curlElm.images} alt="..." />
                         </div>
                         <div className="detail">
                          <h3>{curlElm.name}</h3>
                          <p><FaRupeeSign />
                              {curlElm.price}</p>
                              <div className="icon">
                                <button><FaEye></FaEye></button>
                                <button><FaHeart color="red"></FaHeart></button>
                                <button onClick={()=>addtocart(curlElm)}><IoCartOutline /></button>
                              </div>
                         </div>
                    </div>
                    </>
                  )
                 })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;

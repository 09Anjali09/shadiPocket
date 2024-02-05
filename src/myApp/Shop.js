import React, { useState } from 'react';
import './styleShop.css';
import { FaHeart } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaRupeeSign } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";

const Shop = ({shop, Filter,allcatfilter, addtocart}) => {

    const [showDetail, setShowDetail]=useState(false)
    
    const[detail, setDetail]= useState([])
    
    const detailPage =(product)=>{
        const detailData= ([{product}]);
        const productDetail= detailData[0]['product']
    // console.log(productDetail);
        
       setDetail(productDetail)
        setShowDetail(true)
    }

    const closedetail=()=>{
        setShowDetail(false)
    }
  return (
    <>
    {
        showDetail ?
        <>
        <div className='product-detail'>
       <button className='close-btn' onClick={closedetail}><IoIosCloseCircle /></button>
        
        <div className='container'>
            <div className='img-box'>
                <img src={detail.images} alt="" className='image-show' />
            </div>
            <div className='info'>
                <h4>#{detail.cat}</h4>
                <h2>{detail.name}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam vitae perspiciatis repellendus hic molestias beatae, ab quos sequi iure pariatur fuga repellat libero commodi in maxime deleniti quod maiores reprehenderit!</p>
                <h3><FaRupeeSign/>{detail.price}</h3>
                <button onClick={()=> addtocart(detail)}>Add to Cart</button>
            </div>
        </div>
        </div>
        </>
        : null
    }
   
    <div className='shop'>
        <h2># shop</h2>
        <p>Home . shop</p>
        <div className='container'>
            <div className='left-box'>
                <div className='category'>
                    <div className='header'>
                        <h2>all categories</h2>
                    </div>
                    <div className='box'>
                        <ul>
                            <li onClick={()=>allcatfilter (allcatfilter)}>#All</li>
                            <li onClick={()=>Filter("Engagment")}>#Engagment trai</li>
                            <li onClick={()=>Filter("Mukut")}># Mukut</li>
                            <li onClick={()=>Filter("Haldi Decorate Plate")}># Haldi Decorate Plate</li>
                            <li onClick={()=>Filter("Swagat Mala")}># Swagat Mala</li>
                            <li onClick={()=>Filter("Tag")}>#Tag</li>
                            <li onClick={()=>Filter("Sindoor Dani")}># Sindoor Dani</li>
                            <li onClick={()=>Filter("Chundari")}>#Chundari</li>
                        </ul>
                    </div>
                </div>
                <div className='banner'>
                    <div className='img-box'>
                        <img src="images/ladkiwale.jpg" alt="" />
                        <img src="images/sindoordani.webp" alt="" />
                    </div>
                </div>
            </div>
            <div className='right-box'>
                <div className='banner'>
                                   </div>
                <div className='product-box'>
                    <div className='product-container'>

                        {
                            shop.map((curElm)=>{
                                return<>
                                <div className='box'>
                                    <div className='img-box'>
                                        <img src={curElm.images} alt="" />
                                        <div className='icon'>
                                            <li><FaHeart /></li>
                                            <li onClick={()=>detailPage(curElm)}><FaEye /></li>
                                        </div>
                                    </div>
                                    <div className='detail'>
                                        <h3>{curElm.name}</h3>
                                        <p><FaRupeeSign />{curElm.price}</p>
                                        <button onClick={()=>addtocart (curElm)}>Add to cart</button>
                                    </div>
                                </div>
                                </>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Shop

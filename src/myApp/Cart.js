import React from 'react';
import './styeCart.css';
import{Link} from 'react-router-dom';

import { FaRupeeSign } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";

const Cart = ({cart, setCart}) => {
const incqty =(product)=>{
const exist =cart.find((x)=>{
  return x.id === product.id;
})
setCart(cart.map((curElm)=>{
  return curElm.id=== product.id ? {...exist, qty:exist.qty+1}:curElm
}))
}

const decqty =(product)=>{
  const exist= cart.find((x)=>{
    return x.id === product.id;
  })
  setCart(cart.map((curElm)=>{
  return curElm.id=== product.id ? {...exist, qty:exist.qty-1}:curElm

  }))
}

const removeproduct =(product)=>{
  const exist= cart.find((x)=>{
    return x.id === product.id
  })
  if(exist.qty > 0){
    setCart(cart.filter((curElm)=>{
      return curElm.id !== product.id; 
    }))
  }
}

const total =cart.reduce((price,item)=>price+item.qty * item.price,0)
  return (
  <>
  <div className='cart'>
    <h3>#cart</h3>
    {
      cart.length ===0 &&
      <>
      <div className='empty-cart'>
        <h2>Your Shopping cart is Empty</h2>
        <Link to='/shop'><button>Shop Now</button></Link>
      </div>
      </>
    }
    <div className='container'>
    {
      cart.map((curElm)=>{
        return(
          <>
          <div className='box'>
            <div className='img-box'>
              <img src={curElm.images} alt="" />
            </div>
           <div className='detail'>
            <div className='info'>
            <h4>{curElm.cat}</h4>
            <h2>{curElm.name}</h2>
            <p>Price : <FaRupeeSign />{curElm.price}</p>

            <p>Total :<FaRupeeSign /> {curElm.price* curElm.qty}</p>

            </div>
            <div className='quality'>
              <button onClick={()=>incqty(curElm)}>+</button>
              <input type="number" value={curElm.qty} />
              <button onClick={()=>decqty(curElm)}>-</button>
              
            </div>
            <div className='icon'>
              <li onClick={()=> removeproduct(curElm)}><RiDeleteBin5Fill /></li>

            </div>
           </div>
          </div>
          </>
        )
      })
    }
    </div>
    <div className='bottom'>
      {
        cart.length > 0 && 
        <>
        <div className='total'>
          <h4>Sub Total : <FaRupeeSign />{total}</h4>
        </div>
        <button>Checkout</button>
        </>
      }
    </div>
  </div>
  </>
  )
}

export default Cart

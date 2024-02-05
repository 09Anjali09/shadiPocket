import React from "react";
import {MdLocalShipping} from 'react-icons/md';
import { FaRupeeSign } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { FiLogIn } from "react-icons/fi";
import { FiLogOut } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import { useAuth0 } from "@auth0/auth0-react";
import {Link, link} from 'react-router-dom';
import './styleNav.css'

const Nav =({search,setSearch,searchProduct})=>{
    const { loginWithRedirect , logout,  user, isAuthenticated} = useAuth0();
    
    return(
        <>
        <div className="header">
        <div className="top-header">
            <div className="icon">
                <MdLocalShipping></MdLocalShipping>
            </div>
            <div className="info">
                <p>FREE Shipping When Shopping upto <FaRupeeSign />1000</p>
            </div>
        </div>
        <div className="mid-header">
            <div className="logo">CST</div>
            <div className="search-box">
                <input type="text" value={search} placeholder="search" onChange={(e)=>setSearch(e.target.value)}/>
                <button onClick={searchProduct}><IoMdSearch /></button>
            </div>
            {
                isAuthenticated ?
               
            <div className="user">
            <div className="icon"><FiLogOut /></div>
            <div className="btn"><button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>LogOut</button></div>
        </div>
        :
        <div className="user">
        <div className="icon"><FiLogIn /></div>
        <div className="btn"><button onClick={() => loginWithRedirect()}>Login</button></div>
    </div>
            }          
        </div>
        <div className="last-header">
            <div className="user-profile">
                {
                    isAuthenticated ? 
                    <>
                    <div className="icon"><FaUserCircle /></div>
                    <div className="info">
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                    </div>
                    </>
                    :
                    <>
                    <div className="icon"><FaUserCircle /></div>
                    <div className="info">
                    <p className="infop">Please Login</p>
                    </div>
                    </>
                }
            </div>
            <div className="nav">
                <ul>
                    <li><Link to='/' className="link">Home</Link></li>
                    <li><Link to='/shop' className="link">Shop</Link></li>
                    <li><Link to='/cart' className="link">Cart</Link></li>
                    <li><Link to='/about' className="link">About</Link></li>
                    <li><Link to='/contact' className="link">Contact</Link></li>
                </ul>
            </div>
            <div className="offer">
                <p>flat 10% over all things</p>
            </div>
        </div>
        </div>
        </>
    )
}
export default Nav;
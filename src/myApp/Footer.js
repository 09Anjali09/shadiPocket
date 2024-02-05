import React from "react";
import "./styleFooter.css";

import { FaPiggyBank } from "react-icons/fa";
import { FcShipped } from "react-icons/fc";
import { ImHeadphones } from "react-icons/im";
import { IoWalletSharp } from "react-icons/io5";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="left-box">
            <div className="box">
              <div className="icon-box">
                <FaPiggyBank />
              </div>
              <div className="detail">
                <h3>Great Saving</h3>
                <p>
                  Great Savings is one of the most preferred financial
                  instruments that is offered by every Indian Market.{" "}
                </p>
              </div>
            </div>
            <div className="box">
              <div className="icon-box">
                <FcShipped />
              </div>
              <div className="detail">
                <h3>Free Dilevery</h3>
                <p>
                  {" "}
                  A shipping policy helps protect companies from customer
                  complaints, particularly those regarding charges and delivery
                  times. Including additional details about damages, returns,
                  exchanges and international shipping may help further protect
                  your services.{" "}
                </p>
              </div>
            </div>

            <div className="box">
              <div className="icon-box">
                <ImHeadphones />
              </div>
              <div className="detail">
                <h3>24X7 help support</h3>
                <p>
                  24x7 customer support is a service that provides customers
                  with assistance at all times of the day, regardless of time
                  zone.{" "}
                </p>
              </div>
            </div>

            <div className="box">
              <div className="icon-box">
                <IoWalletSharp />
              </div>
              <div className="detail">
                <h3>money back</h3>
                <p>
                  Money back policies are low-risk policies that are not
                  market-linked. They provide you with assured returns at
                  regular intervals during the policy term. The returns are
                  fixed at the time of the purchase of the policy.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="right-box">
            <div className="header">
              <h2>CST</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi incidunt, nam nulla nemo nesciunt laborum velit. Culpa
                omnis dicta fuga cupiditate pariatur cumque, suscipit nisi cum
                obcaecati eaque sunt error.
              </p>

            </div>
            <div className="bottom">
            <div className="box">
              <h3>Your Account</h3>
            <ul>
              <li>About</li>
              <li>Account</li>
              <li>Payment</li>
              <li>Sales</li>
            </ul>
            </div>
              

            <div className="box">
              <h3>Products</h3>
            <ul>
              <li>Delivery</li>
              <li>Track Order</li>
              <li>New Product</li>
              <li>Old Product</li>
            </ul>
            </div>

            <div className="box">
              <h3>Contact Us</h3>
            <ul>
              <li>Online Product Purchase</li>
              <li>+91 9074965739</li>
              <li>15anjali23sahu@gmail.com</li>
              
            </ul>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

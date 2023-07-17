import React, { useState, useEffect } from "react";
import "./card.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useSelector, useDispatch } from "react-redux";
import img1 from "./product-01.png";
import {
  removeFromBasket,
  increaseCount,
  reduceCount,
} from "../../redux/basket/basket";

function Card() {
  const dispatch = useDispatch();

  const { basket } = useSelector((state) => state.basket);

  let totalPrice = basket.reduce(
    (acc, item) => acc + item.count * item.price,
    0
  );

  return (
    <>
      <Header />
      <div className='container'>
        <div className='card-letter'>
          <h1>Your Cart</h1>
          <h3 className='card-total-price'>Total Price: ${totalPrice}</h3>
        </div>
        <div className='card-letter1'>
          <div className='row'>
            <div className='col-6 '>
              <p>Products</p>
            </div>
            <div className='col-6 col-xs-12 card-letter-col4'>
              <div className='row'>
                <div className='col-4'>
                  <h3>Price</h3>
                </div>
                <div className='col-4'>
                  <h3>Quantity</h3>
                </div>
                <div className='col-4'>
                  <h3>Subtotal</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='card-products'>
          {basket.map((index, key) => (
            <div key={key} className='row'>
              <div className='col-6 col-xs-12'>
                <div className='row'>
                  <div className='col-1 card-products-x '>
                    <i
                      onClick={() => dispatch(removeFromBasket(index))}
                      class='fa-regular fa-x'
                    ></i>
                  </div>
                  <div className='col-3 card-products-img'>
                    <img src={index.firstImg} alt='' />
                  </div>
                  <div className='col-8 card-products-letter'>
                    <p>Ella Everyday Tote</p>
                  </div>
                </div>
              </div>
              <div className='col-6 col-xs-12 card-products-prices '>
                <div className='row'>
                  <div className='col-3 card-products-price'>
                    <p>${index.price}</p>
                  </div>
                  <div className='col-6 card-products-quantity'>
                    <p onClick={() => dispatch(reduceCount(index))}>
                      <i class='fa-solid fa-minus'></i>
                    </p>
                    <p>{index.count}</p>
                    <p onClick={() => dispatch(increaseCount(index))}>
                      {index.disable ? "" : <i class='fa-solid fa-plus'></i>}
                    </p>
                  </div>
                  <div className='col-3 card-products-subtotal'>
                    <p>${index.price * index.count}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Card;

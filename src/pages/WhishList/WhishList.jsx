import React, { useState, useEffect } from "react";
import w from "./whishList.module.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { addToWish } from "../../redux/wish/wish";
import { useDispatch, useSelector } from "react-redux";
import {addToBasket} from "../../redux/basket/basket"
import {removeFromWish} from "../../redux/wish/wish"
import 'react-toastify/dist/ReactToastify.css';

function WhishList() {
  const dispatch = useDispatch();
  const [wishCount,setWishCount] = useState( false)

  const { wish } = useSelector((state) => state.wish);


  useEffect(() => {
    if (wish.length > 0) {
      setWishCount(true);
    }
  }, [wish.length]);

  return (
    <>
      <Header />

      <div className={w.whish}>
        <div className='container'>
          <div className={w.whishl}>
            <p>My Wish List on eTrade</p>
          </div>
          <div className={`${w.whishrl} .row`}>
            <div className='col-1'></div>
            <div className='col-5'>
              <div className={w.whishP}>
                <p>Product</p>
              </div>
            </div>
            <div className='col-2'>
              <div className={w.whishP}>
                <p>Unit Price</p>
              </div>
            </div>
            <div className='col-3'>
              <div className={w.whishP}>
                <p>Stock Status</p>
              </div>
            </div>
          </div>

          {wish.map((index, key) => (
            <div className={`${w.whishR} .row`}>
              <div className='col-1'>
                <button onClick={() => dispatch(removeFromWish(index))} className={w.x}>
                  <i className='fa-solid fa-x'></i>
                </button>
              </div>
              <div className='col-5'>
                <div className={w.whishImg}>
                  <img src={index.firstImg} alt='' />
                  <p></p>
                </div>
              </div>

              <div className='col-2'>
                <div className={w.whishP}>
                  <p>${index.price}</p>
                </div>
              </div>

              <div className='col-2'>
                <div className={w.whishP}>
                  <p>{index.stock}</p>
                </div>
              </div>

              <div className='col-2'>
                <div className={w.whisha}>
                  <button onClick={() => dispatch(addToBasket(index))} >Add to Cart</button>
                </div>
              </div>
            </div>
          ))}

          {/* // Mobile versiya */}

          {
            wish.map((index, key) => (

          <div key ={key} className={`${w.whishMr1} row`}>
            <div className='col-3'>
              <div className={w.whishMImg}>
                <img src={index.firstImg} />
              </div>
            </div>
            <div className='col-9'>
              <div className={w.whishMl}>
                <div className={`${w.whishM1} .col-12`}>
                  <p></p>
                  <button onClick={() => dispatch(removeFromWish(index))} >
                    <i className='fa-solid fa-x'></i>
                  </button>
                </div>
                <div className={`${w.whishM2} .col-12`}>
                  <p>Price :</p>
                  <p>${index.price}</p>
                </div>
                <div className={`${w.whishM2} .col-12`}>
                  <p>Stock Status :</p>
                  <p>{index.stock}</p>
                </div>
                <div className={`${w.whishM3} .col-12`}>
                  <button onClick={() => dispatch(addToBasket(index))} >Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
            ))
          }

        </div>
      </div>

      <Footer />
    </>
  );
}

export default WhishList;

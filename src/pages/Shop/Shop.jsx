import React, { useEffect, useState, useRef } from "react";
import styles from "./shop.module.css";

import Header from "./../../components/Header/Header";
import Footer from "./../../components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import img1 from "./product-01.png";
import { addToBasket } from "../../redux/basket/basket";
import { addToWish } from "../../redux/wish/wish";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Comment from "./Comment/Comment";

const Shop = () => {
  const [close, setClose] = useState(false);
  const [eye, setEye] = useState({});
  const [color, setColor] = useState([]);
  const [value, setValue] = useState(50);

  let inputRange = useRef();
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.products);

  const { basket } = useSelector((state) => state.basket);
  const { wish } = useSelector((state) => state.wish);

  useEffect(() => {
    let t = [];
    products.map((e) => {
      if (!t.includes(e.color)) {
        t.push(e.color);
      }
    });
    setColor(t);
  }, []);

  const [filter, setFilter] = useState({ common: "", color: "", price: "" });
  const [data, setData] = useState([]);

  const setHeartModule = (id) => {
    let t = products.find((e) => e.id == id);
    setEye(t);
    setClose(!close);
  };

  const handleInput = (e) => {
    setValue(inputRange.current.value);

    const { name, value } = e.target;

    setFilter({ ...filter, [name]: value });
  };

  useEffect(() => {
    let f = products.filter(
      (e) =>
        (filter.common.length > 0
          ? e.name.toLowerCase().includes(filter.common.toLowerCase())
          : true) &&
        (filter.color.length > 0
          ? e.color.toLowerCase() === filter.color.toLowerCase()
          : true) &&
        (filter.price.length > 0 ? e.price <= filter.price : true)
    );
    setData(f);
  }, [filter]);

  return (
    <>
      <Header />

      <div className='container'>
        <div className={`${styles.shopContainer}`}>
          <div className={styles.shopHeader}>
            <div>
              <ul className={styles.axilbreadcrumb}>
                <li className={styles.axilbreadcrumbitem}>
                  <a href='/'>Home</a>
                </li>
                <li className={styles.separator}></li>
                <li
                  className={styles.axilbreadcrumbitemactive}
                  aria-current='page'
                >
                  My Account
                </li>
              </ul>
              <h1>Explore All Products</h1>
            </div>
            <div>
              <img
                src='https://new.axilthemes.com/demo/template/etrade/assets/images/product/product-45.png'
                alt=''
              />
            </div>
          </div>
        </div>

        <div className={styles.shopFilter}>
          <input
            type='text'
            name='common'
            onChange={(e) => handleInput(e)}
            placeholder='Write the product name'
          />
          <input
            onChange={(e) => handleInput(e)}
            type='range'
            name='price'
            ref={inputRange}
            min={10}
            max={1500}
          />
          <p style={{ color: "#3577f0" }}>{value}$</p>

          <select onChange={(e) => handleInput(e)} name='color'>
            <option value=''>All Color</option>
            {color.map((index, key) => (
              <option key={key} value={index}>
                {index}
              </option>
            ))}
          </select>
        </div>

        <p className={styles.productCount}>
          Products count:{" "}
          <span style={{ color: "#e51da6" }}>{data.length} </span>
        </p>

        <div className={`${styles.shopRow1} row`}>
          {data.map((index, key) => (
            <div key={key} className='col-3 col-xs-12 col-sm-4'>
              <div className={styles.shopcol4}>
                <div className={styles.col4img}>
                  <img src={index.firstImg} alt='' />

                  <div className={styles.shopList}>
                    <div className={styles.button1}>
                      <button onClick={() => dispatch(addToWish(index))}>
                        <i className='fa-regular fa-heart'></i>
                      </button>
                    </div>

                    <div className={styles.button2}>
                      <button onClick={() => dispatch(addToBasket(index))}>
                        <p>Add to Card</p>
                      </button>
                    </div>
                    <div className={styles.button3}>
                      <button onClick={() => setHeartModule(index.id)}>
                        <i className='fa-regular fa-eye'></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.shopcol4Letter}>
                <p>{index.name}</p>
                <p style={{ color: "#3577f0" }}>$ {index.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {eye ? (
        <div
          className={`${styles.shopModule} ${
            close ? `${styles.moduleNone}` : ""
          } `}
        >
          <div className='container'>
            <div className={styles.Modulex}>
              <div onClick={() => setHeartModule()} className={styles.Modulei}>
                <i className='fa-solid fa-x'></i>
              </div>
            </div>
            <div className={`${styles.Modulerow} row `}>
              <div className='col-6 col-xs-12'>
                <div className={styles.shopModuleImg}>
                  <img src={eye.firstImg} alt='' />
                </div>
              </div>
              <div className='col-6 col-xs-12'>
                <div className={styles.shopModuleLetter}>
                  <p>{eye.name}</p>
                  <p>Price: ${eye.price}</p>
                  <p>Color: {eye.color}</p>
                  <ul>
                    <li>
                      <i className='fa-solid fa-check'></i> In stock
                    </li>
                    <li>
                      <i className='fa-solid fa-check'></i> Free delivery
                      available
                    </li>
                    <li>
                      <i className='fa-solid fa-check'></i> Sales 30% Off Use
                      Code: MOTIVE30
                    </li>
                  </ul>
                  <p>
                    In ornare lorem ut est dapibus, ut tincidunt nisi pretium.
                    Integer ante est, elementum eget magna. Pellentesque
                    sagittis dictum libero, eu dignissim tellus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}

      <Comment />

      <Footer />
    </>
  );
};

export default Shop;

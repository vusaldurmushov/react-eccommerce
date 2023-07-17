import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToBasket } from "../../redux/basket/basket";
import { addToWish } from "../../redux/wish/wish";

import "./header.css";
import navlogo from "../../assets/image/logo.png";

function Header() {
  const dispatch = useDispatch();
  const addClass = useRef();
  const [user, setUser] = useState(false);
  const [length, setLength] = useState(false);

  function changeBars() {
    setLength(!length);
    addClass.current.classList.toggle("change");
  }

  const openUser = () => {
    setUser(!user);
  };

  const { basket } = useSelector((state) => state.basket);
  const { products } = useSelector((state) => state.products);
  const { wish } = useSelector((state) => state.wish);

  // search Input Filer;

  const totalCount = basket.reduce((add, total) => add + total.count, 0);

  const [close, setClose] = useState(false);

  const [data, setData] = useState([]);

  const [search, setSearch] = useState("");

  const [result, setResult] = useState([]);

  const [wishCount, setWishCount] = useState(false);

  const [basketCount, setBasketCount] = useState(false);

  useEffect(() => {
    if (wish.length > 0) {
      setWishCount(true);
    }
  }, [wish.length]);

  useEffect(() => {
    if (basket.length > 0) {
      setBasketCount(true);
    }
  }, [basket.length]);

  const setHeartModule = () => {
    setClose(!close);
  };

  //

  useEffect(() => {
    if (search) {
      setResult(
        products.filter((e) =>
          e.name.toLowerCase().includes(search.toLowerCase())
        )
      );
    } else {
      setResult([]);
    }
  }, [search]);

  return (
    <>
      <div className='header'>
        <div className='container'>
          <div className='navbar'>
            <div className='nav-img'>
              <Link to='/'>
                <img src={navlogo} alt='' />
              </Link>
            </div>
            {/* <div className="nav-menu"> */}
            <div className={`nav-menu ${length ? "length" : ""}`}>
              <ul onClick={() => changeBars()}>
                <li>
                  <Link to='/'>Home</Link>
                </li>
                <li>
                  <Link to='/shop'>Shop</Link>
                </li>
                <li>
                  <Link to='/aboutUs'>About</Link>
                </li>
                <li>
                  <Link to='/blog'>Blog</Link>
                </li>
                <li>
                  <Link to='/contactUs'>Contact</Link>
                </li>
              </ul>
            </div>
            <div className='nav-stic'>
              <ul>
                <li onClick={() => setHeartModule()}>
                  <a>
                    <i className='fa-solid fa-magnifying-glass'></i>
                  </a>
                </li>
                <li className='cart-plus-wish'>
                  {wishCount ? (
                    <p className='cart-plus-wish-p'>{wish.length} </p>
                  ) : (
                    ""
                  )}
                  <Link to='/whishList'>
                    <i className='fa-regular fa-heart'></i>
                  </Link>
                </li>
                <li className='cart-plus-item'>
                  {basketCount ? <p>{totalCount} </p> : ""}

                  <Link to='/card'>
                    <i className='fa-solid fa-cart-plus'></i>
                  </Link>
                </li>
                <li
                  onClick={() => openUser()}
                  className={`homeUser ${user ? "none" : ""}`}
                >
                  <a>
                    <i className='fa-regular fa-user fa-user1'></i>
                  </a>
                  <ul>
                    <li>
                      <Link to='/signIn'>
                        <i className='fa-regular fa-user'></i>My Account
                      </Link>
                    </li>
                    <li>
                      <Link to='/signUp'>
                        <i className='fa-regular fa-address-card'></i>Register
                        Here
                      </Link>
                    </li>
                    <Link to='/signIn'>
                      <button>Login</button>
                    </Link>
                  </ul>
                </li>
                <li>
                  <Link to='/newPage'>
                    <i className='fa-solid fa-calendar-plus'></i>
                  </Link>
                </li>
              </ul>
              <div
                ref={addClass}
                onClick={() => changeBars()}
                className='navBars'
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`headerModule  ${close ? "Modulenone" : ""} `}>
        <div className='headerModulex'>
          <i onClick={() => setHeartModule()} className='fa-solid fa-x'></i>
        </div>
        <div className='headerModuleInput'>
          <i className='fa-solid fa-magnifying-glass'></i>
          <input
            onChange={(e) => setSearch(e.target.value)}
            type='text'
            placeholder='Write Something...'
          />
        </div>

        <div className='headerModuleFind'>
          <p> {result.length} Result Find</p>
          <Link to='/shop'>View All</Link>
          {/* <p>View All</p> */}
        </div>
        <div className='headModuleProducts'>
          {result.map((index, key) => (
            <div key={key} className='headModuleProduct'>
              <div className='row'>
                <div className='col-2 col-sm-3 col-xs-5'>
                  <div className='ProductsImg'>
                    <img src={`${index.firstImg}`} alt='' />
                  </div>
                </div>
                <div className='col-10 col-sm-9 col-xs-12'>
                  <div className='ProductsLetter'>
                    <div className='ProLetter1'>
                      <p>{index.name}</p>
                      <p>{index.price}$</p>
                    </div>
                    <div className='ProLetter2'>
                      <p onClick={() => dispatch(addToBasket(index))}>
                        <i className='fa-solid fa-cart-shopping'></i>
                      </p>
                      <p onClick={() => dispatch(addToWish(index))}>
                        <i className='fa-solid fa-heart'></i>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Header;

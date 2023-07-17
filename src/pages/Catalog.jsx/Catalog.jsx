import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import "./catalog.css";
import { addToBasket } from "../../redux/basket/basket";
import { addToWish } from "../../redux/wish/wish";
import Header from "../../components/Header/Header"

function Catalog() {
  const dispatch = useDispatch();
  const [find, setFind] = useState([]);
  const { title } = useParams();

  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    let t = products.filter((e) => e.category.includes(title));

    setFind(t);
  }, [title]);

  console.log(find);

  return (
    <div>
      <Header />
      <div className='container'>
        {/* <div className='row'>
          <div className='catalog-part1'>
            <Link to='/'>Home |</Link>
            <h1>
              Explore about the: <h4 style={{ color: "#3577F0" }}>{title}</h4>{" "}
            </h1>
          </div>
        </div> */}
        <div className='row row2 '>
          {find.map((index, key) => (
            <div key={key} className='col-3 col-xs-12 col-sm-4'>
              <div className='catalog-box1'>
                <div className='catalog-box1img'>
                  <img src={index.firstImg} alt='' />
                </div>
                <div className='catalog-boxLetter'>
                  <button onClick={() => dispatch(addToWish(index))}>
                    <i class='fa-regular fa-heart'></i>
                  </button>

                  <button onClick={() => dispatch(addToBasket(index))}>
                    <i class='fa-solid fa-cart-shopping'></i>
                  </button>
                </div>
              </div>
              <p style={{ marginBottom: "30px" }}>{index.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Catalog;

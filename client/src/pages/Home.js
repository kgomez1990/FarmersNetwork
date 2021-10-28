import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";
//import Carousel from 'react-bootstrap/Carousel';

//import ImageSlider from "../components/Carousel/ImageSlider";

const Home = () => {
  return (
    <div class="flex-column">
      
       

      <div className="container">
        <CategoryMenu />
        <ProductList />
        <Cart />

      </div>
      <footer className="flex-column px-1  ">
        <a >

          <ul > &copy;FarmerNetwork</ul>
          <ul>Dalton Rajesh Karim JHU-Boot-Camp-2021</ul>

        </a>

      </footer>

    </div>

  );
};

export default Home;

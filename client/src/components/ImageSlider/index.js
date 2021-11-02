/* eslint-disable no-unused-vars */
import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

const CarouselContainer = () => {
    return (
        <Carousel className="imageslider">
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100 "
                    src="./images/sliderimage/image1.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3 className="carouselHeader">Welcome to the Farmer's Network!</h3>
                    <p className="carouselPara">Your Online Blog for Locals looking for Fresh Produce at an affordable Price!</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                    className="d-block w-100 "
                    src="./images/sliderimage/image2.jpg"
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3 className="carouselHeader">Farm fresh food at your fingertips, while supporting local businesses! </h3>
                    <p className="carouselPara">Farmers from all over are able to post and sell their products here!</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item >
                <img
                    className="d-block w-100 "
                    src="./images/sliderimage/image3.jpg"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3 className="carouselHeader">Interested in Selling your products?</h3>
                    <p className="carouselPara">Anyone selling fresh produce, preserved goods, plants etc. is able to post their products for sale here. Please create an account with us and start posting!!!</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselContainer;
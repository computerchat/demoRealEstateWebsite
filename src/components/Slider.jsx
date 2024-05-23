import React from "react";
import styles from "./slider.module.css";

export default function Slider() {
    return (
        <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={`${process.env.PUBLIC_URL}/sliderTwo.jpg`} className={`d-block w-100 ${styles.img}`} alt="First slide" />
                </div>
                <div className="carousel-item">
                    <img src={`${process.env.PUBLIC_URL}/sliderOne.jpg`} className={`d-block w-100 ${styles.sliderImage}`} alt="Second slide" />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import { FaChevronLeft, FaChevronRight, FaPlay } from "react-icons/fa";

import shape from "../assets/images/shape.png";
import slide1 from "../assets/images/slide1.png";
import slide2 from "../assets/images/slide2.png";

import "../assets/css/Slider.css";

function Slider() {
    const [index, setIndex] = useState(0);

    const handlePrev = () => {
        setIndex(index === 0 ? 1 : index - 1);
    };

    const handleNext = () => {
        setIndex(index === 1 ? 0 : index + 1);
    };

    return (
        <div className="live-wrapper">
            <div className="container">
                <div className="row align-items-center">

                    <div className="col-md-5 left-content">
                        <div className="live-text-wrapper">
                            <img src={shape} alt="shape" className="splash-img" />
                            <h1 className="live-text">live</h1>
                        </div>
                        <h2 className="stream-text">streams</h2>
                        <button className="install-btn">Install Now</button>
                    </div>

                    <div className="col-md-7">

                        <Carousel
                            activeIndex={index}
                            onSelect={(selectedIndex) => setIndex(selectedIndex)}
                            interval={2500}
                            controls={false}
                            indicators={false}
                            wrap={true}
                        >
                            <Carousel.Item>
                                <div className="double-slide">

                                    <div className="image-wrapper">
                                        <img src={slide1} alt="slide1" />
                                        <div className="overlay">
                                            <div className="play-icon">
                                                <FaPlay />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="image-wrapper">
                                        <img src={slide2} alt="slide2" />
                                        <div className="overlay">
                                            <div className="play-icon">
                                                <FaPlay />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </Carousel.Item>

                            <Carousel.Item>
                                <div className="double-slide">

                                    <div className="image-wrapper">
                                        <img src={slide2} alt="slide2" />
                                        <div className="overlay">
                                            <div className="play-icon">
                                                <FaPlay />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="image-wrapper">
                                        <img src={slide1} alt="slide1" />
                                        <div className="overlay">
                                            <div className="play-icon">
                                                <FaPlay />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </Carousel.Item>

                        </Carousel>

                        <div className="custom-buttons">
                            <button onClick={handlePrev}>
                                <FaChevronLeft />
                            </button>
                            <button onClick={handleNext}>
                                <FaChevronRight />
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Slider;
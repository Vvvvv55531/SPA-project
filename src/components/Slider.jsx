import "bootstrap/dist/css/bootstrap.min.css";
import "./Slider.css"
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel"
import carousel_img_1 from "../images/carousel/back_1.1.png"
import carousel_img_2 from "../images/carousel/back_1.2.png"
import carousel_img_3 from "../images/carousel/back_1.3.png"
import sign_img from "../images/main/header_sign.png"


function Slider() {
    return (
        <article className="slider">
            <div className="slider-main">
                <p className="s-date">МЫ ПОДАЕМ НАПИТКИ, АТМОСФЕРУ И НАСТРОЕНИЕ С 2010 ГОДА</p>
                <p className="s-slogan">ГОРЯЧИЕ НАПИТКИ С ВКУСНЕЙШИМИ ДЕСЕРТАМИ</p>
                <Link to="/menu" className="s-button">ПОСМОТРЕТЬ МЕНЮ
                <img className="h-img-sign" src={sign_img} alt="sign"/></Link>
            </div>
            <div className="slider-back">
                <Carousel>
                <Carousel.Item>
                    <img className="s-carusel-item" src={carousel_img_1} alt="carousel_1"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="s-carusel-item" src={carousel_img_2} alt="carousel_2"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="s-carusel-item" src={carousel_img_3} alt="carousel_3"/>
                </Carousel.Item>
            </Carousel>
            </div>
        </article>

    )
}

export default Slider;

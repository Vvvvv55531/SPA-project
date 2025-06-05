import "./Banner.css"
import sign_img from "../images/main/header_sign.png"
import { Link } from "react-router-dom";


function Banner() {
    return (
        <article className="banner">
            <span className="b-text">СДЕЛАЙТЕ ЗАКАЗ ПРЯМО СЕЙЧАС!</span>
            <Link to="/order" className="b-button">
                <span>СДЕЛАТЬ ЗАКАЗ</span>
                <img className="b-img-sign" src={sign_img} alt="sign"/>
            </Link>
        </article>
    )
}

export default Banner;

import "./Footer.css"
import logo_img from "../images/main/header_logo.png"
import sign_1 from "../images/main/footer_1.png"
import sign_2 from "../images/main/footer_2.png"
import sign_3 from "../images/main/footer_3.png"
import sign_4 from "../images/main/footer_4.png"


function Footer() {
    return (
        <footer className="footer">
            <div className="f-logo">
                <img className="f-img-logo" src={logo_img} alt="logo"/>
                <span className="f-name">BREW</span>
            </div>
            <hr className="f-separator"/>
            <span className="f-info">ул. Чайковского, д. 18, г. Санкт-Петербург, 191123</span>
            <div className="f-icons">
                <img className="f-icon" src={sign_1} alt="icon"/>
                <img className="f-icon" src={sign_2} alt="icon"/>
                <img className="f-icon" src={sign_4} alt="icon"/>
                <img className="f-icon" src={sign_3} alt="icon"/>
            </div>
        </footer>
    )
}

export default Footer;

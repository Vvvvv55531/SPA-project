import "./Footer.css"
import logo_img from "../images/main/header_logo.png"

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-left">
                <div className="f-left-logo">
                   <img className="f-img-logo" src={logo_img} alt="logo"/>
                   <span className="f-name">BREW</span>
                </div>
                <h className="f-name"></h>
                <span className="f-info">ул. Чайковского, д. 18, г. Санкт-Петербург, 191123</span>

            </div>
            <div className="footer-right">
                
            </div>
        </footer>
    )
}

export default Footer;

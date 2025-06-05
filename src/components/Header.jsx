import "./Header.css"
import { Link } from "react-router-dom";
import logo_img from "../images/main/header_logo.png"
import sign_img from "../images/main/header_sign.png"

function Header() {
    return (
        <header>
            <div className="header-top">
                <span className="h-info">ПН-СР 11:00-9:00 
                ⬥ ЧТ-СБ 11:00-10:00
                ⬥ drew.cafe@gmail.com 
                ⬥ 8988-456-87-82 
                ⬥ ул. Чайковского, д. 18, г. Санкт-Петербург, 191123
                </span> 
            </div>
            <div className="header-bottom">
                <div className="h-left-logo">
                   <img className="h-img-logo" src={logo_img} alt="logo"/>
                   <span className="h-name">BREW</span>
                </div>
                <nav className="h-nav">
                    <ul className="h-nav-list">
                        <li><Link className="h-nav-item" to="/" >О НАС</Link></li>
                        <li><Link className="h-nav-item"  to="/menu" >МЕНЮ</Link></li>
                        <li><Link className="h-nav-item"  to="/staff" >ПЕРСОНАЛ</Link></li>
                        <li><Link className="h-nav-item"  to="/contacts" >КОНТАКТЫ</Link></li>
                    </ul>
                </nav>
                <div className="h-right">
                    <Link to="/order" className="h-button">
                        <span>СДЕЛАТЬ ЗАКАЗ</span>
                        <img className="h-img-sign" src={sign_img} alt="sign"/>
                   </Link>
                </div>
            </div>
        </header>
    )
}

export default Header;

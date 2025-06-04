import "./Header.css"
import logo_img from "../images/main/header_logo.png"
import sign_img from "../images/main/header_sign.png"

function Header() {
    return (
        <header>
            <div className="header-top">
                <div className="h-left">
                    <span className="h-info">ПН-СР 11:00-9:00</span> 
                    <span className="h-separator">⬥</span>
                    <span className="h-info">ЧТ-СБ 11:00-10:00</span>
                </div>
                <div className="h-right">
                    <span className="h-info">drew.cafe@gmail.com</span> 
                    <span className="h-separator">⬥</span>
                    <span className="h-info">8988-456-87-82</span>
                    <span className="h-separator">⬥</span>
                    <span className="h-info">ул. Чайковского, д. 18, г. Санкт-Петербург, 191123</span>
                </div>
            </div>
            <div className="header-bottom">
                <div className="h-left-logo">
                   <img className="h-img-logo" src={logo_img} alt="logo"/>
                   <span className="h-name">DREW</span>
                </div>
                <nav className="h-nav">
                    <ul className="h-nav-list">
                        <li className="h-nav-item">ГЛАВНАЯ</li>
                        <li className="h-nav-item">МЕНЮ</li>
                        <li className="h-nav-item">О НАС</li>
                        <li className="h-nav-item">ПЕРСОНАЛ</li>
                        <li className="h-nav-item">КОНТАКТЫ</li>
                    </ul>
                </nav>
                <div className="h-right">
                    <div className="h-button">
                        <span>СДЕЛАТЬ ЗАКАЗ</span>
                        <img className="h-img-sign" src={sign_img} alt="sign"/>
                   </div>
                </div>
            </div>
        </header>
    )
}

export default Header;

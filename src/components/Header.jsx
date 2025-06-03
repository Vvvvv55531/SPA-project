import "./Header.css"

function Header() {
    return (
        <header>
            <div className="header-top">
            
            </div>
            <div className="header-bottom">
                <nav className="h-nav">
                    <ul className="h-nav-list">
                        <li className="h-nav-item">ГЛАВНАЯ</li>
                        <li className="h-nav-item">МЕНЮ</li>
                        <li className="h-nav-item">О НАС</li>
                        <li className="h-nav-item">ПЕРСОНАЛ</li>
                        <li className="h-nav-item">КОНТАКТЫ</li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;

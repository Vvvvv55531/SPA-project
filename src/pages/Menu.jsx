import "./Menu.css"
import Header from "../components/Header"
import Banner from "../components/Banner"
import Footer from "../components/Footer"
import menu from "../data/menu"


function Items(item, index) {
    return (
        <div className="menu-grid">
        {menu.map((item) => (
            <div key={index} className="menu-card">
                <div className="menu-card-content">
                    <h3 className="menu-item-title">
                    {item.title}</h3>
                    <div className="m-img"></div>
                    <p className="menu-item-description">
                    {item.description}</p>
                    <div className="menu-item-footer">
                    <span className="menu-item-category">
                    {item.category}</span>
                    <span className="menu-item-price">
                    {item.price}</span>
                </div>
            </div>
            </div>
        ))}
        </div>
           
    )
}


function Menu() {
    return (
        <>
        <Header />
        <section className="menu-section">
            <div className="m-container">
                <div className="m-section-header">
                    <h1 className="m-section-title">
                    НАШЕ МЕНЮ</h1>
                </div>
                <Items data={menu}/>
             </div>
        </section>
        <Banner />
        <Footer />
        </>
    )
}

export default Menu;

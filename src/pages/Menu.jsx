import "./Menu.css"
import Header from "../components/Header"
import Banner from "../components/Banner"
import Footer from "../components/Footer"
import Testimonial from "../components/Testimonial"
import sign_img from "../images/main/review_sign.png"


const menu = [
	{
		title: "Эспрессо",
		description: "Классический крепкий кофе 30 мл",
		category: "кофейные напитки",
		price: "180 ₽"
	},
	{
		title: "Капучино",
		description: "Эспрессо с молочной пенкой 200 мл",
		category: "кофейные напитки",
		price: "220 ₽"
	},
	{
		title: "Флэт Уайт",
		description: "Двойной эспрессо с молоком 180 мл",
		category: "кофейные напитки",
		price: "240 ₽"
	},
	{
		title: "Раф",
		description: "Кофе с ванильным кремом и пенкой 200 мл",
		category: "кофейные напитки",
		price: "260 ₽"
	},
	{
		title: "Апельсиновый раф",
		description: "Фирменный рецепт с апельсиновым сиропом",
		category: "авторские напитки",
		price: "290 ₽"
	},
	{
		title: "Карамельный латте",
		description: "С карамельным сиропом и солёной пенкой",
		category: "авторские напитки",
		price: "280 ₽"
	},
	{
		title: "Тирамису",
		description: "Классический итальянский десерт",
		category: "десерты",
		price: "320 ₽"
	},
	{
		title: "Чизкейк Нью-Йорк",
		description: "С ванильным соусом и ягодным топпингом",
		category: "десерты",
		price: "350 ₽"
	}
];


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
                    <img className="m-sign" src={sign_img} alt="sign_img"/>
                </div>
                <Items data={menu}/>
             </div>
        </section>
        <Testimonial />
        <Banner />
        <Footer />
        </>
    )
}

export default Menu;

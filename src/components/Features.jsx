import "./Features.css"
import features_back from "../images/main/back_3.png"
import card_1 from "../images/main/card_1.png"
import card_2 from "../images/main/card_2.png"
import card_3 from "../images/main/card_3.png"
import card_4 from "../images/main/card_4.png"


const cards = [
    {
        name: "ОТЛИЧНОЕ КОФЕ",
        description: "Свежая обжарка, насыщенный вкус. Начни день с идеальной чашкой",
        image: card_1,
        link: "ЗАКАЗ"
    },
    {
        name: "ДРУГИЕ НАПИТКИ",
        description: "Авторские чаи и лимонады.  Для любого настроения — в любое время",
        image: card_2,
        link: "МЕНЮ"

    },
    {
        name: "ЛУЧШИЕ БАРИСТЫ",
        description: "Профессионалы своего дела.  Каждый заказ — с душой и мастерством",
        image: card_3,
        link: "БАРИСТЫ"

    },
    {
       name: "ДЕСЕРТЫ",
        description: "Свежие и нежные, в идеальной паре с кофе. Сделай момент особенным",
        image: card_4,
        link: "МЕНЮ"

    }
    
];


function Card({data}) {
    return  (
    <div className="features-top">
        {data.map((item, index) => (
            <div className="f-card" key={index}>
                <img className="f-card-img" src={item.image} alt="card_img"/>
                <p className="f-card-name">{item.name}</p>
                <p className="f-card-desc">{item.description}</p>
                <p className="f-card-link">{item.link}</p>
            </div>
        ))}
   </div>
   )
}

function Features() {
    return (
        <article className="features">
            <img className="features-back" src={features_back} alt="features_bg"></img>
            <Card data={cards} />
            <div className="features-bottom">
                <div className="f-text-block"><p className="f-card-name f-big-text">
                    Насладитесь исключительным вкусом</p>
                    <p className="f-card-desc f-small-text">
                    Наш кофе — это больше, чем напиток.  
                    Это утренний ритуал, который пробуждает,  
                    это пауза посреди дня, наполненная ароматом  
                    жареных зёрен и теплом заботы.  
                    Мы выбираем только лучшие сорта,  
                    обжариваем их с точностью, чтобы раскрыть  
                    насыщенный вкус, в котором есть история,  
                    настроение и любовь к деталям</p>
                    <p className="f-card-link f-small-text">СДЕЛАТЬ ЗАКАЗ</p></div>
                <div className="f-big-img"></div>
                <div className="f-small-img"></div>
            </div>
        </article>
    )
}

export default Features;

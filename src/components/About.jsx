import "./About.css"
import sign_1 from "../images/main/about_sign.png"
import sign_2 from "../images/main/about_sign_2.png"
import sign_3 from "../images/main/about_sign_3.png"
import about_img from "../images/main/a_img.png"
import about_back from "../images/main/back_2.png"


const points = [
    {
        url: sign_1 ,
        name: "Эффективность",
        description:"Мы выстроили чёткие процессы – от выбора зерна до подачи напитка"
    },
    {
        url: sign_2 ,
        name: "Командная работа",
        description:"Наши бариста, кассиры и управляющие – как единый механизм."
    },
    {
        url: sign_3,
        name: "Потрясающий рост",
        description:"Мы растём не только в цифрах, но и в качестве."
    },
];


function Text({data}) {
    return  (
    <div className="a-text">
        <span className="a-name">ПОЧЕМУ BREW – ВАШ ВЫБОР?</span>
        <span className="a-desc">Наш приоритет – ваши вкусы, 
        ваши привычки, ваше настроение. Именно поэтому сотни 
        гостей выбирают Brew каждый день</span>
        {data.map((item, index) => (
            <div className="a-line" key={index}>
                <img className="a-point-img" src={item.url} alt="card_img"/>
                <div className="a-points">
                    <span className="a-point-name">
                    {item.name}</span>
                    <span className="a-point-desc">
                    {item.description}</span>
                </div>                    
            </div>
        ))}
    </div>
   )
}

function About() {
    return (
        <article className="about">
        <img className="about-back" src={about_back} alt="about-back"/>
            <div className="about-main">
                <Text data={points}/>
                <img className="a-img" src={about_img} alt="about_img"/>
            </div>
        </article>
    )
}

export default About;

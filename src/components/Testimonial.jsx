import "./Testimonial.css"
import back_img from "../images/main/back_4.png"
import sign_img from "../images/main/review_sign.png"
import sign_img_2 from "../images/main/review_sign_2.png"
import sign_img_3 from "../images/main/review_sign_3.png"
import img_1 from "../images/main/review_1.png"
import img_2 from "../images/main/review_2.png"


const reviews = [
    {
        url: img_1,
        name: "Анна Колесникова, гастрономический обозреватель",
        description:`Фирменный капучино был приготовлен безупречно – насыщенный, бархатистый, 
        с тонким ореховым послевкусием. Идеально дополнил его свежий десерт дня и лёгкая 
        подача сезонных угощений. Подача изысканна – чувствуется вкус и внимание к деталям со стороны бариста.
        Рекомендую всем, кто ищет не просто кофе, а атмосферное и запоминающееся кофейное впечатление`
    },
    {
        url: img_2,
        name: "Михаил Орлов, эксперт по кофе и гастрокультуре",
        description:`Эспрессо оказался удивительно сбалансированным – плотный, с насыщенным ароматом и лёгкой 
        шоколадной горчинкой. Десерт из лимонного крема приятно освежал и подчёркивал вкус кофе.
        Визуальная подача – лаконичная и стильная, сразу чувствуется почерк профессионалов.
        Это место – идеальный выбор для тех, кто ценит вкус, эстетику и уют`
    }
];

function Review({data}) {
    return  (
    <div className="t-reviews">
        {data.map((item, index) => (
            <div key={index} className="t-review">
                <div className="t-review-top">
                    <img className="t-review-img" src={item.url} alt="review_img"/>
                    <span className="t-review-desc">{item.description}</span>
                </div>
                 <div className="t-review-bottom">
                    <img className="t-sign-2" src={sign_img_2} alt="sign_img"/>
                    <span className="t-review-name">{item.name}</span>
                    <img className="t-sign-3" src={sign_img_3} alt="sign_img"/>
                 </div>
            </div>
        ))}
    </div>
   )
}

function Testimonial() {
    return (
        <article className="testimonal">
            <img className="t-image" src={back_img} alt="back_img"/>
            <div className="testimonal-name">
                <span className="t-text">ЧТО ГОВОРЯТ ЭКСПЕРТЫ?</span>
                <img className="t-sign" src={sign_img} alt="sign_img"/>
            </div>
            <Review data={reviews}/>
        </article>
    )
}

export default Testimonial;

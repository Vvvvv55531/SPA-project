import "./Counter.css"
import sign_img from "../images/main/counter_sign.png"


const numbers = [
    {
        number: "12",
        name: "Сортов кофейных зёрен",
    },
    {
        number: "15",
        name: "Свежих вкусов",
    },
    {
        number: "10",
        name: "Уникальных десертов",
    },
    {
        number: "80",
        name: "Довольных гостей ежедневно",
    }
];

function Number({data}) {
    return  (
    <div className="counter-left">
        {data.map((item, index) => (
             <div key={index} className="c-numbers">
                <span className="c-number">{item.number}</span>
                <span className="c-name">{item.name}</span>
            </div>
        ))}
   </div>
   )
}

function Counter() {
    return (
        <article className="counter">
            <Number data={numbers}/>
            <div className="counter-right">
                <p className="c-big-text">САМОЕ НАДЕЖНОЕ ЗАВЕДЕНИЕ</p>
                <p className="c-small-text">
                Мы — место, где стабильность важнее трендов.  
                Здесь каждый гость уверен: любимый напиток  
                всегда будет приготовлен безупречно.  
                С момента открытия и до сих пор  
                мы храним атмосферу уюта, доброжелательности  
                и безупречного вкуса.  
                К нам приходят не только за кофе,  
                а за доверием, которое мы заслужили
                </p>
                <ul className="c-points">
                    <li><img className="c-sign" src={sign_img} alt="sign_img">
                    </img>a</li>
                    <li><img className="c-sign" img src={sign_img} alt="sign_img">
                    </img>b</li>
                    <li><img className="c-sign" img src={sign_img} alt="sign_img">
                    </img>c</li>
                </ul>
            </div>
        </article>
    )
}

export default Counter;

import "./Testimonial.css"


const reviews = [
    {
        url: "",
        name: "ABCD",
        description:"abcd"
    },
    {
        url: "",
        name: "ABCD",
        description:"abcd"
    }
];

function Review({data}) {
    return  (
    <div className="t-reviews">
        {data.map((item, index) => (
            <div key={index} className="t-review">
                <span className="t-review-name">{item.name}</span>
                <span className="t-review-desc">{item.description}</span>
            </div>
        ))}
    </div>
   )
}

function Testimonial() {
    return (
        <article className="testimonal">
            <div className="testimonal-name">
                <span className="t-text">ABCD</span>
            </div>
            <Review data={reviews}/>
        </article>
    )
}

export default Testimonial;


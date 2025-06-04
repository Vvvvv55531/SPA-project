import "./About.css"


const points = [
    {
        url: "",
        name: "ABCD",
        description:"abcd"
    },
    {
        url: "",
        name: "ABCD",
        description:"abcd"
    },
    {
        url: "",
        name: "ABCD",
        description:"abcd"
    },
];

function Text({data}) {
    return  (
    <div className="a-text">
        <span className="a-name">ABCD</span>
        <span className="a-desc">ABCD</span>
        {data.map((item, index) => (
            <div key={index} className="a-points">
                <span className="a-point-name">{item.name}</span>
                <span className="a-point-desc">{item.description}</span>
            </div>
        ))}
    </div>
   )
}

function About() {
    return (
        <article className="about">
            <div className="about-main">
                <Text data={points}/>
                <div className="a-img"></div>
            </div>
        </article>
    )
}

export default About;

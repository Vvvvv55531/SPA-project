import "./Staff.css"
import Header from "../components/Header"
import Banner from "../components/Banner"
import Footer from "../components/Footer"
import About from "../components/About";


const staff = [
    {
      name: "АРТЁМ САМОЙЛОВ",
      position: "Главный бариста",
      bio: "Профессионал с 10-летним опытом, чемпион национальных соревнований по латте-арту 2020 года.",
      image: "/images/kuman.jpg"
    },
    {
      name: "ИВАН КОРОЛЁВ",
      position: "Обжарщик кофе",
      bio: "Специалист по обжарке зёрен, создал 5 уникальных кофейных смесей для нашего заведения.",
      image: "/images/benjamin.jpg"
    },
    {
      name: "АННА РУДНЕВА",
      position: "Тренер барист",
      bio: "Обучила более 50 бариста, автор методики 'Идеальный эспрессо за 5 шагов'",
      image: "/images/matthew.jpg"
    },
    {
      name: "АННА РУДНЕВА",
      position: "Тренер барист",
      bio: "Обучила более 50 бариста, автор методики 'Идеальный эспрессо за 5 шагов'",
      image: "/images/matthew.jpg"
    },
    {
      name: "АННА РУДНЕВА",
      position: "Тренер барист",
      bio: "Обучила более 50 бариста, автор методики 'Идеальный эспрессо за 5 шагов'",
      image: "/images/matthew.jpg"
    },
    {
      name: "АННА РУДНЕВА",
      position: "Тренер барист",
      bio: "Обучила более 50 бариста, автор методики 'Идеальный эспрессо за 5 шагов'",
      image: "/images/matthew.jpg"
    }
  ];


function Staff(item) {
    return (
        <>
        <Header />
        <section className="s-team-section">
          <div className="s-container">
              <div className="s-section-header">
              <h2 className="s-section-subtitle">НАШИ БАРИСТЫ</h2>
              <h1 className="s-section-title">
              КОМАНДА ПРОФЕССИОНАЛОВ</h1></div>

              <div className="s-team-grid">
                {staff.map((item, index) => (
                <div key={index} className="s-team-card">
                  <div className="s-card-image">
                      <img src={item.image} alt={item.name} />
                  </div>

                  <div className="s-card-content">
                    <h3 className="s-barista-name">
                      {item.name}</h3>
                    <p className="s-barista-position">
                      {item.position}</p>
                    <p className="s-barista-bio">
                      {item.bio}</p>
                  </div>
               </div>
                ))}
              </div>
          </div>
        </section>
         <About />
        <Banner />
        <Footer />
        </>
    )
}

export default Staff;

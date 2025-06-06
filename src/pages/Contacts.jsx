import "./Contacts.css"
import Header from "../components/Header"
import Banner from "../components/Banner"
import Footer from "../components/Footer"


function Contacts() {
    return (
        <>
        <Header />
        <section className="contacts-section">
            <div className="c-container">
                <div className="c-section-header">
                <h2 className="c-section-subtitle">СВЯЖИТЕСЬ С НАМИ</h2>
                <h1 className="c-section-title">КОНТАКТНАЯ ИНФОРМАЦИЯ</h1>
                <p className="c-section-description">
                    Мы всегда рады вашим вопросам и предложениям. 
                    Посетите нашу уютную кофейню или свяжитесь удобным способом
                </p>
                </div>

                <div className="contacts-content">
                <div className="contacts-info">
                    <div className="contacts-block">
                    <div className="contacts-icon"></div>
                    <div>
                        <h3 className="contacts-title">Телефон и Email</h3>
                        <p className="contacts-text">8 (988) 456-87-82 </p>
                        <p className="contacts-text">drew.cafe@gmail.com</p>
                    </div>
                    </div>

                    <div className="contacts-block">
                        <div className="contacts-icon">
                        
                        </div>
                    <div>
                        <h3 className="contacts-title">Наш адрес</h3>
                        <p className="contacts-text">ул. Чайковского, д. 18</p>
                        <p className="contacts-text">г. Санкт-Петербург, 191123</p>
                    </div>
                    </div>

                    <div className="contacts-block">
                    <div className="contacts-icon"></div>
                    <div>
                        <h3 className="contacts-title">Часы работы</h3>
                        <p className="contacts-text">ПН-СР 11:00-9:00</p>
                        <p className="contacts-text">ЧТ-СБ 11:00-10:00</p>
                    </div>
                    </div>
                </div>

                <div className="c-about-info">
                    <h3 className="c-about-title">О нашей кофейне</h3>
                    <p className="c-about-text">
                    Brew - это место, где каждый найдет свой идеальный кофе. Мы тщательно отбираем зерна 
                    и готовим напитки с любовью. Наши бариста - настоящие профессионалы, которые знают все 
                    секреты приготовления идеального кофе. Приходите к нам за вкусом, уютом и отличным настроением!
                    </p>
                </div>
                </div>
            </div>
        </section>
        <Banner />
        <Footer />
        </>
    )
}

export default Contacts;

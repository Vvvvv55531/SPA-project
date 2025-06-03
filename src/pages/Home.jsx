import Header from "../components/Header"
import Slider from "../components/Slider"
import Features from "../components/Features"
import CTA from "../components/CTA"
import Menu from "../components/Menu"
import Counter from "../components/Counter"
import Order from "../components/Order"
import About from "../components/About"
import Testimonial from "../components/Testimonial"
import Blog from "../components/Blog"
import Banner from "../components/Banner"
import Footer from "../components/Footer"

export function Home() {
    return (
        <>
        <Header />
        <Slider />
        <Features />
        <CTA />
        <Menu />
        <Counter />
        <Order />
        <About />
        <Testimonial />
        <Blog />
        <Banner />
        <Footer />
        </>
    )
}

import AboutUs from '../../components/AboutUs'
import Card from '../../components/Card'
import Footer from '../../components/Footer'
import LoginArea from '../../components/Login'
import NavBar from '../../components/NavBar'


export default function Home(){
    return(
        <div>
            <NavBar />
            <Card />
            <LoginArea />
            <AboutUs />
            <Footer />
        </div>
    )
}
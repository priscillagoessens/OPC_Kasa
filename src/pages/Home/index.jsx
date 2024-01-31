import Banner from "../../components/Banner"
import CardSection from "../../components/Body/CardSection"
import imgHome from '../../assets/img/Beach.jpg'
import './_Home.scss'

function Home() {
  return (
    <div className="main-section">
        <Banner source={imgHome}/>
        <CardSection/>
    </div>
  )
}

export default Home
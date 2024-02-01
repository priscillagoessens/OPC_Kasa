import Banner from "../../components/Banner"
import CardSection from "../../components/Body/CardSection"
import imgHome from '../../assets/img/Beach.jpg'
import './_Home.scss'


function Home() {
  const homeTitle = "Chez vous, partout et ailleurs"
  return (
    <div className="main-section">
        <Banner source={imgHome} title={homeTitle}/>
        <CardSection/>
    </div>
  )
}

export default Home
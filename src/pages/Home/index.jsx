import Banner from "../../components/Banner/Banner"
import CardSection from "../../components/Cards/CardSection"
import imgHome from '../../assets/img/Beach.jpg'

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
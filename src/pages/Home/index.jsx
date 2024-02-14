import Banner from "../../components/Banner/Banner"
import Gallery from "../../components/Gallery/Gallery"
import imgHome from '../../assets/img/Beach.jpg'

function Home() {
  const homeTitle = "Chez vous, partout et ailleurs"
  return (
    <div className="main-section">
        <Banner source={imgHome} title={homeTitle}/>
        <Gallery/>
    </div>
  )
}

export default Home
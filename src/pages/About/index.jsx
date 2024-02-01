import Banner from "../../components/Banner"
import imgAbout from '../../assets/img/Mountains.jpg'
import Dropdown from "../../components/Dropdown"

function About(){
    return(
        <div className="main-section">
            <Banner source={imgAbout}/>
            <Dropdown/>
        </div>
    )    
}

export default About
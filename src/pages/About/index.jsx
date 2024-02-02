import Banner from "../../components/Banner"
import imgAbout from '../../assets/img/Mountains.jpg'
import Dropdown from "../../components/Dropdown"
import datas from '../../datas/dropdowns.json';

function About(){
    return(
        <div className="main-section">
            <Banner source={imgAbout}/>
            <div className="dropdown-section">
                {datas.map((data)=>
                    <Dropdown description={data.content} title={data.title} key={data.title}/>
                )}  
            </div>
        </div>
    )    
}

export default About
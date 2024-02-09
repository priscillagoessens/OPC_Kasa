import Logement from "../../components/Housing/FicheLogement"
import Carousel from "../../components/Housing/Carousel"
import { useParams } from 'react-router-dom'
import items  from '../../datas/logements.json'

function Logements() {
    const {id} = useParams() //useParams je recupere le parametre de l'url 
    const item = items.find(item => item.id === id) //cherche l'id correspondant a l'id extrait 
    return ( 
        <div className="housing-container">
            <Carousel images={item.pictures} />
            <Logement title={item.title} location={item.location} />
        </div>
    )
}
 
export default Logements
import Logement from "../../components/Housing/FicheLogement"
import Carousel from "../../components/Housing/Carousel"
import { useParams } from 'react-router-dom'
import items  from '../../datas/logements.json'

function Logements() {
    const {id} = useParams()
    const itemImg = items.find(item => item.id === id)
    return ( 
        <div>
            <Carousel images={itemImg}/>
            <Logement/>
        </div>
    )
}
 
export default Logements
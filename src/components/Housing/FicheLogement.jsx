import items  from '../../datas/logements.json'
import { useParams } from 'react-router-dom'

const Logement = () => {
    const {id} = useParams()
    const item = items.find(item => item.id === id)
    return ( 
        <div>
            <h1 >{item.title}</h1>
            <h2 >{item.location}</h2>
        </div>
    )
}
 
export default Logement
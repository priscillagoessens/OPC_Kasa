import Logement from "../../components/Housing/FicheLogement"
import Carousel from "../../components/Housing/Carousel"
import { useParams, Navigate } from 'react-router-dom'
import items  from '../../datas/logements.json'

function Logements() {
    const {id} = useParams() //useParams je recupere le parametre de l'url 
    const item = items.find(item => item.id === id) //cherche l'element correspondant a l'id extrait 

    //si il y a un item alors on return le composant sinon on redirige vers la page error
    return ( 
        <>
            {item?(
                <div className="housing-container">
                    <Carousel images={item.pictures} />
                    <Logement title={item.title} 
                                location={item.location}
                                tags={item.tags} 
                                name={item.host.name}
                                picture={item.host.picture}
                                rating={item.rating}
                                description={item.description}
                                equipements={item.equipments}/>
                </div>
            ) : (
                <Navigate replace to="/*" />
          )}
        </>
    )
}
 
export default Logements
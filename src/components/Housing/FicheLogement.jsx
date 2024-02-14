import Rating from "../Rating"
import Dropdown from "../Dropdown/Dropdown"

function Logement({title, location, tags, name, picture, rating, description, equipements}){
    return ( 
        <div className="section-location">
            <div className="section-location_title">
                <h2>{title}</h2>
                <h3>{location}</h3>
            </div>
            <div className="section-location_tags">
                {tags.map((tag, title) => (
                    <div key={title} className="section-location_tags-button">{tag}</div>
                ))}
            </div>
            
            <div className="section-location_container-host">
                <Rating rating={rating}/>
                <div className="section-location_container-host-presentation">
                    <span>{name}</span>
                    <img src={picture} alt="" /> 
                </div>  
            </div>
            <Dropdown description={description} title="Description"/>
            <Dropdown equipements={equipements} title="Equipements"/>
        </div>
    )
}
 
export default Logement
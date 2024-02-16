import Rate from "../Rate/Rate"
import Dropdown from "../Dropdown/Dropdown"

function Logement({title, location, tags, name, picture, rating, description, equipements}){
    return ( 
        <div className="section-location">
            <div className="section-location_container">
                <div className="section-location_container_info">
                <div className="section-location_container_info_title">
                    <h2>{title}</h2>
                    <h3>{location}</h3>
                </div>
                <div className="section-location_container_info_tags">
                    {tags.map((tag, title) => (
                        <div key={title} className="section-location_container_info_tags-button">{tag}</div>
                    ))}
                </div>
                </div>
                
                
                <div className="section-location_container_host">
                    <Rate rating={rating}/>
                    <div className="section-location_container_host-presentation">
                        <span>{name}</span>
                        <img src={picture} alt={name} /> 
                    </div>  
                </div>
            </div>
            
            <div className="section-location_container-dropdown">
                <Dropdown description={description} title="Description"/>
                <Dropdown equipements={equipements} title="Equipements"/>
            </div>
        </div>
    )
}
 
export default Logement
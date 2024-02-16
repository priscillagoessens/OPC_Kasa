import Cards from "../Cards/Cards"
import items  from '../../datas/logements.json'
import { Link } from "react-router-dom";

function Gallery() {
    return (
      <div className='cards-section'>
        <div className='cards-section_container'>
          <ul className='cards-container'>
            {items.map((item) => (
              <Link to={`/logements/${item.id}`} key={item.id} className="cards-container-link">
                <Cards cover={item.cover} title={item.title} id={item.id}/>
              </Link>
            ))}
          </ul>	
        </div>
      </div>
    )
  }
  
  export default Gallery
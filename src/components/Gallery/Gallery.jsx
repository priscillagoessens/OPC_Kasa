import Cards from "../Cards/Cards"
import items  from '../../datas/logements.json'
import { Link } from "react-router-dom";

function Gallery() {
    return (
      <div className='gallery-section'>
        <div className='gallery-section_container'>
          <ul className='gallery-container'>
            {items.map((item) => (
              <Link to={`/logements/${item.id}`} key={item.id}>
                <Cards cover={item.cover} title={item.title} id={item.id}/>
              </Link>
            ))}
          </ul>	
        </div>
      </div>
    )
  }
  
  export default Gallery
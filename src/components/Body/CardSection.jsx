import Cards from "./Cards"
import './_CardSection.scss'
import items  from '../../datas/logements.json'

function CardSection() {
    return (
      <div className='cards-section'>
        <div className='cards-section_container'>
        <ul className='cards-container'>
          {items.map((item) => (
              <Cards cover={item.cover} title={item.title} id={item.id}/>
            ))}
            </ul>	
        </div>
      </div>
    )
  }
  
  export default CardSection
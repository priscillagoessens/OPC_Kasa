import Cards from "./Cards"
import './_CardSection.scss'
function CardSection() {
    return (
      <div className='cards-section'>
        <div className='cards-section_container'>
            <Cards />
        </div>
      </div>
    )
  }
  
  export default CardSection
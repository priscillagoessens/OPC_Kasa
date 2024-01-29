import items  from '../../datas/logements.json'
import './_Cards.scss'

function Cards() {
	return (
		<>
			<ul className='cards-container'>
				{items.map((item) => (
					<li key={item.id} className='cards-container_item'>
                        <img className='cards-container_item_img' src={item.cover} alt="" />
                        <span className='cards-container_item_title'>{item.title}</span>
                    </li>
				))}
			</ul>
		</>
	)
}

export default Cards
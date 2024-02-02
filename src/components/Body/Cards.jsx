import './_Cards.scss'

function Cards({cover,title,id}) {
	return (
		<li key={id} className='cards-container_item'>
			<img className='cards-container_item_img' src={cover} alt={title} />
			<span className='cards-container_item_title'>{title}</span>
		</li>
	)
}

export default Cards
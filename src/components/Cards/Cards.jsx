function Cards({cover,title}) { //props:{cover, title}
	return (
		<li  className='cards-container_item'>
			<img className='cards-container_item_img' src={cover} alt={title} />
			<span className='cards-container_item_title'>{title}</span>
		</li>
	)
}

export default Cards
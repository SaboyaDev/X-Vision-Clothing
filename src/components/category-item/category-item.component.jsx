import './category-item.styles.scss'

const CategoryItem = ({ category }) => {
	const { size, imageUrl, title } = category

	return (
		<div className={`${size} menu-item`}>
			<div
				className='background-image'
				style={{
					backgroundImage: `url(${imageUrl})`,
				}}
			/>
			<div className='content'>
				<h1 className='title'>{title.toUpperCase()}</h1>
				<span className='subtitle'>SHOP NOW</span>
			</div>
		</div>
	)
}

export default CategoryItem

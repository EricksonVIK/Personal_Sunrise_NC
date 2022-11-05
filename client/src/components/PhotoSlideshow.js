import React, { useEffect, useState } from 'react'

const imageArr = [
	'http://via.placeholder.com/360x640/0000FF',
	'http://via.placeholder.com/360x640/FF0000',
	'http://via.placeholder.com/360x640/008000',
]

const PhotoSlideshow = () => {
	const [index, setIndex] = useState(0)

	useEffect(() => {
		setTimeout(
			() =>
				setIndex((prevIndex) =>
					prevIndex === imageArr.length - 1 ? 0 : prevIndex + 1
				),
			2500
		)
		return () => {}
	}, [index])

	return (
		<div className="slideshow">
			<div
				className="slider"
				style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
			>
				{imageArr.map((src, index) => {
					return <img src={src} key={index} alt=""></img>
				})}
			</div>
		</div>
	)
}

export default PhotoSlideshow

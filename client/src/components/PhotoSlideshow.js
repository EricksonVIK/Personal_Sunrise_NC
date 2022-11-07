import React, { useEffect, useRef, useState } from 'react'
// map over assets/images for array
import imageArray from '../assets/images/imageArray'

const PhotoSlideshow = () => {
	const [index, setIndex] = useState(0)
	const timeoutRef = useRef(null)

	const resetTimeout = () => {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current)
		}
	}

	useEffect(() => {
		resetTimeout()
		timeoutRef.current = setTimeout(
			() =>
				setIndex((prevIndex) =>
					prevIndex === imageArray.length - 1 ? 0 : prevIndex + 1
				),
			2500
		)
		return () => {
			resetTimeout()
		}
	}, [index])

	return (
		<div className="slideshow">
			<div
				className="slider"
				style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
			>
				{imageArray.map((src, index) => {
					return <img src={src} key={index} alt=""></img>
				})}
			</div>
			<div className="slideshowDots">
				{imageArray.map((src, ind) => {
					return (
						<div
							key={ind}
							className={`slideshowDot ${index === ind ? 'active' : ''}`}
							onClick={() => setIndex(ind)}
						></div>
					)
				})}
			</div>
		</div>
	)
}

export default PhotoSlideshow

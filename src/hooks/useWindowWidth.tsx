import {useEffect, useState} from 'react'

const useWindowWidth = () => {
	const [windowWidth, setWindowWidth] = useState(0)
	useEffect(() => {
		const windowResizeHandler = () => {
			setWindowWidth(window.innerWidth)
		}
		window.addEventListener('resize', windowResizeHandler)
		return () => window.removeEventListener('resize', windowResizeHandler)
	}, [])
	return windowWidth;
}

export default useWindowWidth;



import {useState, useEffect, RefObject} from 'react'

const useScrollPosition = (element: RefObject<HTMLDivElement>) => {
	const [scrollPosition, setScrollPosition] = useState(0)
	useEffect(() => {
		const scrollHandler: any = (e: WheelEvent) => {
			if (e.deltaY !== 0)
				e.preventDefault()
			const rect = element.current!.getClientRects()[0]
			const isEnd = scrollPosition >= -(window.innerHeight - rect.height - 80)
			if (e.deltaX < -50) {
			}
			if (isEnd) {
				if (e.deltaY <= 0)
					setScrollPosition(scrollPosition + e.deltaY)
			}
			else if (scrollPosition < 0) {
				if (e.deltaY >= 0)
					setScrollPosition(0)
			}
			else
				setScrollPosition(scrollPosition + e.deltaY)
		}
		window.addEventListener('mousewheel', scrollHandler, {passive: false})
		return () => window.removeEventListener('mousewheel', scrollHandler)
	}, [scrollPosition, element])
	return scrollPosition;
}

export default useScrollPosition;

import React, {useRef, useEffect} from 'react'
import {Switch, Route} from 'react-router-dom'

import {Container} from '../styled'
import LandingPage from './LandingPage'
import PageLayout from './PageLayout'


const Pages: React.FC = () => {
	const element = useRef(HTMLDivElement.prototype)
	useEffect(() => {
		const wheelHandler: any = (e: WheelEvent) => {
			const end = element.current.offsetHeight + 60 - window.innerHeight
			if (window.scrollY >= end && e.deltaY > 0)
				e.preventDefault()
		}
		window.addEventListener('mousewheel', wheelHandler);
		return () => window.removeEventListener('mousewheel', wheelHandler);
	}, [])
	return <Container
		ref={element}
		width='100%'
		display='flex'
		flexDirection='column'
		alignItems='center'
	>
		<Switch>
			<Route path='/' exact >
				<LandingPage />
			</Route>
			<Route path='/front-end'>
				<PageLayout
					title={'STUDY'}
					subTitle={'front-end'}
				/>
			</Route>
			<Route path='/back-end'>
				<PageLayout
					title={'STUDY'}
					subTitle={'back-end'}
				/>
			</Route>
			<Route path='/algorithm'>
				<PageLayout
					title={'STUDY'}
					subTitle={'algorithm'}
				/>
			</Route>
			<Route path='/article'>
				<PageLayout
					title={'ARTICLE'}
				/>
			</Route>
			<Route path='/works'>
				<PageLayout
					title={'WORKS'}
				/>
			</Route>
			<Route path='/tags'>
				<PageLayout
					title={'TAGS'}
				/>
			</Route>
			<Route path='/tags/:tag'>
				<PageLayout
					title={'TAGS'}
				/>
			</Route>
		</Switch>
	</Container>
}


export default Pages;

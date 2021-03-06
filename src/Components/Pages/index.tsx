import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import {Container} from '../styled'
import LandingPage from './LandingPage'
import PageLayout from './PageLayout'
import WritePost from './WritePost'


const Pages: React.FC = () => {
	return <Container
		width='100%'
		display='flex'
		flexDirection='column'
		alignItems='center'
	>
		<Switch>
			<Route exact path="/">
				<Redirect to="/home" />
			</Route>
			<Route path='/home' >
				<LandingPage />
			</Route>
			<Route path='/list/front-end'>
				<PageLayout
					title={'STUDY'}
					subTitle={'front-end'}
				/>
			</Route>
			<Route path='/list/back-end'>
				<PageLayout
					title={'STUDY'}
					subTitle={'back-end'}
				/>
			</Route>
			<Route path='/list/algorithm'>
				<PageLayout
					title={'STUDY'}
					subTitle={'algorithm'}
				/>
			</Route>
			<Route path='/list/article'>
				<PageLayout
					title={'ARTICLE'}
				/>
			</Route>
			<Route path='/list/works'>
				<PageLayout
					title={'WORKS'}
				/>
			</Route>
			<Route path='/list/tags'>
				<PageLayout
					title={'TAGS'}
				/>
			</Route>
			<Route path='/tags/:tag'>
				<PageLayout
					title={'TAGS'}
				/>
			</Route>
			<Route path='/post/:postId'>
				<PageLayout
				/>
			</Route>
			<Route path='/write'>
				<WritePost />
			</Route>
			<Route path='/update/:postId'>
				<WritePost />
			</Route>
		</Switch>
	</Container>
}


export default Pages;

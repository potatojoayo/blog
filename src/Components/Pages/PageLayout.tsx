import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {useSelector} from 'react-redux'


import TagList from './TagList'
import {RootState} from '../../store'
import Post from './Post'
import {Container} from '../styled'
import List from './List'


interface PageLayoutProps {
	title?: string;
	subTitle?: string;
	children?: React.ReactNode
}


const PageLayout: React.FC<PageLayoutProps> = ({title, subTitle}) => {

	const themeState = useSelector((state: RootState) => state.themeState);
	const theme = themeState.theme;

	return <Container
		className='page-layout'
		width='100%'
		display='flex'
		justifyContent='center'
		minHeight='94vh'
		transition='background-color ease .2s'
	>
		<Container
			width='100%'
			maxWidth='1000px'
			display='flex'
			flexDirection='column'
			padding='20px 30px'
		>
			<Switch>
				<Route path={`/list/tags`} >
					<TagList />
				</Route >
				<Route path={`/tags/:tag`}  >
					<List
						title={title!}
						subTitle={subTitle!}
						theme={theme}
					/>
				</Route>
				<Route path={`/list/:category`}  >
					<List
						title={title!}
						subTitle={subTitle!}
						theme={theme}
					/>
				</Route>
				<Route path={`/post/:postId`}>
					<Post />
				</Route >
			</Switch>
		</Container>
	</Container>
}


export default PageLayout;

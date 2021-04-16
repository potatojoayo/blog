import React from 'react';
import {useSelector, useDispatch} from 'react-redux'

import Container from './Components/styled/Container'
import NavBar from './Components/NavBar'
import {RootState} from './store'
import Pages from './Components/Pages'
import Notifier from './Components/Notifier'
import {toggleNotifier} from './store/notifier/action'
import Snackbar from './Components/Snackbar'
import SideMenu from './Components/SideMenu'



const App: React.FC = () => {
	const themeState = useSelector((state: RootState) => state.themeState)
	const notifierState = useSelector((state: RootState) => state.notifierState)
	const isSideMenuOpen = useSelector((state: RootState) => state.sideMenuState).isSideMenuOpen
	const currentTheme = themeState.theme;
	const dispatch = useDispatch()
	return (
		<Container
			backgroundColor={
				notifierState.isOpen ? themeState.isDark ? 'rgba(0,0,0,.8)'
					: 'rgba(0,0,0,0.5)'
					: currentTheme.background}
			display='flex'
			width='100vw'
			height='100vh'
			transition='background-color ease-in-out .2s'
			position='relative'
			overflow='hidden'
			justifyContent='flex-start'
			onClick={
				(e) => {
					e.preventDefault()
					if (notifierState.isOpen)
						dispatch(toggleNotifier())
				}
			}
		>
			<SideMenu></SideMenu>
			<Container
				width={isSideMenuOpen ? 'calc(100%-230px)' : '100%'}
				position='relative'
				flexGrow={1}
				display='flex'
				flexDirection='column'
			>
				<NavBar />
				<Pages />
			</Container>
			<Notifier
				title='Email'
				content='potatojoayo@gmail.com'
				enableCopyContent={true}
				borderRadius='15px'
				boxShadow={'5px 5px 1px rgba(0,0,0,0.3)'}
			/>
			<Snackbar
			/>
		</Container>
	)
}

export default App;

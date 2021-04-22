import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'

//TODO: API
import {test, test2} from './api/test'

import './utill/app.css'
import {pushPosts} from './store/post/action'
import Container from './Components/styled/Container'
import NavBar from './Components/NavBar'
import {RootState} from './store'
import Pages from './Components/Pages'
import Notifier from './Components/Notifier'
import {toggleNotifier} from './store/notifier/action'
import Snackbar from './Components/Snackbar'
import SideMenu from './Components/SideMenu'
import {setWindowSize} from './store/windowSize/action'
import {breakpoints, DISPLAY_SIZE} from './utill/media_query';
import {toggleSideMenu} from './store/sideMenu/action';
import {Category} from './global';
import {CSSObject} from '@emotion/serialize';


const App: React.FC = () => {
	const notifierState = useSelector((state: RootState) => state.notifierState)
	const isSideMenuOpen = useSelector((state: RootState) => state.sideMenuState).isSideMenuOpen
	const theme = useSelector((state: RootState) => state.themeState).theme
	const dispatch = useDispatch()
	const windowSize = useSelector((state: RootState) => state.windowSizeState).displaySize
	useEffect(() => {

		// *** TODO:
		dispatch(pushPosts([test, test2], Category.frontEnd))
		const wheelHandler: any = (e: WheelEvent) => {
			if ((window.scrollY <= 0 && e.deltaY < 0))
				e.preventDefault()
		}
		const windowSizeHandler = () => {
			const width = window.innerWidth;
			if (width < breakpoints[0]) {
				dispatch(setWindowSize(DISPLAY_SIZE.MOBILE))
			} else if (width < breakpoints[1]) {
				dispatch(setWindowSize(DISPLAY_SIZE.TABLET))
			} else {
				dispatch(setWindowSize(DISPLAY_SIZE.DESKTOP))
			}
		}
		windowSizeHandler()
		window.addEventListener('resize', windowSizeHandler);
		window.addEventListener('mousewheel', wheelHandler)
		return () => {
			window.removeEventListener('resize', windowSizeHandler)
			window.removeEventListener('mousewheel', wheelHandler)
		}
	}, [dispatch, notifierState.isOpen])
	const filter: CSSObject = {
		content: '""',
		position: 'absolute',
		left: '0px',
		top: '0px',
		width: '100%',
		height: '100%',
		backgroundColor: 'rgba(0,0,0,0.3)',
		zIndex: windowSize === DISPLAY_SIZE.MOBILE ? 5 : 7,
	}


	return (
		<Router>
			<SideMenu></SideMenu>
			<NavBar />
			<Container
				display='flex'
				width='100vw'
				backgroundColor={theme.background}
				height='fit-content'
				before={
					notifierState.isOpen ?
						{...filter} : {}
				}
				mobile={{
					'&:before': isSideMenuOpen || notifierState.isOpen ? {...filter} : {}
				}
				}
				justifyContent='flex-end'
				transition='background-color ease-in-out .2s'
				position='relative'
				onClick={
					() => {
						if (notifierState.isOpen)
							dispatch(toggleNotifier())
						if (windowSize === DISPLAY_SIZE.MOBILE && isSideMenuOpen)
							dispatch(toggleSideMenu())
					}}
			>
				<Container
					width={windowSize === DISPLAY_SIZE.MOBILE ? '100%' : isSideMenuOpen ? `calc(100% - 230px)` : '100%'}
					margin='60px 0 0 0'
					position='relative'
					className='page-container'
					display='flex'
					transition='transform linear .2s, width linear .2s'
					flexDirection='column'
				>
					<Pages />
				</Container>
				<Notifier
					title='Email'
					content='potatojoayo@gmail.com'
					enableCopyContent={true}
					borderRadius='15px'
					boxShadow={'5px 10px 10px rgba(0,0,0,0.3)'}
				/>
				<Snackbar
				/>
			</Container>
		</Router >
	)
}

export default App;

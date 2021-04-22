import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'

import {toggleSideMenu} from '../../store/sideMenu/action'
import {toggleNotifier} from '../../store/notifier/action'
import {RootState} from '../../store'
import {Container, Image, Text, Icon, Button} from '../styled'
import Colors from '../../utill/Colors'
import {avatar, i_study, i_works, i_article, i_backend, i_frontend, i_algorithm, i_chevron_left, at, github, linkedIn} from '../../assets'
import MenuItem from './MenuItem'
import SubItem from './SubItem'
import {DISPLAY_SIZE} from '../../utill/media_query'


const SideMenu: React.FC = () => {
	const isOpen = useSelector((state: RootState) => state.sideMenuState).isSideMenuOpen
	const themeState = useSelector((state: RootState) => state.themeState)
	const isNotifierOpen = useSelector((state: RootState) => state.notifierState).isOpen
	const theme = themeState.theme
	const isDark = themeState.isDark
	const windowSize = useSelector((state: RootState) => state.windowSizeState).displaySize
	const dispatch = useDispatch()
	return (
		<Container
			minWidth={isOpen ? '230px' : '0px'}
			width={isOpen ? '230px' : '0px'}
			backgroundColor={theme.mildBackground}
			position='fixed'
			height='110vh'
			transition='width linear .2s, background-color ease .2s, min-width linear .2s'
			boxShadow={`5px 3px 5px rgba(0,0,0,0.3)`}
			zIndex={6}
			display='flex'
			flexDirection='column'
			onClick={
				(e) => {
					e.stopPropagation()
					if (isNotifierOpen)
						dispatch(toggleNotifier())
				}
			}
			mobile={{
				position: 'fixed',
				height: '100%',
				backgroundColor: `${isNotifierOpen ? isDark ? 'rgba(60,60,60,1)'
					: 'rgb(120,120,120)'
					: theme.mildBackground
					}`
			}}
			alignItems='center'
			padding='10px 0'
			overflow='hidden'
		>
			<Button
				position='absolute'
				right='20px'
				display={windowSize === DISPLAY_SIZE.MOBILE ? 'inherit' : 'none'}
				onClick={
					(e) => {
						e.preventDefault()
						dispatch(toggleSideMenu())
					}
				}
			>
				<Icon
					visibility={windowSize === DISPLAY_SIZE.MOBILE ? 'visible' : 'hidden'}
					className={i_chevron_left + ' fa-2x'}
					color={theme.icon}
				/>
			</Button>
			<Image
				width='130px'
				height='150px'
				backgroundImage={`url(${avatar})`}
				filter='grayscale(100%)'
				mobile={
					{
						width: '110px',
						height: '120px'

					}
				}
			/>
			<Container
				display='none'
				margin='10px 0 0 0'
				mobile={{
					display: 'flex',
					alignItems: 'flex-end',
					justifyContent: 'center'
				}}
			>
				<Button
					onClick={
						(e) => {
							e.preventDefault()
							dispatch(toggleNotifier())
						}
					}
				>
					<Image
						width={30}
						height={30}
						backgroundImage={`url(${at})`}
						filter={isDark ? 'invert(100%)' : ''}
						margin='0px 20px'
						mobile={{
							margin: '0 0',
							width: '24px',
							height: '24px',
							backgroundSize: 'contain'
						}}
					/>
				</Button>
				<Container width='5px' />
				<Button>
					<Image
						width={30}
						height={30}
						mobile={{
							margin: '-3px 0',
							width: '31px',
							height: '31px',
							backgroundSize: 'contain'
						}}
						onClick={
							(e) => {
								e.preventDefault()
								window.open('https://www.linkedin.com/in/효범-한-111156210/', '_blank')!.focus()
							}
						}
						backgroundImage={`url(${linkedIn})`}
						filter={isDark ? 'invert(90%)' : ''}
					/>
				</Button>
				<Container width='5px' />
				<Button
					display='flex'
					justifyContent='center'
					alignItems='start'
				>
					<Image
						width={30}
						height={30}
						mobile={{
							width: '24px',
							height: '28px',
							backgroundSize: 'contain',
						}}
						onClick={
							(e) => {
								e.preventDefault()
								window.open('https://github.com/potatojoayo/', '_blank')!.focus()
							}
						}
						backgroundImage={`url(${github})`}
						filter={isDark ? 'invert(100%)' : ''}
					/>
				</Button>
			</Container>
			<Container
				minWidth='190px'
				maxWidth='190px'
				margin='30px 0 0 0'
				fontFamily='Do Hyeon'
				fontSize={17}
				mobile={{
					fontSize: 15,
					margin: '23px 0 0 0'
				}}
			>
				<Text margin='-15px 0 0 0' textAlign='center'
					color={theme.text}
				>
					즐거운 개발자입니다
				</Text>
				<Text margin='-5px 0 0 0' textAlign='center'
					color={theme.text}

				>
					감자를 좋아합니다 🍟
				</Text>
			</Container>
			<Container
				margin='10px 0 20px 0'
				height='1px'
				width='100%'
				boxShadow={`0px 1px 1.5px ${theme.text}`}
				mobile={{margin: '10px 0 10px 0'}}
			/>
			<MenuItem
				icon={i_study}
				name='STUDY'
				index={0}
				numChild={3}
			>
				<Link to='/front-end' style={{textDecoration: 'none'}} replace>
					<SubItem
						icon={i_frontend}
						name='front-end'
						iconColor={Colors.FRONT_END}
					/>
				</Link>
				<Link to='/back-end' style={{textDecoration: 'none'}} replace>
					<SubItem
						icon={i_backend}
						name='back-end'
						iconColor={Colors.BACK_END}
					/>
				</Link>
				<Link to='/algorithm' style={{textDecoration: 'none'}} replace>
					<SubItem
						icon={i_algorithm}
						name='algorithm'
						iconColor={Colors.ALGORITHM}
					/>
				</Link>
			</MenuItem>
			<Link to='/article' style={{textDecoration: 'none', width: '100%'}} replace>
				<MenuItem
					icon={i_article}
					name='ARTICLE'
					index={1}
					numChild={0}
				/>
			</Link>
			<Link to='/works' style={{textDecoration: 'none', width: '100%'}} replace>
				<MenuItem
					icon={i_works}
					name='WORKS'
					index={2}
					numChild={0}
				/>
			</Link>
		</Container >
	)
}

export default SideMenu;
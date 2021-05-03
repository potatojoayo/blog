import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'

import {toggleSideMenu} from '../../store/sideMenu/action'
import {toggleNotifier} from '../../store/notifier/action'
import {RootState} from '../../store'
import {Container, Image, Text, Icon, Button} from '../styled'
import Colors from '../../utill/Colors'
import {avatar, i_study, i_works, i_article, i_backend, i_frontend, i_algorithm, i_chevron_left, at, github, linkedIn, i_tag} from '../../assets'
import MenuItem from './MenuItem'
import SubItem from './SubItem'
import {DISPLAY_SIZE} from '../../utill/media_query'
import Font from '../../utill/Font'


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
			className='side-menu'
			userSelect='none'
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
				fontSize={15}
				mobile={{
					fontSize: 14,
					margin: '23px 0 0 0'
				}}
			>
				<Text margin='-14px 0 0 0' textAlign='center'
					fontFamily={Font.introduce}
					color={theme.text}
					cursor='default'
				>
					시골에 살아요
			</Text>
				<Text margin='-3px 0 0 0' textAlign='center'
					fontFamily={Font.introduce}
					color={theme.text}
					cursor='default'
				>
					달콤한 수박도 키워요 🍉
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
				<Link to='/list/front-end?page=1' style={{textDecoration: 'none'}} replace>
					<SubItem
						icon={i_frontend}
						name='front-end'
						iconColor={Colors.FRONT_END}
					/>
				</Link>
				<Link to='/list/back-end?page=1' style={{textDecoration: 'none'}} replace>
					<SubItem
						icon={i_backend}
						name='back-end'
						iconColor={Colors.BACK_END}
					/>
				</Link>
				<Link to='/list/algorithm?page=1' style={{textDecoration: 'none'}} replace>
					<SubItem
						icon={i_algorithm}
						name='algorithm'
						iconColor={Colors.ALGORITHM}
					/>
				</Link>
			</MenuItem>
			<Link to='/list/article?page=1' style={{textDecoration: 'none', width: '100%'}} replace>
				<MenuItem
					icon={i_article}
					name='ARTICLE'
					index={1}
					numChild={0}
				/>
			</Link>
			<Link to='/list/works?page=1' style={{textDecoration: 'none', width: '100%'}} replace>
				<MenuItem
					icon={i_works}
					name='WORKS'
					index={2}
					numChild={0}
				/>
			</Link>
			<Link to='/list/tags' style={{textDecoration: 'none', width: '100%'}} replace>
				<MenuItem
					icon={i_tag}
					name='TAGS'
					index={3}
					numChild={0}
				/>
			</Link>
			<Container
				position='absolute'
				bottom={windowSize === DISPLAY_SIZE.MOBILE ? '30px' : '130px'}
				flexWrap='nowrap'
				width='95%'
			>
				<Text
					textAlign='center'
					fontFamily='PT Sans'
					whiteSpace='nowrap'
					color={theme.text}
					fontSize={12}
				>© 2021 potatojoayo  All rights reserved</Text>
			</Container>
		</Container >
	)
}

export default SideMenu;

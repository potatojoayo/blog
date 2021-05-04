import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {changeTheme} from '../../store/theme/action'
import {RootState} from '../../store'
import {Container, Icon, Button, Text, Image} from '../styled'
import Colors from '../../utill/Colors'
import Font, {FontWeight} from '../../utill/Font'
import {at, github, profile} from '../../assets'
import {toggleNotifier} from '../../store/notifier/action'
import {toggleSideMenu} from '../../store/sideMenu/action'
import {DISPLAY_SIZE} from '../../utill/media_query'


const NavBar: React.FC = () => {

	const dispatch = useDispatch()
	const themeState = useSelector((state: RootState) => state.themeState);
	const isSideMenuOpen = useSelector((state: RootState) => state.sideMenuState).isSideMenuOpen
	const theme = themeState.theme;
	const isDark = themeState.isDark;
	const windowSize = useSelector((state: RootState) => state.windowSizeState).displaySize
	const [isHover, setIsHover] = useState(false)

	return (
		<Container
			width={isSideMenuOpen ? `calc(100vw - 230px)` : '100%'}
			minHeight='60px'
			right='0'
			boxShadow={isDark ? '0 1.5px 1px rgba(255,255,255,.7)' : '0 3px 6px rgba(0,0,0,0.3)'}
			mobile={{
				width: '100%'
			}}
			display='flex'
			flexDirection='row'
			transition={`background-color ease .2s, width linear .2s`}
			justifyContent='space-between'
			zIndex={5}
			alignItems='center'
			position='fixed'
			padding='0 20px'
			backgroundColor={theme.mildBackground}
		>
			<Container
				display='flex'
				alignItems='center'
			>
				<Button>
					<Icon
						color={theme.text}
						className='fas fa-bars fa-2x'
						transform={windowSize !== DISPLAY_SIZE.MOBILE ? isSideMenuOpen ? 'rotate(90deg)' : '' : ''}
						transition='transform ease .3s'
						onClick={
							(e) => {
								e.preventDefault()
								dispatch(toggleSideMenu())
							}
						}
					/>
				</Button>
				<Container
					display='flex'
					alignItems='center'
					mobile={{
						flexDirection: 'column',
						alignItems: 'start',
						margin: '0 0 0 10px'
					}}
				>
					<Button>
						<Link to='/home' style={{textDecoration: 'none'}} replace>
							<Text
								fontFamily={Font.headline_normal}
								cursor='pointer'
								margin='0 0 0 20px'
								letterSpacing='.5px'
								fontSize='25px'
								color={theme.text}
								fontWeight={FontWeight.bold}
								bottomLineColor={theme.text}
								mobile={{
									margin: '0 0 0 10px',
									fontSize: 20
								}}
							>
								POTATOJOAYO
				</Text>
						</Link>

					</Button>
					<Container position='relative'>
						<Text
							fontFamily={Font.headline_normal}
							margin='6px 0 0 10px'
							cursor='default'
							letterSpacing='.5px'
							color={theme.text}
							fontSize='15px'
							fontWeight={FontWeight.regular}
							onMouseEnter={() => setIsHover(true)}
							onMouseLeave={() => setIsHover(false)}
							bottomLineColor={theme.text}
							mobile={{
								margin: '-5px 0 0 10px'
							}}
						>
							HYOBEOM HAN
					<Image width='90px'
								height='90px'
								opacity={isHover ? 1 : 0}
								backgroundImage={'url(' + profile + ')'}
								borderRadius='100%'
								position='absolute'
								top={-15}
								transition='opacity ease .2s'
								left={125}
							/>
						</Text>
					</Container>
				</Container>
			</Container>
			<Container
				display='flex'
				alignItems='center'
			>
				<Button
					backgroundColor={Colors.DARK}
					color={Colors.GRAY}
					width={80}
					height={20}
					textAlign='center'
					borderRadius={5}
					boxShadow={!isDark ? '3px 3px 1px rgba(0,0,0,0.3)' : '1px 2px 1px rgba(255,255,255,.7)'}
					fontFamily={Font.headline_normal}
					fontSize={15}
					position='relative'
					margin='0 20px'
					mobile={{
						margin: '0 5px'
					}}
					onClick={
						(e) => {
							e.preventDefault()
							dispatch(changeTheme())
							e.stopPropagation()
						}
					}
				>
					{isDark ? 'LIGHT' : 'DARK'}
				</Button>
				<Button
					onClick={
						(e) => {
							e.preventDefault()
							dispatch(toggleNotifier())
						}
					}
					mobile={{
						display: 'none'
					}}
				>
					<Image
						width={30}
						height={30}
						backgroundImage={`url(${at})`}
						filter={isDark ? 'invert(100%)' : ''}
						margin='0px 20px'
						mobile={{margin: '0 10px'}}
					/>
				</Button>
				<Button>
					<Image
						width={30}
						height={30}
						mobile={{
							display: 'none'
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
		</Container >
	)
}

export default NavBar;

import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {changeTheme} from '../../store/theme/action'
import {RootState} from '../../store'
import Container from '../styled/Container'
import Colors from '../../utill/Colors'
import Icons from '../styled/Icons'
import Button from '../styled/Button'
import Text from '../styled/Text'
import Font, {FontWeight} from '../../utill/Font'
import Image from '../styled/Image'
import {at, github} from '../../assets'
import {toggleNotifier} from '../../store/notifier/action'
import {toggleSideMenu} from '../../store/sideMenu/action'


const NavBar: React.FC = () => {
	const dispatch = useDispatch()
	const themeState = useSelector((state: RootState) => state.themeState);
	const isSideMenuOpen = useSelector((state: RootState) => state.sideMenuState).isSideMenuOpen
	const theme = themeState.theme;
	const isDark = themeState.isDark;
	return (
		<Container
			width='100%'
			minHeight='60px'
			boxShadow={isDark ? '0 1.5px 1px rgba(255,255,255,.7)' : '0 3px 6px rgba(0,0,0,0.3)'}
			display='flex'
			flexDirection='row'
			justifyContent='space-between'
			zIndex={5}
			alignItems='center'
			position='relative'
			padding='0 20px'
			backgroundColor={theme.mildBackground}
		>
			<Container
				display='flex'
				alignItems='center'
			>
				<Button>
					<Icons
						color={theme.text}
						className='fas fa-bars fa-2x'
						transform={isSideMenuOpen ? 'rotate(90deg)' : ''}
						transition='transform ease .3s'
						onClick={
							(e) => {
								e.preventDefault()
								dispatch(toggleSideMenu())
							}
						}
					/>
				</Button>
				<Button>
					<Text
						fontFamily={Font.headline_normal}
						cursor='pointer'
						margin='0 0 0 20px'
						letterSpacing='.5px'
						fontSize='25px'
						color={theme.text}
						fontWeight={FontWeight.bold}
						bottomLineColor={theme.text}
					>
						POTATOJOAYO
				</Text>

				</Button>
				<Text
					fontFamily={Font.headline_normal}
					margin='6px 0 0 10px'
					letterSpacing='.5px'
					color={theme.text}
					fontSize='15px'
					fontWeight={FontWeight.regular}
					bottomLineColor={theme.text}
				>
					HYOBEOM HAN
			</Text>
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
					onClick={
						(e) => {
							e.preventDefault()
							dispatch(changeTheme())
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
				>
					<Image
						width={30}
						height={30}
						backgroundImage={`url(${at})`}
						filter={isDark ? 'invert(100%)' : ''}
						margin='0px 20px'
					/>
				</Button>
				<Button>
					<Image
						width={30}
						height={30}
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

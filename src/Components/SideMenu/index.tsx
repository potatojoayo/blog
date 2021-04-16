import React from 'react'
import {useSelector} from 'react-redux'
import {RootState} from '../../store'
import Container from '../styled/Container'
import Colors from '../../utill/Colors'
import Image from '../styled/Image'
import {avatar, i_study, i_works, i_article, i_backend, i_frontend, i_algorithm} from '../../assets'
import Text from '../styled/Text'
import MenuItem from './MenuItem'
import SubItem from './SubItem'


const SideMenu: React.FC = () => {
	const isOpen = useSelector((state: RootState) => state.sideMenuState).isSideMenuOpen
	const theme = useSelector((state: RootState) => state.themeState).theme
	return (
		<Container
			width={isOpen ? '230px' : '0px'}
			backgroundColor={theme.mildBackground}
			transition='width linear .2s, background-color ease .2s'
			boxShadow={`5px 3px 5px rgba(0,0,0,0.3)`}
			zIndex={isOpen ? 6 : 0}
			display='flex'
			flexDirection='column'
			alignItems='center'
			padding='10px 0'
			overflow='hidden'
		>
			<Image
				width='130px'
				height='150px'
				backgroundImage={`url(${avatar})`}
				filter='grayscale(100%)'
			/>
			<Container
				minWidth='190px'
				maxWidth='190px'
				margin='30px 0 0 0'
				fontFamily='Do Hyeon'
				fontSize={17}
			>
				<Text margin='-15px 0 0 0' textAlign='center'
					color={theme.text}
				>
					즐거운 개발자입니다
				</Text>
				<Text margin='0px 0 0 0' textAlign='center'
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
			/>
			<MenuItem
				icon={i_study}
				name='STUDY'
				index={0}
				numChild={3}
			>
				<SubItem
					icon={i_frontend}
					name='front-end'
					iconColor={Colors.FRONT_END}
				/>
				<SubItem
					icon={i_backend}
					name='back-end'
					iconColor={Colors.BACK_END}
				/>
				<SubItem
					icon={i_algorithm}
					name='algorithm'
					iconColor={Colors.ALGORITHM}
				/>
			</MenuItem>
			<MenuItem
				icon={i_article}
				name='ARTICLE'
				index={1}
				numChild={0}
			>
			</MenuItem>
			<MenuItem
				icon={i_works}
				name='WORKS'
				index={2}
				numChild={0}
			>
			</MenuItem>
		</Container >
	)
}

export default SideMenu;

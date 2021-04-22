import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {toggleMenuItem} from '../../store/sideMenu/action'
import {RootState} from '../../store'
import {Container, Icon, Text} from '../styled'
import Font, {FontWeight} from '../../utill/Font'


interface MenuItemProps {
	icon: string;
	name: string;
	children?: React.ReactNode;
	index: number
	numChild: number
}

const MenuItem: React.FC<MenuItemProps> =
	({icon, name, children, index, numChild}) => {
		const theme = useSelector((state: RootState) => state.themeState).theme
		const isMenuItemOpen = useSelector((state: RootState) => state.sideMenuState).isMenuItemOpen[index!]
		const dispatch = useDispatch()
		return <Container
			display='block'
			width='100%'
			cursor='pointer'
			flexDirection='column'
			active={{
				transform: numChild > 0 ? '' : 'scale(.98)'
			}}
			alignItems='start'
			overflow='hidden'
			maxHeight={isMenuItemOpen ? `${(numChild + 1) * 40 + 15}px` : '40px'}
			transition='max-height ease .3s'
			margin='0 0 5px 0'
		>
			<Container
				minWidth='200px'
				height='40px'
				display='flex'
				flexDirection='row'
				alignItems='center'
				justifyContent='start'
				margin='0 0 0 20px'
				onClick={
					(e) => {
						if (numChild > 0)
							dispatch(toggleMenuItem(index))
					}
				}
			>
				<Container
					width={20}
					display='flex'
					alignItems='center'
				>
					<Icon
						className={icon + ' fa-lg'}
						color={theme.icon}
					/>
				</Container>
				<Container
					padding='0 20px'
					width='160px'
					display='flex'
					alignItems='center'
				>
					<Text
						color={!isMenuItemOpen ? theme.text : theme.icon}
						fontFamily={Font.menu}
						cursor='pointer'
						bottomLineColor={numChild > 0 ? '' : theme.text}
						transition='color ease .3s'
						fontWeight={FontWeight.medium}
						fontSize={20}
					>
						{name}
					</Text>
				</Container>
				{numChild > 0 ?
					<Icon
						width='50px'
						height='50px'
						className='fas fa-chevron-down '
						color={theme.icon}
						transform={isMenuItemOpen ? 'rotate(180deg)' : ''}
						transition='transform ease-in-out .3s'
					/>
					: <div />
				}
			</Container>
			{children}
			<Container height={5} />
			<Container
				height='1px'
				width={isMenuItemOpen ? '230px' : '0px'}
				boxShadow={`0 1px 1px ${theme.text}`}
				margin='0 0 15px 0'
				transition='width ease .7s'
			/>
		</Container>
	}

export default MenuItem;

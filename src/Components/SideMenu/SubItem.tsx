import React from 'react'
import {useSelector} from 'react-redux'
import {RootState} from '../../store'
import Container from '../styled/Container'
import Icon from '../styled/Icons'
import Text from '../styled/Text'
import Font, {FontWeight} from '../../utill/Font'
import Button from '../styled/Button'


interface SubItemProps {
	icon?: string;
	name: string;
	iconColor?: string;
}

const SubItem: React.FC<SubItemProps> = ({icon, name, iconColor}) => {
	const theme = useSelector((state: RootState) => state.themeState).theme
	return <Button
		width={'70%'}
		height='40px'
		display='flex'
		flexDirection='row'
		alignItems='center'
		margin='0 0 0 40px'
	>
		<Container
			width='20px'
			display='flex'
			alignItems='center'
		>
			<Icon
				width='50px'
				height='50px'
				className={icon + ' fa-lg'}
				color={iconColor}
			/>
		</Container>
		<Container
			minWidth='150px'
			margin='0 0 0 10px'
			padding='0 10px'
		>

			<Text
				cursor='pointer'
				color={theme.text}
				fontFamily={Font.menu}
				bottomLineColor={theme.text}
				fontWeight={FontWeight.regular}
				fontSize={20}
			>
				{name}
			</Text>
		</Container>
	</Button>
}

export default SubItem;

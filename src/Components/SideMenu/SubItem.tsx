import React from 'react'
import {useSelector} from 'react-redux'
import {RootState} from '../../store'
import {Container, Icon, Text, Button} from '../styled'
import Font, {FontWeight} from '../../utill/Font'


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
		onClick={() => {window.scrollTo({top: 0})}}
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
			margin='0 0 0 10px'
			padding='0 10px'
			minWidth='150px'
		>
			<Text
				cursor='pointer'
				whiteSpace='nowrap'
				width='fit-content'
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

import React from 'react'
import {useSelector} from 'react-redux'
import {RootState} from '../../store'
import Container from '../styled/Container'
import Font, {FontWeight} from '../../utill/Font'
import Text from '../styled/Text'


const Snackbar: React.FC = () => {
	const snackbarState = useSelector((state: RootState) => state.snackbarState)
	const themeState = useSelector((state: RootState) => state.themeState)
	return <Container
		width='100%'
		height={snackbarState.isOpen ? '30px' : '0px'}
		position='absolute'
		backgroundColor={themeState.theme.text}
		bottom={0}
		padding='0px 30px'
		display='flex'
		zIndex={10}
		alignItems='center'
		justifyContent='center'
		transition='height ease-in-out .3s'
	>
		{snackbarState.isOpen ?
			<Text
				cursor='default'
				color={themeState.theme.background}
				fontFamily={Font.headline_normal}
				fontWeight={FontWeight.bold}
			>
				{snackbarState.content}
			</Text> : <div></div>
		}
	</Container>
}

export default Snackbar;

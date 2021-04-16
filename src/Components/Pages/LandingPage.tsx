import React from 'react'
import {useSelector} from 'react-redux'

import {RootState} from '../../store'
import Container from '../styled/Container'
import Image from '../styled/Image'
import {potato} from '../../assets'


const LandingPage: React.FC = () => {
	const themeState = useSelector((state: RootState) => state.themeState)
	return <Container
		width='100%'
		height='calc(100vh - 60px)'
		display='flex'
		alignItems='center'
		justifyContent='center'
	>
		<Image
			width='60%'
			height='60%'
			backgroundImage={`url(${potato})`}
			backgroundSize='contain'
			filter={themeState.isDark ? 'invert(70%)' : ''}
		/>
	</Container>
}

export default LandingPage;

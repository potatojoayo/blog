import React from 'react'

import Container from '../styled/Container'
import LandingPage from './LandingPage'
import PageLayout from './PageLayout'
import {i_study, i_frontend} from '../../assets'
import Colors from '../../utill/Colors'

const Pages: React.FC = () => {
	return <Container
		width='100%'
		display='flex'
		flexDirection='column'
	>
		<PageLayout
			icon={i_study}
			subIcon={i_frontend}
			title={'STUDY'}
			subTitle={'front-end'}
			subIconColor={Colors.FRONT_END}
		/>
		<LandingPage />
	</Container>
}


export default Pages;

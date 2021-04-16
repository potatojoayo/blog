import React from 'react'
import {useSelector} from 'react-redux'

import {RootState} from '../../store'
import Container from '../styled/Container'
import Icon from '../styled/Icons'
import Text from '../styled/Text'
import Font, {FontWeight} from '../../utill/Font'


interface PageLayoutProps {
	icon: string;
	title: string;
	subIcon: string;
	subTitle?: string;
	subIconColor?: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({icon, title, subTitle, subIcon, subIconColor}) => {
	const themeState = useSelector((state: RootState) => state.themeState);
	const theme = themeState.theme;
	const isDark = themeState.isDark;
	return <Container
		width='100%'
		height='calc(100vh - 60px)'
		display='flex'
		flexDirection='column'
		padding='20px 30px'
	>
		<Container
			display='flex'
			padding='15px 20px'
			backgroundColor={theme.mildBackground}
			width='fit-content'
			borderRadius='10px'
		>
			<Icon
				className={icon + 'fa-4x'}
				color={theme.icon}
				margin='0 20px 0 0'
			/>

			{subIcon ?
				<Icon
					margin='0 20px 0 0'
					className={subIcon + ' fa-4x'}
					color={subIconColor}
				/> : <div />
			}
			<Container
				display='flex'
				flexDirection='column'
			>
				<Text
					fontFamily={Font.menu}
					fontWeight={FontWeight.medium}
					fontSize={30}
					color={theme.text}
				>
					{title}
				</Text
				>
				{subTitle ?
					<Text
						fontFamily={Font.menu}
						fontWeight={FontWeight.regular}
						fontSize={25}
						color={theme.text}
					>
						{subTitle}
					</Text>
					: <div />
				}
			</Container>
		</Container>
		<Container width='100%' height='1px' backgroundColor={theme.icon} margin='20px 0' />
	</Container>
}


export default PageLayout;

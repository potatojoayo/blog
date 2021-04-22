import React from 'react';
import {Link, useRouteMatch} from 'react-router-dom'
import {useSelector} from 'react-redux'
import dateFormat from 'dateformat'

import {RootState} from '../../store'
import {Button, Container, Image, Text} from '../styled';
import {Post} from '../../Model'
import Tag from './Tag'
import Font, {FontWeight} from '../../utill/Font'

interface ListItemProps {
	post: Post
}

const ListItem: React.FC<ListItemProps> = ({post}) => {
	const themeState = useSelector((state: RootState) => state.themeState)
	const isNotifierOpen = useSelector((state: RootState) => state.notifierState).isOpen
	const isSideMenuOpen = useSelector((state: RootState) => state.sideMenuState).isSideMenuOpen
	const theme = themeState.theme
	const match = useRouteMatch()
	return <Container
		width='100%'
		display='flex'
		margin='10px 0 20px 0'
		tablet={{
			flexDirection: 'column'
		}}
	>
		<Button
		>
			<Link to={`${match.url}/${post.id}`}>
				<Image
					width='300px'
					cursor='pointer'
					height='300px'
					backgroundImage={`url(${post.repImage})`}
					backgroundPosition='center'
					backgroundSize='cover'
					filter={isNotifierOpen ? 'brightness(70%)' : 'brightness(100%)'}
					mobile={{
						filter: `${isNotifierOpen || isSideMenuOpen ? 'brightness(70%)' : 'brightness(100%)'}`
					}}
					transition='filter ease .2s'
					tablet={{
						width: '100%',
					}}
				/>
			</Link>
		</Button>
		<Container
			margin='0 0 0 40px'
			display='flex'
			flexGrow={1}
			flexDirection='column'
			fontFamily={Font.default}
			tablet={{margin: '20px 0 0 0'}}
		>
			<Container
				maxHeight='100px'
				overflow='hidden'
			>
				<Button
					width='fit-content'
				>
					<Link to={`${match.url}/${post.id}`} style={{textDecoration: 'none'}}>
						<Text
							fontSize={30}
							whiteSpace='nowrap'
							cursor='pointer'
							color={theme.text}
							fontWeight={FontWeight.medium}
							margin='0 0 5px 0'
						>
							{post.title}
						</Text>
					</Link>
				</Button>
			</Container>
			<Container
				maxHeight='100px'
				overflow='hidden'
			>
				<Text
					fontSize={18}
					fontWeight={FontWeight.light}
					userSelect='text'
					color={theme.text}
					margin='0 0 10px 0'
				>
					{post.subTitle}
					<Button
						display='inline-block'

					>
						<Link to={`${match.url}/${post.id}`} style={{textDecoration: 'none'}}>
							<Text
								fontSize={18}
								fontWeight={FontWeight.light}
								display='inline'
								cursor='pointer'
								color={theme.tag}
								borderBottom={`0.15rem solid ${theme.tag}`}
								margin='0 0 0 10px'
							>
								more..
					</Text>
						</Link>
					</Button>
				</Text>
			</Container>
			<Tag
				tags={post.tags}
				color={theme.tag}
				fontSize={20}
			/>
			<Text
				color={theme.icon}
				whiteSpace='nowrap'
				userSelect='text'
				fontSize={17}
				margin='5px 0 0 0'
			>
				{dateFormat(post.date, 'dddd, mmmm dS, yyyy')}
			</Text>
		</Container>
	</Container>
}

export default ListItem;

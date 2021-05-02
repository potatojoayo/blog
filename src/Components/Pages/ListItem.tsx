import React from 'react';
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
import dateFormat from 'dateformat'

import {RootState} from '../../store'
import {Button, Container, Image, Text} from '../styled';
import {Post} from '../../Model'
import Font, {FontWeight} from '../../utill/Font'
import TagListItem from './TagListItem';

interface ListItemProps {
	post: Post
	isVisible: boolean
}

const ListItem: React.FC<ListItemProps> = ({post, isVisible}) => {
	const themeState = useSelector((state: RootState) => state.themeState)
	const theme = themeState.theme
	const tagColors = useSelector((state: RootState) => state.themeState).theme.tagList
	const renderedTags = post.tags.map((tag, index) => {
		return <Link to={`/tags/${tag}`} style={{textDecoration: 'none'}} key={index}>
			<TagListItem name={tag} color={tagColors[index % 5]} />
		</Link>
	})
	return <Container
		width='100%'
		display={isVisible ? 'flex' : 'none'}
		margin='10px 0 20px 0'
		tablet={{
			flexDirection: 'column'
		}}
	>
		<Button
		>
			<Link to={`/post/${post._id}`}>
				<Image
					width='300px'
					cursor='pointer'
					height='300px'
					backgroundImage={`url(${post.repImage})`}
					backgroundPosition='center'
					backgroundSize='cover'
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
				display='flex'
				alignItems='flex-end'
			>
				<Button
					width='fit-content'
				>
					<Link to={`/post/${post._id}`} style={{textDecoration: 'none'}}>
						<Text
							fontSize={33}
							whiteSpace='nowrap'
							cursor='pointer'
							fontFamily={Font.post_title}
							color={theme.text}
							fontWeight={FontWeight.medium}
							margin='0 0 5px 0'
						>
							{post.title}
						</Text>
					</Link>
				</Button>
				<Text
					color={theme.icon}
					margin='0 0 13px 15px'
					userSelect='none'
					cursor='default'
					fontSize={15}
					display='inline-block'
				> {'no.' + post._id} </Text>
			</Container>
			<Container
				maxHeight='100px'
				overflow='hidden'
			>
				<Text
					fontSize={20}
					fontWeight={FontWeight.light}
					userSelect='text'
					fontFamily={Font.post_sub_title}
					color={theme.text}
					margin='0 0 10px 0'
				>
					{post.subTitle}
				</Text>
			</Container>
			<Container display='flex' margin='-5px 0 0 -10px'>
				{renderedTags}
			</Container>
			<Text
				color={theme.icon}
				whiteSpace='nowrap'
				cursor='default'
				userSelect='none'
				fontSize={17}
				margin='5px 0 0 0'
			>
				{dateFormat(post.date, 'dddd, mmmm dS, yyyy')}
			</Text>
		</Container>
	</Container>
}

export default ListItem;

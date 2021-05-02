import React from 'react'
import {useSelector} from 'react-redux'
import {Link, useParams} from 'react-router-dom'


import {RootState} from '../../store'
import Markdown from '../Markdown/Markdown'
import {Container, Image, Text} from '../styled'
import {Parameter} from '../../utill/Router'
import {Post as post} from '../../Model'
import Font from '../../utill/Font'
import TagListItem from './TagListItem'
import dateFormat from 'dateformat'

const Post: React.FC = () => {
	const {postId} = useParams<Parameter>()
	console.log('post page')
	const post: post = useSelector((state: RootState) => state.postState).post[+postId - 1]
	const theme = useSelector((state: RootState) => state.themeState).theme
	const tagColors = useSelector((state: RootState) => state.themeState).theme.tagList
	const renderedTags = post.tags.map((tag, index) => {
		return <Link to={`/tags/${tag}`} style={{textDecoration: 'none'}} key={index}>
			<TagListItem name={tag} color={tagColors[index % 5]} />
		</Link>
	})
	return <Container
		width='100%'
	>
		<Image backgroundImage={`url(${post.repImage})`}
			width='100%'
			height='400px'
		/>
		<Text
			margin='20px 0 0 0'
			width='100%'
			fontFamily={Font.post_title}
			color={theme.text}
			textAlign='center'
			fontSize='50px'
		>
			{post.title}
			<Text
				color={theme.icon}
				whiteSpace='nowrap'
				userSelect='none'
				fontSize={17}
				margin='0px 0 5px 0'
			>
				{dateFormat(post.date, 'dddd, mmmm dS, yyyy')}
			</Text>
		</Text>
		<Container display='flex' justifyContent='center'>
			{renderedTags}
		</Container>
		<Markdown value={post.content} />
	</Container>
}

export default Post

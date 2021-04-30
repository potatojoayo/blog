import React from 'react'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {RootState} from '../../store'
import {Container, Text} from '../styled'
import TagListItem from './TagListItem'
import Font, {FontWeight} from '../../utill/Font'

const TagList: React.FC = () => {
	const posts = useSelector((state: RootState) => state.postState).post
	const theme = useSelector((state: RootState) => state.themeState).theme
	const tagColors = useSelector((state: RootState) => state.themeState).theme.tagList
	const tags: string[] = []
	posts.forEach((post) => {
		post.tags.forEach((tag) => {
			if (tags.includes(tag) === false)
				tags.push(tag)
		})
	})
	const renderedTags = tags.map((tag, index) => {
		return <Link to={`/tags/${tag}`} style={{textDecoration: 'none'}} key={index}>
			<TagListItem name={tag} color={tagColors[index % 5]} />
		</Link>
	})
	return <Container
	>
		<Text
			fontFamily={Font.menu}
			fontWeight={FontWeight.medium}
			cursor='default'
			fontSize={35}
			mobile={{
				fontSize: 30
			}}
			color={theme.text}
		>
			TAGS
						</Text>
		<Container width='100%' minHeight='1px' backgroundColor={theme.icon} margin='20px 0'
		/>
		<Container
			flexWrap='wrap'
			margin='20px -5px'
			display='flex'
		>
			{renderedTags}
		</Container>
	</Container >
}

export default TagList;

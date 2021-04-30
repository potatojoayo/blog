import React, {useRef} from 'react'
import {useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'


import {RootState} from '../../store'
import Markdown from '../Markdown/Markdown'
import {Container, Image} from '../styled'
import {Parameter} from '../../utill/Router'
import {Post as post} from '../../Model'

const Post: React.FC = () => {
	const markdwonElement = useRef(HTMLDivElement.prototype)
	const {postId} = useParams<Parameter>()
	const post: post = useSelector((state: RootState) => state.postState).post[+postId - 1]
	return <Container
		width='100%'
		ref={markdwonElement}
	>
		<Image backgroundImage={`url(${post.repImage})`}
			width='100%'
			height='400px'
		/>
		<Markdown value={post.content} />
	</Container>
}

export default Post

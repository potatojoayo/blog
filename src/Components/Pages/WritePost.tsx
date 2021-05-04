import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import {RootState} from '../../store'
import Markdown from '../Markdown/Markdown'
import {Category} from '../../global/index'
import {Container, TextArea, Text, Input, Button} from '../styled'
import COLORS from '../../utill/Colors'
import {PostType} from '../../Model/Post'
import {updatePost, writePost} from '../../api'
import {useParams} from 'react-router'
import {Parameter} from '../../utill/Router'

const WritePost: React.FC = () => {
	const [post, setPost] = useState<PostType>({});
	const {postId} = useParams<Parameter>()
	const postState = useSelector((state: RootState) => state.postState)
	useEffect(() => {
		if (postId) {
			const p = postState.post[+postId - 1]
			setPost(p)
		}
	}, [postId, postState])
	const isDark = useSelector((state: RootState) => state.themeState).isDark
	return <Container display='flex'
		margin='0'
		padding='0'
		width='100%'
		height='fit-content'
	>
		<Container display='flex' flexDirection='column' alignItems='start' width='100%'
			minHeight='94vh'
		>
			<Container display='flex' margin='20px 0  0 50px ' width='100%'>
				<Text margin='0 10px 0 0'
					color={isDark ? COLORS.GRAY : COLORS.DARK}
				>
					Title:
				</Text>
				<Input
					value={post.title}
					onChange={(e) => {
						e.preventDefault()
						setPost({
							...post,
							title: e.target.value
						})
					}}
				/>
			</Container>
			<Container display='flex' margin='20px 0  0 50px ' width='100%'>
				<Text margin='0 10px 0 0'
					color={isDark ? COLORS.GRAY : COLORS.DARK}
				>
					Sub Title:
				</Text>
				<Input
					value={post.subTitle}
					onChange={(e) => {
						e.preventDefault()
						setPost({
							...post,
							subTitle: e.target.value
						})
					}}
				/>
			</Container>
			<Container display='flex' margin='20px 0  0 50px ' width='100%'>
				<Text margin='0 10px 0 0'
					color={isDark ? COLORS.GRAY : COLORS.DARK}
				>
					Rep Image:
				</Text>
				<Input
					value={post.repImage}
					onChange={(e) => {
						e.preventDefault()
						setPost({
							...post,
							repImage: e.target.value
						})
					}}
				/>
			</Container>
			<Container display='flex' margin='20px 0  0 50px ' width='100%'>
				<Text margin='0 10px 0 0'
					color={isDark ? COLORS.GRAY : COLORS.DARK}
				>
					Tags:
				</Text>
				<Input
					value={post.tags}
					onChange={(e) => {
						e.preventDefault()
						setPost({
							...post,
							tags: e.target.value.split(',')
						})
					}}
				/>
			</Container>
			<Container display='flex' margin='20px 0  0 50px ' width='100%'>
				<Text margin='0 10px 0 0'
					color={isDark ? COLORS.GRAY : COLORS.DARK}
				>
					Category:
				</Text>
				<select
					onChange={(e) => {
						let category
						switch (e.target.value) {
							case Category.frontEnd:
								category = Category.frontEnd
								break;
							case Category.backEnd:
								category = Category.backEnd
								break;
							case Category.algorithm:
								category = Category.algorithm
								break;
							case Category.article:
								category = Category.article
								break;
							case Category.works:
								category = Category.works
								break;
						}
						setPost({
							...post,
							category: category
						})
					}}
				>
					<option value={Category.frontEnd}>{Category.frontEnd}</option>
					<option value={Category.backEnd}>{Category.backEnd}</option>
					<option value={Category.algorithm}>{Category.algorithm}</option>
					<option value={Category.article}>{Category.article}</option>
					<option value={Category.works}>{Category.works}</option>
				</select>
			</Container>
			<TextArea
				value={post.content}
				onChange={(e) => {
					e.preventDefault()
					setPost({
						...post,
						content: e.target.value
					})
				}} />
			<Button
				backgroundColor={COLORS.BACK_END}
				color={COLORS.GRAY}
				borderRadius='10px'
				margin='50px 0 0 50px'
				padding='5px 10px'
				fontSize={20}
				onClick={async () => {
					if (postId)
						await updatePost(post)
					else
						await writePost(post)
				}}
			>Submit</Button>
		</Container>
		<Container margin='0 0 0 -150px' width='100vw'>
			<Markdown value={post.content!} className={isDark ? 'markdown-body-preview-dark' : 'markdown-body-preview'} />
		</Container>
	</Container>
}

export default WritePost;

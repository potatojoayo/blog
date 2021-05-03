import React, {useRef} from 'react'
import {useSelector} from 'react-redux'
import {useParams, useLocation} from 'react-router-dom'

import {RootState} from '../../store'
import {Parameter} from '../../utill/Router'
import {Container, Text, Button} from '../styled'
import ListItem from './ListItem'
import PageIndex from './PageIndex'
import Font, {FontWeight} from '../../utill/Font'
import {ThemeType} from '../../utill/Theme'
import {Post} from '../../Model'
import TagListItem from './TagListItem'


interface ListProps {
	title: string;
	subTitle: string;
	theme: ThemeType;
}

const List: React.FC<ListProps> = ({title, subTitle, theme}) => {
	const listElement = useRef(HTMLDivElement.prototype);
	let currentPage: number = -1;
	let items: Post[] = [];
	const {category, tag} = useParams<Parameter>()
	const useQuery = () => new URLSearchParams(useLocation().search)
	const query = useQuery()
	const tagColors = useSelector((state: RootState) => state.themeState).theme.tagList
	const posts = useSelector((state: RootState) => state.postState).post
	if (!tag) {
		currentPage = +query.get('page')!
		items = posts.filter((post) => post.category === category)
	} else {
		posts.forEach((post) => {
			if (post.tags.includes(tag))
				return items.push(post)
		})
	}
	const renderedItems = items.map((post, index) => {
		return <ListItem post={post} key={index} isVisible={true} />
	})
	return <Container
		ref={listElement}
		width='100%'
		display='flex'
		flexDirection='column'
	>
		<Container
			display='flex'
			width='100%'
			margin='0 0 5px 0'
		>
			<Container
				display='flex'
				justifyContent='space-between'
				width='100%'
			>
				<Container
					display='flex'
					flexDirection='column'
				>
					{tag ?
						<TagListItem
							name={tag}
							color={tagColors[Math.floor(Math.random() * 4)]}
							fontSize={25}
							margin='0 0 5px -5px' />
						:
						<Button>
							<Text
								fontFamily={Font.list_meta}
								cursor='pointer'
								fontWeight={FontWeight.medium}
								fontSize={35}
								mobile={{
									fontSize: 30
								}}
								color={theme.text}
							>
								{title}
							</Text>
						</Button>
					}
					{subTitle ?
						<Button>
							<Text
								fontFamily={Font.list_meta}
								fontWeight={FontWeight.regular}
								fontSize={30}
								cursor='pointer'
								color={theme.text}
								mobile={{
									fontSize: 25
								}}
							>
								{subTitle}
							</Text>
						</Button>
						: <div />
					}
				</Container>
				<Container
					display='flex'
					alignItems='flex-end'
				>
					{currentPage >= 0 ?
						<Text
							color={theme.text}
							fontFamily={Font.menu}
							cursor='default'
							userSelect='none'
						>{'page: ' + currentPage}</Text>
						: <div />
					}
					<Text
						color={theme.text}
						cursor='default'
						fontFamily={Font.menu}
						margin='0 0 0 10px'
						userSelect='none'
					>{'total posts: ' + items.length}</Text>
				</Container>
			</Container>
		</Container>
		<Container width='100%' minHeight='1px' backgroundColor={theme.icon} margin='3px 0 10px 0'
		/>
		{renderedItems}
		{items.length > 5 ?
			<PageIndex items={items} theme={theme} />
			:
			<div />
		}

	</Container>
}

export default List;

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
	const postState = useSelector((state: RootState) => state.postState)
	if (!tag) {
		currentPage = +query.get('page')!
		items = postState.post.filter((post) => post.category === category)
	} else {
		postState.post.forEach((post) => {
			if (post.tags.includes(tag))
				return items.push(post)
		})
	}
	const renderedItems = items.map((post, index) => {
		console.log(post)
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
			margin='0 0 10px 0'
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
						<Text color={theme.tag} fontSize={30} fontFamily='Ubuntu' >
							{'# ' + tag}
						</Text> :
						<Button>
							<Text
								fontFamily={Font.menu}
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
								fontFamily={Font.menu}
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
							fontFamily={Font.tag}
							cursor='default'
							userSelect='none'
						>{'page: ' + currentPage}</Text>
						: <div />
					}
					<Text
						color={theme.text}
						cursor='default'
						fontFamily={Font.tag}
						margin='0 0 0 10px'
						userSelect='none'
					>{'total posts: ' + items.length}</Text>
				</Container>
			</Container>
		</Container>
		<Container width='100%' minHeight='1px' backgroundColor={theme.icon} margin='10px 0'
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

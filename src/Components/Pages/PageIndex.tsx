import React from 'react'
import {Link, useRouteMatch, useLocation} from 'react-router-dom'
import {Post} from '../../Model';

import {ThemeType} from '../../utill/Theme'
import {Container, Text} from '../styled'

interface PageIndexProp {
	items: Post[]
	theme: ThemeType;
}

const PageIndex: React.FC<PageIndexProp> = ({items, theme}) => {
	const useQuery = () => new URLSearchParams(useLocation().search)
	const query = useQuery()
	const currentIndex = +query.get('page')!
	const match = useRouteMatch()
	const total = items.length
	const countPerPage = 5;
	const numIndex = Math.ceil(total / countPerPage);
	const indexes: number[] = [];
	for (let i = 1; i <= numIndex; i++) {
		indexes.push(i)
	}
	const renderedIndex = indexes.map((i) => {
		return <Container
			display='flex'>
			{i === currentIndex ?
				<Text
					fontFamily='Ubuntu'
					fontSize={17}
					color={theme.text}
				>{i}</Text>
				:
				<Link to={match.url + '?page=' + i} style={{textDecoration: 'none'}}
				>
					<Text
						onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
						cursor='pointer'
						fontFamily='Ubuntu'
						fontSize={17}
						color={theme.tag}
					>{i}</Text>
				</Link>
			}
			{i === numIndex ? <div /> : <Text
				color={theme.tag}
				fontSize={17}
				margin='0 20px 20px 20px'
				fontFamily='Ubuntu'
			> | </Text>}
		</Container>
	})
	return <Container display='flex'
		margin='30px 0 0 0'
		alignSelf='center'
	>
		{renderedIndex}
	</Container>
}

export default PageIndex;

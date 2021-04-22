import React, {useRef} from 'react'
import {useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'

import {RootState} from '../../store'
import {Parameter} from '../../utill/Router'
import {Container, Text, Button} from '../styled'
import ListItem from './ListItem'
import Font, {FontWeight} from '../../utill/Font'
import {ThemeType} from '../../utill/Theme'


interface ListProps {
	title: string;
	subTitle: string;
	theme: ThemeType
}

const List: React.FC<ListProps> = ({title, subTitle, theme}) => {

	const {category} = useParams<Parameter>()
	const items = useSelector((state: RootState) => state.postState)[category]
	const renderedItems = items.map((post) => {
		return <ListItem post={post} key={post.id} />
	})

	const listElement = useRef(HTMLDivElement.prototype);


	return <Container
		ref={listElement}
		width='100%'
	>
		<Container
			display='flex'
			width='fit-content'
			margin='0 0 10px 0'
		>
			<Container
				display='flex'
				flexDirection='column'
			>
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
		</Container>
		<Container width='100%' minHeight='1px' backgroundColor={theme.icon} margin='10px 0'
		/>
		{renderedItems}
	</Container>
}

export default List;

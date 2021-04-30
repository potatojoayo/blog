import React from 'react'
import {Link} from 'react-router-dom'
import {Container, Text, Button, Icon} from '../styled'
import Font, {FontWeight} from '../../utill/Font'
import {i_tag} from '../../assets'


interface TagProps {
	tags: string[];
	color: string;
	fontSize: number;
	bottomLine: boolean;
}

const Tag: React.FC<TagProps> = ({tags, color, fontSize, bottomLine}) => {
	const Tags = tags.map((item) => {
		return <Container
			key={item}
			margin='0 10px 0 0'
			flexWrap='nowrap'
		>
			<Link to={`/tags/${item}`} style={{textDecoration: 'none'}}>
				<Button>
					<Text
						cursor='pointer'
						color={color}
						fontFamily={Font.tag}
						fontWeight={FontWeight.light}
						bottomLineColor={bottomLine ? color : ''}
						fontSize={fontSize}
					>
						#{item}
					</Text>
				</Button>
			</Link>
		</Container>
	})
	return <Container
		display='flex'
		alignItems='center'
		flexWrap='nowrap'
	>
		<Icon
			className={i_tag}
			color={color}
			cursor='default'
			margin='0 10px 0 0'
		/>
		{Tags}
	</Container>
}

export default Tag;

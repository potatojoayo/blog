import React from 'react'
import {Container, Text, Button, Icon} from '../styled'
import Font, {FontWeight} from '../../utill/Font'
import {i_tag} from '../../assets'


interface TagProps {
	tags: string[];
	color: string;
	fontSize: number;
}

const Tag: React.FC<TagProps> = ({tags, color, fontSize}) => {
	const Tags = tags.map((item) => {
		return <Container
			key={item}
			margin='0 10px 0 0'
		>
			<Button>
				<Text
					cursor='pointer'
					color={color}
					fontFamily={Font.tag}
					fontWeight={FontWeight.light}
					bottomLineColor={color}
					fontSize={fontSize}
				>
					#{item}
				</Text>
			</Button>
		</Container>
	})
	return <Container
		display='flex'
		alignItems='center'
		flexWrap='wrap'
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

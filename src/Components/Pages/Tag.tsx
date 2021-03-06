import React from 'react'
import {Container, Text, Icon} from '../styled'
import Font, {FontWeight} from '../../utill/Font'
import {i_tag} from '../../assets'


interface TagProps {
	tags: string[];
	color: string;
	fontSize: number;
	bottomLine: boolean;
	count?: number;
}

const Tag: React.FC<TagProps> = ({tags, color, fontSize, bottomLine, count}) => {
	const Tags = tags.map((item) => {
		return <Container
			key={item}
			margin='0 10px 0 0'
		>
			<Text
				cursor='pointer'
				color={color}
				fontFamily={Font.tag}
				whiteSpace='nowrap'
				fontWeight={FontWeight.light}
				bottomLineColor={bottomLine ? color : ''}
				fontSize={fontSize}
			>
				#{item} {count ? `(${count})` : ''}
			</Text>
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
			cursor='pointer'
			margin='0 10px 0 0'
		/>
		{Tags}

	</Container>
}

export default Tag;

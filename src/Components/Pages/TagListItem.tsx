import React from 'react'
import {Button} from '../styled'
import Tag from './Tag'

interface TagListItemProps {
	name: string;
	color: string;
	count?: number;
}

const TagListItem: React.FC<TagListItemProps> = ({name, color, count}) => {
	return <Button
		borderRadius='10px'
		backgroundColor={color}
		margin='5px 5px'
		padding='10px 10px'
	>
		<Tag tags={[name]} color={'#E0E0E0'} fontSize={15} bottomLine={false} count={count} />
	</Button>
}

export default TagListItem

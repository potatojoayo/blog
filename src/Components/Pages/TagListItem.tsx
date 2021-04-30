import React from 'react'
import {Button} from '../styled'
import Tag from './Tag'

interface TagListItemProps {
	name: string;
	color: string;
}

const TagListItem: React.FC<TagListItemProps> = ({name, color}) => {
	return <Button
		borderRadius='10px'
		backgroundColor={color}
		margin='5px 5px'
		padding='10px 10px'
	>
		<Tag tags={[name]} color={'#E0E0E0'} fontSize={15} bottomLine={false} />
	</Button>
}

export default TagListItem

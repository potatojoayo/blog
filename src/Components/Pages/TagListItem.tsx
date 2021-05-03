import React from 'react'
import {useSelector} from 'react-redux'
import {RootState} from '../../store'
import {DISPLAY_SIZE} from '../../utill/media_query'
import {Button} from '../styled'
import Tag from './Tag'

interface TagListItemProps {
	name: string;
	color: string;
	count?: number;
}

const TagListItem: React.FC<TagListItemProps> = ({name, color, count}) => {
	const displaySize = useSelector((state: RootState) => state.windowSizeState).displaySize
	return <Button
		borderRadius='10px'
		backgroundColor={color}
		margin='5px 5px'
		onClick={() => {window.scrollTo({top: 0})}}
		padding='10px 10px'
	>
		<Tag tags={[name]} color={'#E0E0E0'} fontSize={displaySize === DISPLAY_SIZE.MOBILE ? 13 : 15} bottomLine={false} count={count} />
	</Button>
}

export default TagListItem

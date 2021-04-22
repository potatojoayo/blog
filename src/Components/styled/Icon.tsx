import styled, {CSSObject} from '@emotion/styled'
import {themeTransitionProp} from '../../utill/Theme'

interface IconProps {
	className: CSSObject['className'];
	width?: CSSObject['width'];
	height?: CSSObject['height'];
	color?: CSSObject['color'];
	visibility?: CSSObject['visibility'];
	transform?: CSSObject['transform'];
	transition?: CSSObject['transition'];
	margin?: CSSObject['margin'];
	cursor?: CSSObject['cursor']
}

const Icon = styled.i({
	cursor: 'pointer',
	transition: themeTransitionProp

},
	(props: IconProps) => ({
		className: props.className,
		color: props.color,
		transform: props.transform,
		transition: props.transition,
		margin: props.margin,
		visibility: props.visibility,
		cursor: props.cursor,
	}
	)
)

export default Icon


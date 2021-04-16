import styled, {CSSObject} from '@emotion/styled'
import {themeTransitionProp} from '../../utill/Theme'

interface IconProps {
	className: CSSObject['className'];
	width?: CSSObject['width'];
	height?: CSSObject['height'];
	color?: CSSObject['color'];
	transform?: CSSObject['transform'];
	transition?: CSSObject['transition'];
	margin?: CSSObject['margin'];
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
	}
	)
)

export default Icon


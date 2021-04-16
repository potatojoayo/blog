import styled, {CSSObject} from '@emotion/styled'
import {themeTransitionProp} from '../../utill/Theme'


interface ButtonProps {
	boxShadow?: CSSObject['boxShadow'];
	width?: CSSObject['width'];
	height?: CSSObject['height'];
	backgroundColor?: CSSObject['backgroundColor'];
	color?: CSSObject['color'];
	borderRadius?: CSSObject['borderRadius'];
	border?: CSSObject['border'];
	textAlign?: CSSObject['textAlign'];
	fontFamily?: CSSObject['fontFamily'];
	fontSize?: CSSObject['fontSize'];
	margin?: CSSObject['margin'];
	justifySelf?: CSSObject['justifySelf'];
	display?: CSSObject['display'];
	flexDirection?: CSSObject['flexDirection'];
	position?: CSSObject['position']
	alignSelf?: CSSObject['alignSelf'];
	alignItems?: CSSObject['alignItems']
}

const Button = styled.div(
	{
		outline: 'none',
		cursor: 'pointer',
		'&:active': {
			transform: 'scale(.98)'
		},
		userSelect: 'none',
		transition: themeTransitionProp
	},
	(props: ButtonProps) => ({
		boxShadow: props.boxShadow,
		width: props.width,
		height: props.height,
		backgroundColor: props.backgroundColor,
		color: props.color,
		borderRadius: props.borderRadius,
		border: props.border,
		textAlign: props.textAlign,
		margin: props.margin,
		fontFamily: props.fontFamily,
		fontSize: props.fontSize,
		justifySelf: props.justifySelf,
		display: props.display,
		flexDirection: props.flexDirection,
		position: props.position,
		alignSelf: props.alignSelf,
		alignItems: props.alignItems,
	})
)

export default Button;

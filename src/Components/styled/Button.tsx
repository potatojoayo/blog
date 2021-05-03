import styled, {CSSObject} from '@emotion/styled'
import {themeTransitionProp} from '../../utill/Theme'
import mediaquery, {MediaQueryStyleProps, DISPLAY_SIZE} from '../../utill/media_query'


interface ButtonProps extends MediaQueryStyleProps {
	boxShadow?: CSSObject['boxShadow'];
	width?: CSSObject['width'];
	height?: CSSObject['height'];
	padding?: CSSObject['padding']
	backgroundColor?: CSSObject['backgroundColor'];
	color?: CSSObject['color'];
	borderRadius?: CSSObject['borderRadius'];
	right?: CSSObject['right'];
	border?: CSSObject['border'];
	textAlign?: CSSObject['textAlign'];
	fontFamily?: CSSObject['fontFamily'];
	fontSize?: CSSObject['fontSize'];
	margin?: CSSObject['margin'];
	justifySelf?: CSSObject['justifySelf'];
	justifyContent?: CSSObject['justifyContent']
	display?: CSSObject['display'];
	flexDirection?: CSSObject['flexDirection'];
	position?: CSSObject['position']
	alignSelf?: CSSObject['alignSelf'];
	alignItems?: CSSObject['alignItems']
	disableScale?: boolean;
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
		right: props.right,
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
		'&:active': {
			transform: props.disableScale ? 'scale(1)' : 'scale(.98)'
		},
		justifyContent: props.justifyContent,
		display: props.display,
		flexDirection: props.flexDirection,
		position: props.position,
		alignSelf: props.alignSelf,
		alignItems: props.alignItems,
		padding: props.padding,
		[mediaquery[DISPLAY_SIZE.MOBILE]]: props.mobile,
		[mediaquery[DISPLAY_SIZE.TABLET]]: props.tablet,
		[mediaquery[DISPLAY_SIZE.DESKTOP]]: props.desktop,
	})
)

export default Button;

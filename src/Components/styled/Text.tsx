import styled, {CSSObject} from '@emotion/styled'
import {themeTransitionProp} from '../../utill/Theme'



interface TextProps {
	fontSize?: CSSObject['fontSize']
	fontFamily?: CSSObject['fontFamily']
	transform?: CSSObject['transform']
	letterSpacing?: CSSObject['letterSpacing']
	textAlign?: CSSObject['textAlign']
	color?: CSSObject['color']
	margin?: CSSObject['margin']
	fontWeight?: CSSObject['fontWeight']
	cursor?: CSSObject['cursor']
	alignSelf?: CSSObject['alignSelf']
	bottomLineColor?: string
	transition?: CSSObject['transition']
}


const Text = styled.div(
	{
		cursor: 'default',
		userSelect: 'none',
		transition: themeTransitionProp,
	},
	(props: TextProps) => ({
		fontSize: props.fontSize,
		fontFamily: props.fontFamily,
		letterSpacing: props.letterSpacing,
		textAlign: props.textAlign,
		color: props.color,
		margin: props.margin,
		fontWeight: props.fontWeight,
		cursor: props.cursor,
		alignSelf: props.alignSelf,
		transform: props.transform,
		transition: props.transition,
		'&:hover': {
			borderBottom: props.bottomLineColor ? `0.15rem solid ${props.bottomLineColor}` : ''
		}
	})
);

export default Text;

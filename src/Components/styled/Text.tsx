import styled, {CSSObject} from '@emotion/styled'
import {themeTransitionProp} from '../../utill/Theme'
import mediaquery, {DISPLAY_SIZE} from '../../utill/media_query';


interface TextProps {
	fontSize?: CSSObject['fontSize']
	fontFamily?: CSSObject['fontFamily']
	transform?: CSSObject['transform']
	whiteSpace?: CSSObject['whiteSpace']
	width?: CSSObject['width']
	letterSpacing?: CSSObject['letterSpacing']
	textAlign?: CSSObject['textAlign']
	color?: CSSObject['color']
	margin?: CSSObject['margin']
	fontWeight?: CSSObject['fontWeight']
	display?: CSSObject['display']
	borderBottom?: CSSObject['borderBottom']
	cursor?: CSSObject['cursor']
	alignSelf?: CSSObject['alignSelf']
	bottomLineColor?: string
	transition?: CSSObject['transition']
	mobile?: CSSObject;
	desktop?: CSSObject;
	tablet?: CSSObject;
	userSelect?: CSSObject['userSelect'];
}


const Text = styled.div(
	{
		cursor: 'auto',
		userSelect: 'none',
		transition: themeTransitionProp,
		borderBottom: '0.15rem solid rgba(0,0,0,0)',
	},
	(props: TextProps) => ({
		fontSize: props.fontSize,
		fontFamily: props.fontFamily,
		letterSpacing: props.letterSpacing,
		textAlign: props.textAlign,
		color: props.color,
		margin: props.margin,
		[mediaquery[DISPLAY_SIZE.MOBILE]]: props.mobile,
		[mediaquery[DISPLAY_SIZE.TABLET]]: props.tablet,
		[mediaquery[DISPLAY_SIZE.DESKTOP]]: props.desktop,
		fontWeight: props.fontWeight,
		cursor: props.cursor,
		alignSelf: props.alignSelf,
		transform: props.transform,
		whiteSpace: props.whiteSpace,
		borderBottom: props.borderBottom,
		transition: props.transition,
		display: props.display,
		userSelect: props.userSelect,
		width: props.width,
		'&:hover': {
			borderBottom: props.bottomLineColor ? `0.15rem solid ${props.bottomLineColor}` : '',
			[mediaquery[DISPLAY_SIZE.MOBILE]]: {
				borderBottom: '0.15rem solid rgba(0,0,0,0)',
			},
		}
	})
);

export default Text;

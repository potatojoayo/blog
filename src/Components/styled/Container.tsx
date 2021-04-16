import styled, {CSSObject} from '@emotion/styled'
import {themeTransitionProp} from '../../utill/Theme'


interface ContainerProps {
	backgroundColor?: CSSObject['backgroundColor'];
	width?: CSSObject['width'];
	height?: CSSObject['height'];
	fontFamily?: CSSObject['fontFamily'];
	display?: CSSObject['display'];
	flexDirection?: CSSObject['flexDirection'];
	opacity?: CSSObject['opacity'];
	justifyContent?: CSSObject['justifyContent'];
	alignItems?: CSSObject['alignItems'];
	boxShadow?: CSSObject['boxShadow'];
	padding?: CSSObject['padding'];
	overflow?: CSSObject['overflow'];
	position?: CSSObject['position'];
	before?: CSSObject[':before'];
	bottom?: CSSObject['bottom'];
	top?: CSSObject['top'];
	transition?: CSSObject['transition'];
	zIndex?: CSSObject['zIndex'];
	margin?: CSSObject['margin'];
	cursor?: CSSObject['cursor'];
	borderRadius?: CSSObject['borderRadius'];
	left?: CSSObject['left'];
	transform?: CSSObject['transform'];
	minWidth?: CSSObject['minWidth'];
	maxWidth?: CSSObject['maxWidth'];
	flexGrow?: CSSObject['flexGrow'];
	minHeight?: CSSObject['minHeight'];
	fontSize?: CSSObject['fontSize'];
	maxHeight?: CSSObject['maxHeight'];
}

const Container = styled.div({
	maxWidth: '100%',
	boxSizing: 'border-box',
	transition: themeTransitionProp
}, (props: ContainerProps) => ({
	backgroundColor: props.backgroundColor,
	width: props.width,
	height: props.height,
	fontFamily: props.fontFamily,
	display: props.display,
	flexDirection: props.flexDirection,
	justifyContent: props.justifyContent,
	alignItems: props.alignItems,
	boxShadow: props.boxShadow,
	padding: props.padding,
	overflow: props.overflow,
	position: props.position,
	'&:before': props.before,
	bottom: props.bottom,
	top: props.top,
	transition: props.transition,
	zIndex: props.zIndex,
	margin: props.margin,
	borderRadius: props.borderRadius,
	left: props.left,
	transform: props.transform,
	opacity: props.opacity,
	minWidth: props.minWidth,
	maxWidth: props.maxWidth,
	flexGrow: props.flexGrow,
	minHeight: props.minHeight,
	fontSize: props.fontSize,
	maxHeight: props.maxHeight,
	cursor: props.cursor,
})
)

export default Container;

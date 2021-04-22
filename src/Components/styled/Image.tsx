import styled, {CSSObject} from '@emotion/styled';

import mediaquery, {DISPLAY_SIZE} from '../../utill/media_query';

interface ImageProps {
	backgroundImage?: string;
	width: number | string;
	height: number | string;
	position?: any;
	top?: number;
	left?: number;
	bottom?: number;
	right?: number;
	cursor?: string;
	margin?: CSSObject['margin'];
	zIndex?: number;
	boxShadow?: number;
	mobile?: CSSObject;
	desktop?: CSSObject;
	tablet?: CSSObject;
	backgroundSize?: string;
	backgroundPosition?: string;
	backgroundRepeat?: string;
	display?: string;
	transition?: string;
	opacity?: number;
	maxHeight?: number;
	transform?: string;
	filter?: CSSObject['filter'];
}

const Image = styled.div(
	{
		margin: 0,
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		transiton: 'filter ease-in-out .3s'
	},
	(props: ImageProps) => ({
		backgroundSize: props.backgroundSize,
		backgroundPosition: props.backgroundPosition,
		backgroundRepeat: props.backgroundRepeat,
		backgroundImage: props.backgroundImage,
		width: props.width,
		height: props.height,
		position: props.position,
		top: props.top,
		left: props.left,
		bottom: props.bottom,
		right: props.right,
		margin: props.margin,
		cursor: props.cursor,
		zIndex: props.zIndex,
		display: props.display,
		transition: props.transition,
		opacity: props.opacity,
		maxHeight: props.maxHeight,
		[mediaquery[DISPLAY_SIZE.MOBILE]]: props.mobile,
		[mediaquery[DISPLAY_SIZE.TABLET]]: props.tablet,
		[mediaquery[DISPLAY_SIZE.DESKTOP]]: props.desktop,
		transform: props.transform,
		filter: props.filter,
	})
);
export default Image;

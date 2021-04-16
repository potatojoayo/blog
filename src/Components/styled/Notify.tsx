import styled, {CSSObject} from '@emotion/styled'
import {themeTransitionProp} from '../../utill/Theme'

interface NotifyProps {
	borderRadius?: CSSObject['borderRadius'];
	width?: CSSObject['width'];
	height?: CSSObject['height'];
	backgroundColor?: CSSObject['backgroundColor'];
	color?: CSSObject['color'];
	boxShadow?: CSSObject['boxShadow'];
	opacity?: CSSObject['opacity'];
	display?: CSSObject['display'];
	transition?: CSSObject['transition'];
	visibility?: CSSObject['visibility'];
}

const Notify = styled.div(
	{
		padding: '20px 15px',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'space-between',
		position: 'absolute',
		left: '0',
		right: '0',
		top: '0',
		bottom: '0',
		marginLeft: 'auto',
		marginRight: 'auto',
		marginTop: 'auto',
		marginBottom: 'auto',
		zIndex: 11,
		transition: themeTransitionProp
	},
	(props: NotifyProps) => ({
		borderRadius: props.borderRadius,
		width: props.width,
		height: props.height,
		backgroundColor: props.backgroundColor,
		display: props.display,
		color: props.color,
		boxShadow: props.boxShadow,
		opacity: props.opacity,
		transition: props.transition,
		visibility: props.visibility,

	})
)

export default Notify;

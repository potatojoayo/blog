import styled, {CSSObject} from '@emotion/styled'

export enum DISPLAY_SIZE {
	MOBILE,
	TABLET,
	DESKTOP,
}

export const breakpoints = [820, 1100, 1920];

const mediaquery = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);


export interface MediaQueryStyleProps {
	mobile?: CSSObject;
	desktop?: CSSObject;
	tablet?: CSSObject;
}

export const MediaQueryStyle = styled.div({
}, (props: MediaQueryStyleProps) => ({
	[mediaquery[DISPLAY_SIZE.MOBILE]]: props.mobile,
	[mediaquery[DISPLAY_SIZE.TABLET]]: props.tablet,
	[mediaquery[DISPLAY_SIZE.DESKTOP]]: props.desktop,
}))


export default mediaquery;

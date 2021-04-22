import Colors from './Colors'

export interface ThemeType {
	background: string;
	mildBackground: string;
	text: string;
	icon: string;
	tag: string;
}
interface Themes {
	light: ThemeType;
	dark: ThemeType;
}

const LightTheme: ThemeType = {
	background: Colors.GRAY,
	mildBackground: Colors.GRAY,
	text: Colors.BLACK,
	icon: Colors.GRAY_BRIGHT,
	tag: Colors.BACK_END
}

const DarkTheme: ThemeType = {
	background: Colors.BLACK,
	text: Colors.GRAY_DARKER,
	mildBackground: Colors.DARK,
	icon: Colors.GRAY_BRIGHT,
	tag: Colors.BACK_END
}

const Theme: Themes = {
	light: LightTheme,
	dark: DarkTheme
}

export const themeTransitionProp = `backgroundColor ease-in-out .3s,
color ease-in-out .3s, 
`



export default Theme;


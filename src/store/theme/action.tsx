import ThemeActionType from './action_type'

export interface ThemeAction {
	type: ThemeActionType;
}

export const changeTheme = (): ThemeAction => {
	return {
		type: ThemeActionType.CHANGE_THEME
	}
}

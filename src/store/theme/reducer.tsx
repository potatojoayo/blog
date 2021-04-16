import {ThemeAction} from './action'
import ThemeActionType from './action_type'
import Theme, {ThemeType} from '../../utill/Theme'

interface ThemeState {
	theme: ThemeType;
	isDark: boolean
}

const initialState: ThemeState = {
	theme: Theme.light,
	isDark: false
}

const themeReducer = (state: ThemeState = initialState, action: ThemeAction) => {
	switch (action.type) {
		case ThemeActionType.CHANGE_THEME:
			if (!state.isDark)
				return {...state, theme: Theme.dark, isDark: true};
			return {...state, theme: Theme.light, isDark: false}
		default:
			return state;
	}
}

export default themeReducer;

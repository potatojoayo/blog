import SNACKBAR_ACTION_TYPE from './action_type'

export interface SnackbarAction {
	type: SNACKBAR_ACTION_TYPE;
	payload: string;
}

export const openSnackbar = (content: string): SnackbarAction => {
	return {
		type: SNACKBAR_ACTION_TYPE.OPEN_SNACKBAR,
		payload: content
	}
}

export const closeSnackbar = (): SnackbarAction => {
	return {
		type: SNACKBAR_ACTION_TYPE.CLOSE_SNACKBAR,
		payload: ''
	}
}

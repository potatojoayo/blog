import SNACKBAR_ACTION_TYPE from './action_type'
import {SnackbarAction} from './action'

export interface SnackbarState {
	isOpen: boolean;
	content: string;
}

const initialState: SnackbarState = {
	isOpen: false,
	content: ''
}

const SnackbarReducer
	= (state: SnackbarState = initialState, action: SnackbarAction) => {
		switch (action.type) {
			case SNACKBAR_ACTION_TYPE.OPEN_SNACKBAR:
				return {
					...state,
					isOpen: true,
					content: action.payload
				}
			case SNACKBAR_ACTION_TYPE.CLOSE_SNACKBAR:
				return {
					...state,
					isOpen: false,
				}
			default:
				return state;
		}
	}

export default SnackbarReducer;

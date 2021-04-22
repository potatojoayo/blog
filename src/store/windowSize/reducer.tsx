import WINDOW_SIZE_ACTION_TYPE from './action_type'
import {WindowSizeAction} from './action'
import {DISPLAY_SIZE} from '../../utill/media_query'

interface WindowSizeState {
	displaySize: DISPLAY_SIZE
}

const initialState: WindowSizeState = {
	displaySize: DISPLAY_SIZE.DESKTOP
}

const WindowSizeReducer = (state: WindowSizeState = initialState, action: WindowSizeAction): WindowSizeState => {
	switch (action.type) {
		case WINDOW_SIZE_ACTION_TYPE.SET_WINDOW_SIZE:
			return {
				...state,
				displaySize: action.payload
			}
		default:
			return state;
	}
}

export default WindowSizeReducer

import WINDOW_SIZE_ACTION_TYPE from './action_type'
import {DISPLAY_SIZE} from '../../utill/media_query'

export interface WindowSizeAction {
	type: string;
	payload: DISPLAY_SIZE
}

export const setWindowSize = (displaySize: DISPLAY_SIZE): WindowSizeAction => {
	return {
		type: WINDOW_SIZE_ACTION_TYPE.SET_WINDOW_SIZE,
		payload: displaySize
	}
}



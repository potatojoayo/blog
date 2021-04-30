import NOTIFIER_ACTION_TYPE from './action_type'
import {NotifierAction} from './action'

export interface NotifierState {
	isOpen: boolean
}

const initialState: NotifierState = {
	isOpen: false
}

const NotifierReducer = (state: NotifierState = initialState, action: NotifierAction) => {
	switch (action.type) {
		case NOTIFIER_ACTION_TYPE.TOGGLE:
			return {...state, isOpen: !state.isOpen}
		default:
			return state
	}
}

export default NotifierReducer;

import NOTIFIER_ACTION_TYPE from './action_type'

export interface NotifierAction {
	type: NOTIFIER_ACTION_TYPE
}

export const toggleNotifier = (): NotifierAction => {
	return {
		type: NOTIFIER_ACTION_TYPE.TOGGLE
	}
}





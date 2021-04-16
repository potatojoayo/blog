import SIDE_MENU_ACTION_TYPE from './action_type'

export interface SideMenuAction {
	type: SIDE_MENU_ACTION_TYPE;
	index?: number
}

export const toggleSideMenu = (): SideMenuAction => {
	return {
		type: SIDE_MENU_ACTION_TYPE.TOGGLE_SIDE_MENU
	}
}

export const toggleMenuItem = (index: number): SideMenuAction => {
	return {
		type: SIDE_MENU_ACTION_TYPE.TOGGLE_MENU_ITEM,
		index: index
	}
}


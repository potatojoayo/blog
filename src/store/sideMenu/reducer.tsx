import SIDE_MENU_ACTION_TYPE from './action_type';
import {SideMenuAction} from './action';

export interface SideMenuState {
	isSideMenuOpen: boolean;
	isMenuItemOpen: boolean[];
}

const initialState: SideMenuState = {
	isSideMenuOpen: false,
	isMenuItemOpen: [false, false, false, false]
}

const SideMenuReducer = (state: SideMenuState = initialState, action: SideMenuAction) => {
	switch (action.type) {
		case SIDE_MENU_ACTION_TYPE.TOGGLE_SIDE_MENU:
			if (state.isSideMenuOpen)
				return {...state, isSideMenuOpen: false}
			return {...state, isSideMenuOpen: true}
		case SIDE_MENU_ACTION_TYPE.TOGGLE_MENU_ITEM:
			const _isMenuItemOpen = state.isMenuItemOpen
			_isMenuItemOpen[action.index!] = !_isMenuItemOpen[action.index!]
			return {...state, isMenuItemOpen: _isMenuItemOpen}
		default:
			return state;
	}
}

export default SideMenuReducer

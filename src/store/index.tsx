import {createStore, combineReducers} from 'redux'
import ThemeReducer from './theme/reducer'
import NotifierReducer from './notifier/reducer'
import SnackbarReducer from './snackbar/reducer'
import SideMenuReducer from './sideMenu/reducer'

const reducers = combineReducers({
	themeState: ThemeReducer,
	notifierState: NotifierReducer,
	snackbarState: SnackbarReducer,
	sideMenuState: SideMenuReducer
})

export type RootState = ReturnType<typeof store.getState>

const store = createStore(reducers)

export default store;


import {createStore, combineReducers} from 'redux'
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import ThemeReducer, {ThemeState} from './theme/reducer'
import NotifierReducer, {NotifierState} from './notifier/reducer'
import SnackbarReducer, {SnackbarState} from './snackbar/reducer'
import SideMenuReducer, {SideMenuState} from './sideMenu/reducer'
import WindowSizeReducer, {WindowSizeState} from './windowSize/reducer'
import PostReducer, {PostState} from './post/reducer'


const persistConfig = {
	key: 'root',
	storage
}

const reducers = combineReducers({
	themeState: ThemeReducer,
	notifierState: NotifierReducer,
	snackbarState: SnackbarReducer,
	sideMenuState: SideMenuReducer,
	windowSizeState: WindowSizeReducer,
	postState: PostReducer
})

const persistedReducer = persistReducer(persistConfig, reducers)

export type RootState = {
	themeState: ThemeState,
	notifierState: NotifierState,
	snackbarState: SnackbarState,
	sideMenuState: SideMenuState,
	windowSizeState: WindowSizeState,
	postState: PostState
}

const store = createStore(persistedReducer)
export const persistor = persistStore(store)
export default store;


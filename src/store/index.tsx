import {createStore, combineReducers} from 'redux'
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import ThemeReducer from './theme/reducer'
import NotifierReducer from './notifier/reducer'
import SnackbarReducer from './snackbar/reducer'
import SideMenuReducer from './sideMenu/reducer'
import WindowSizeReducer from './windowSize/reducer'
import PostReducer from './post/reducer'


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

export type RootState = ReturnType<typeof store.getState>

const store = createStore(persistedReducer)
export const persistor = persistStore(store)
export default store;


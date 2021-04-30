import {PostAction, POST_ACTION_TYPE} from './action'
import {Post} from '../../Model'



export interface PostState {
	post: Post[]
}

const initalState: PostState = {
	post: []
}

const postReducer = (state: PostState = initalState, action: PostAction): PostState => {
	switch (action.type) {
		case POST_ACTION_TYPE.PUSH_POST:
			return {
				...state,
				post: action.payload.post
			}
		default:
			return state;
	}
}

export default postReducer;


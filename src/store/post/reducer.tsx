import {PostAction, POST_ACTION_TYPE} from './action'
import {Post} from '../../Model'
import {Category} from '../../global'



interface PostState {
	[category: string]: Post[],
}

const initalState: PostState = {
	[Category.frontEnd]: [],
	[Category.backEnd]: [],
	[Category.algorithm]: [],
	[Category.article]: [],
	[Category.works]: []
}

const postReducer = (state: PostState = initalState, action: PostAction) => {
	switch (action.type) {
		case POST_ACTION_TYPE.PUSH_POST:
			return {
				...state,
				[action.payload.category]: action.payload.post
			}
		default:
			return state;
	}
}

export default postReducer;


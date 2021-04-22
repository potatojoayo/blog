import {Post} from "../../Model";

export enum POST_ACTION_TYPE {
	PUSH_POST = 'PUSH_POST',
}

export interface PostAction {
	type: POST_ACTION_TYPE,
	payload: {
		post: Post[],
		category: string
	}
}

export const pushPosts = (posts: Post[], category: string): PostAction => {
	return {
		type: POST_ACTION_TYPE.PUSH_POST,
		payload: {
			post: posts,
			category: category
		}
	}
}


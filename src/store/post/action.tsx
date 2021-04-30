import {Post} from "../../Model";

export enum POST_ACTION_TYPE {
	PUSH_POST = 'PUSH_POST',
}

export interface PostAction {
	type: POST_ACTION_TYPE,
	payload: {
		post: Post[],
	}
}

export const pushPosts = (posts: Post[]): PostAction => {
	return {
		type: POST_ACTION_TYPE.PUSH_POST,
		payload: {
			post: posts,
		}
	}
}


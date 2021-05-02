
import {AxiosResponse} from 'axios';
import {getAllPosts} from '../api'
import Post, {PostType} from '../Model/Post'
import {pushPosts} from '..//store/post/action'
import {RootState} from '../store';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect, useState} from 'react';

const useDataFetcher = () => {
	const dispatch = useDispatch()
	const posts = useSelector((state: RootState) => state.postState).post
	const [postList, setPostList] = useState<PostType[]>([]);
	useEffect(() => {
		console.log('data fetcher worked')
		getAllPosts().then((res: AxiosResponse<Post[]>) => {
			dispatch(pushPosts(res.data))
			setPostList(res.data)
		})
	}, [dispatch, posts?.length])
	return postList
}

export default useDataFetcher;

import {PostType} from '../Model/Post'
import db from './db'

export const getAllPosts = () => db.get('/post/get_all')
export const writePost = (post: PostType) => db.post('/post/write', post)

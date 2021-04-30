import db from './db'

export const getAllPosts = () => db.get('/post/get_all')

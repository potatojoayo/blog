import axios from 'axios'

const db = axios.create({
	baseURL: 'https://potatojoayo.com/db/',
})


export default db;


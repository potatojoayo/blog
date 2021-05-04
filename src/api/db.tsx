import axios from 'axios'

const db = axios.create({
	baseURL: 'https://potatojoayo.com/db/',
	timeout: 30000
})


export default db;


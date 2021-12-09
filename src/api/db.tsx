import axios from 'axios'

const db = axios.create({
	baseURL: 'https://api.potatojoayo.com/',
	timeout: 30000
})


export default db;


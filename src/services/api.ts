import axios from 'axios'
 
const api = axios.create({
    baseURL: 'https://murilo-tarefa-backend.herokuapp.com'
})
 
export default api;

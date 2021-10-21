import axios from "axios";

const api = axios.create({
    baseURL: 'https://todoapp-25812-default-rtdb.firebaseio.com/'
})

export { api }

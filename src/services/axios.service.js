import axios from "axios";

import {baseURL} from "../configs";

const axiosService = axios.create({baseURL})


axiosService.interceptors.request.use((config) => {
    const tokenKey = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNzA2ZWUzNWI2Mjg5ZjIxNGE5OGQxZGU1Mzc2NTY2ZiIsInN1YiI6IjYzNGU2MzU1NDU5YWQ2MDA3YWZlYWUxMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.e9st_F0urjqc0jZ2stmjNidFt2RSV8dFUqj6Zh5ivAA';

    if (tokenKey) {
        config.headers.Authorization = `Bearer ${tokenKey}`
    }
    return config

})

export {
    axiosService
}
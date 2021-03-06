import axios from 'axios'

export const getAuthor = token =>{
    return{
        type: "GET_AUTHOR",
        payload: axios({
            method: 'GET',
            url: 'http://localhost:8080/v1/authors?page=1&limit=100',
            headers: {
              Authorization: token
            }
        })
    }
}
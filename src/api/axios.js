
import axios from "axios";

const apiFetchs = axios.create({
    baseURL: 'https://sport-server-eaqk.onrender.com'
})

export const events = async () =>{
    const response = await apiFetchs.get('/events')
    return response.data 
}

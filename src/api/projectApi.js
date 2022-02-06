import axios from "axios"

export const projectApi = {

  sendMessage(data) {
    
    return axios.post('http://localhost:3010/sendMessage', {...data})
    .then(res => res.data)
  
  },
}
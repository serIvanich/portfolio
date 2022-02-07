import axios from "axios"

export const projectApi = {

  sendMessage(data) {
    
    return axios.post('https://smpt-nodejs-gmail.herokuapp.com/sendMessage', {...data})
    .then(res => res.data)
  
  },
}
import axios from "axios"

export const projectApi = {

  sendMessage(data) {
    
    return axios.post('https://smpt-nodejs-gmail.herokuapp.com/sendMessage', {...data})
    .then(res => res.data)
  
  },
}
//url heroku
//http://https://smpt-nodejs-gmail.herokuapp.com/sendMessage


// http://localhost:3010/sendMessage

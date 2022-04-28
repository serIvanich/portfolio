import axios from 'axios'

export const projectApi = {

  sendMessage(data) {
    
    return axios.post('https://smpt-nodejs-gmail.herokuapp.com/sendMessage', {...data})
    .then(res => res.data)
  
  },
}
//url heroku
//https://smpt-nodejs-gmail.herokuapp.com/sendMessage

//url local
// http://localhost:3010/sendMessage

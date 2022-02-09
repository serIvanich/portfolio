import axios from "axios"

export const projectApi = {

  sendMessage(data) {
     //console.log(data)
    //return new Promise((res, rej) => setTimeout(() => rej('my promise error'), 3000)) 
    return axios.post('https://smpt-nodejs-gmail.herokuapp.com/sendMessage', {...data})
    .then(res => res.data)
  
  },
}
//url heroku
//http://https://smpt-nodejs-gmail.herokuapp.com/sendMessage


// http://localhost:3010/sendMessage

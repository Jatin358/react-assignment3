import axios from "axios";


const LoginService = {

     loginData: function(url , state, isHeader) {

        const headers = {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
        };
        if(isHeader){
    
            return axios.post(url, state, {headers})
        }else{
    
            return axios.post(url, state)
        }
    },
    Addnews: function(url , news) {
        const headers = {
             'Content-Type': 'application/json'
        };
        return axios.post(url, news, {headers})
    }
}

export default LoginService;
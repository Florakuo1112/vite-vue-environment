import { defineStore } from 'pinia'
const VITE_URL = import.meta.env.VITE_APP_URL;
import axios from 'axios';

export default defineStore('checkLogin', {
  state:()=>{
    return {
      isLogin:false,
    }
  },
  actions:{
    checkLogin(){
      const token = document.cookie.split("; ").find((row) => row.startsWith("floraFirstApiToken="))?.split("=")[1];
      axios.defaults.headers.common['Authorization']=token 
      axios.post(`${VITE_URL}/api/user/check`).then((res)=>{
        console.log('已登入', res.data)
        this.isLogin = true,
        console.log(this.isLogin)
        if(location.href == './index.html#/admin/login'){
          location.replace(location.href);
        }

        return
      }).catch((err)=>{
        console.log('請重新登入', err.response.data.message);
        window.location.href='./index.html#/admin/login'
      })
  },
  }
})

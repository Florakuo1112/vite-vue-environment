<template>
<h1>請登入後台</h1>
  <form id="form" class="form-signin">
    <div class="form-floating mb-3">
        <input type="email" class="form-control" id="username"
        placeholder="name@example.com" required autofocus v-model='temp.username'>
        <label for="username">Email address</label>
    </div>
    <div class="form-floating">
      <input type="password" class="form-control" id="password"
      placeholder="Password" required v-model='temp.password' >
      <label for="password">Password</label>
    </div>
      <button class="btn btn-lg btn-primary w-100 mt-3" type="button" @click.prevent='login'>登入</button>
    </form>
</template>

<script>
const VITE_URL = import.meta.env.VITE_APP_URL;
const VITE_PATH = import.meta.env.VITE_APP_PATH;
import axios from 'axios';
//pinia
import { mapActions } from "pinia";
import checkLogin from '../../stores/checkLogin.js'

export default{
  data(){
    return{
      temp:{
        'username':'',
        'password':'',
      }
    }
  },
  methods:{
    ...mapActions(checkLogin, ['checkLogin']),
    login(){
      axios.post(`${VITE_URL}/admin/signin`, this.temp)
    .then((res)=>{
      console.log(res);
      const {token, expired} = res.data;
      console.log(token, expired)
      document.cookie = `floraFirstApiToken=${token}; expires=${new Date(expired)}`;
      window.location.href='./index.html#/admin/products'
    })
    },
  
},
mounted(){
  console.log(VITE_PATH,VITE_URL)
  this.checkLogin()
  },}
</script>

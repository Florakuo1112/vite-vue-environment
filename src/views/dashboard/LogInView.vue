<template>
<LaodingOverlay :active='isLoading'/>
<div class='bg-warning py-6  vh-100'>
<div class='container pt-6'>
<div v-if='!isLogin' class="row d-flex flex-column align-items-center">
<div  class=" col-lg-5 ">
<h1 style='font-family:Amatic SC' >
  I solemnly swear that 
...
  <br>   
  I am up to no good
    <i class="fa-solid fa-shoe-prints" style="font-size:32px"></i>
    <i class="fa-solid fa-shoe-prints"  style="font-size:32px"></i>
    <i class="fa-solid fa-shoe-prints"  style="font-size:32px"></i>
    <i class="fa-solid fa-shoe-prints"  style="font-size:32px"></i> 
</h1>
  <form id="form" class="form-signin">
    <div class="form-floating mb-3">
        <input type="email" class="form-control bg-transparent border-primary" id="username"
        placeholder="name@example.com" required autofocus v-model='temp.username'>
        <label for="username">Email address</label>
    </div>
    <div class="form-floating">
      <input type="password" class="form-control bg-transparent  border-primary" id="password"
      placeholder="Password" required v-model='temp.password' >
      <label for="password">Password</label>
    </div>
      <button class="btn btn-lg btn btn-outline-primary w-100 mt-3 d-flex align-items-center justify-content-center" type="button" @click.prevent='login'>
      <i class="fa-solid fa-hat-wizard mb-0" style="font-size:20px"></i>
      <p style='font-family:Amatic SC ;font-size:32px' class="mb-0" >
      LOGIN
      </p>
      </button>
    </form>
</div>
</div>

<div v-else>
  <h1 style='font-family:Amatic SC' class="d-flex flex-column align-items-center">
    <div>Messrs</div>
    <div style='font-size:48px'>Moony, Wormtail</div>
    <div style='font-size:48px'>Padfoot &  Prongs</div>
    <div style='font-size:24px'>are proud to present </div>
    <div style="font-weight:bold; font-size:48px">the</div>
     <div  style="font-weight:bold ; font-size:48px">Marauder's</div>
    <div  style="font-weight:bold; font-size:48px">map</div>
  </h1>
</div>

</div>
</div>

</template>

<script>
const VITE_URL = import.meta.env.VITE_APP_URL;
const VITE_PATH = import.meta.env.VITE_APP_PATH;
import axios from 'axios';
//pinia
import { mapActions, mapState } from "pinia";
import checkLogin from '../../stores/checkLogin.js'

export default{
  data(){
    return{
      temp:{
        'username':'',
        'password':'',
      },
      isLoading:true,
    }
  },
  computed:{
    ...mapState(checkLogin, ['isLogin'])
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
      
      window.location.reload();
      this.isLoading=false;
      //window.location.href='./index.html#/admin/products'
    })
    },
  
},
mounted(){
  console.log(VITE_PATH,VITE_URL)
  this.checkLogin()
  this.isLoading=false;
  },}
</script>

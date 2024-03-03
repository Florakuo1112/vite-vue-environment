<template>
<h1>後台的產品列表</h1>
</template>

<script>
const VITE_URL = import.meta.env.VITE_APP_URL;
const VITE_PATH = import.meta.env.VITE_APP_PATH;
//import axios from 'axios';
//pinia
import { mapActions } from "pinia";
import checkLogin from '../../stores/checkLogin.js'

export default{
  data(){
    return{
    }
  },
  methods:{
    ...mapActions(checkLogin, ['checkLogin']),
  
},
mounted(){
  console.log(VITE_PATH,VITE_URL)
  this.checkLogin()
  },}
</script>

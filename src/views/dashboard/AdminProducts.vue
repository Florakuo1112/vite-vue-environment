<template>
<LaodingOverlay :active='isLoading'/>

<div class='container pt-4 pb-6  '>
  <h1>本學期課程清單</h1>
  <div class="d-flex justify-content-end mb-2">
  <button type="button" class="btn btn-outline-primary d-flex align-items-center mb-3 " @click='openModal(null)'>
    <i class="fa-solid fa-plus d-flex justify-content-end" style="font-size:16px"></i>
    <p class='mb-0 ms-1'>Add new course</p>
  </button>
  </div>
  

<table class="table  table-warning table-bordered 
border-primary table-hover ">
  <thead>
    <tr>
      <th scope="col" class="text-center">Status</th>
      <th scope="col" class="text-center">Course</th>
      <th scope="col" class="text-center">Prof</th>
      <th scope="col" class="text-center">Galleon</th>
      <th scope="col" class="text-center">Edit</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for='item in productList' :key='item.id'>
    <td class="text-center">
      <p v-if='item.is_enabled == true'>已開放</p>
      <p v-else>未開放</p>
    </td>
      <td class="text-center">{{item.title}}</td>
      <td class="text-center">{{item.content}}</td>
      <td class="text-center">{{item.price}}</td>
      <td class="text-center">
        <button title='Alohomora ' class="bg-transparent border-0" @click='openModal(item)'>
          <i class="fa-solid fa-pen"></i>
        </button>
      </td>
    </tr>
  </tbody>
</table>
<div  class='d-flex justify-content-center'>
<pagination :pages='pages' :getItem='getItem'></pagination>
 </div>
<CourseModal ref='courseModal' :getItem='getItem'></CourseModal>
</div> 





</template>

<script>
const VITE_URL = import.meta.env.VITE_APP_URL;
const VITE_PATH = import.meta.env.VITE_APP_PATH;
import axios from 'axios';
import CourseModal from '../../components/CourseModal.vue';
import pagination from '../../components/PaginationView.vue'

//pinia
import {  mapState, } from "pinia";
import checkLogin from '../../stores/checkLogin.js'



export default{
  components:{
    CourseModal,
    pagination
  },
  data(){
    return{
      productList:[],
      isLoading:true,
      pages:{},
    }
  },
  computed:{
    ...mapState(checkLogin, ['isLogin'])
  },
  methods:{
    getItem(page=1){
      axios.get(`${VITE_URL}/api/${VITE_PATH}/admin/products?page=${page}`)
    .then((res)=>{
      console.log(res);
      this.productList = res.data.products;
      this.pages = res.data.pagination;
      this.isLoading=false;
    }) 
    },
    openModal(item){
      let newItem = {...item};
      this.$refs.courseModal.showModal(newItem);
    //console.log(this.edit)

    }
    },
    mounted(){
      if(this.isLogin == false){
        this.$router.push({name:'login'})
      }else{
              this.getItem();
      }


      },}
</script>

<style>
p{
  margin-bottom: 0px;
}
</style>

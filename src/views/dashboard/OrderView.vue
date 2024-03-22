<template>
<LaodingOverlay :active='isLoading'/>
<div class="container vh-100 ">
<div class="d-flex mb-2 justify-content-lg-between flex-lg-row flex-column align-items-lg-center">
<h1 class=' pb-2  text-primary'>學生選課資訊</h1>

<div class="dropdown col-lg-4 border border-primary rounded-pill d-flex align-items-center " style="height:40px;">
    
    <i class="fa-brands fa-searchengin ms-4" style="font-size:24px"></i>

  <input class="w-75 h-75 " id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false"
  style='border:none ;height:40px; background-color:transparent'
  placeholder='查詢學生'  v-model='search'>
  <ul class="dropdown-menu w-75" aria-labelledby="dropdownMenu2"
  v-show="search">
    <li  v-if='filterStudent.length==0' ><button class="dropdown-item" disabled>查無學生</button></li>
    <li v-for='item in filterStudent' :key='item.user.name'><button class="dropdown-item" type="button" @click='openModal(item)' >{{item.user.name}} from {{item.user.address}}</button></li>
  </ul>

</div>
</div>

<table class=" table table-warning h6 table-hover table-bordered 
border-primary">
    <thead>
        <tr>
        <th>學生</th>
        <th>學院</th>
        <th>是否註冊</th>
        <th>訂單id</th>
        </tr>
    </thead>
    <tbody>
    <tr v-for='item in orderList' :key="item.id"
    @click='openModal(item)' style="font-size:14px">
        <th class="col-3">{{item.user.name}}</th>
        <th class="col-3"> {{item.user.address}}</th>
        <!-- <th >{{new Date(item.create_at*1000)}}</th> -->
        <th class="col-3">{{item.is_paid?'已註冊':'未註冊'}}</th>
        <th><p style="font-size:12px" class="mb-0">{{item.id}}</p></th>
    </tr>
    </tbody>
</table>
<div class='d-flex justify-content-center'>
<pagination :pages='pages' :getItem='getItem'  ></pagination>
</div>

<orderModal ref='orderDetail' :getItem='getItem' :pages='pages' ></orderModal>
</div>

</template>

<script>
const VITE_URL = import.meta.env.VITE_APP_URL;
const VITE_PATH = import.meta.env.VITE_APP_PATH;
import axios from 'axios';
import pagination from '../../components/PaginationView.vue'
import orderModal from '../../components/OrderModal.vue'
//pinia
import {  mapState, } from "pinia";
import checkLogin from '../../stores/checkLogin.js'


export default {
    components:{
        pagination,
        orderModal,
    },
    data(){
        return{
            orderList:[],
            pages:{},
            isLoading:true,
            search:'',
            filterStudents:[],
            
        }
    },
    methods:{
        getItem(page=1){
            axios.get(`${VITE_URL}/api/${VITE_PATH}/admin/orders?page=${page}`)
            .then((res)=>{
                console.log(res)
                this.orderList = res.data.orders;
                this.pages = res.data.pagination;
                this.isLoading=false
            })
        },
        openModal(order){
            //this.currentOrder = order;
           // console.log(this.currentOrder)
            this.$refs.orderDetail.modalShow(order)
        },
    },
    computed:{
        ...mapState(checkLogin, ['isLogin']),
        filterStudent(){
            return this.orderList.filter((item)=>{
                // console.log(item.user.name.match(this.search));
                return item.user.name.toLowerCase().match(this.search) 
            })
        }
    },
    mounted(){
      if(this.isLogin == false){
        this.$router.push({name:'login'})
      }else{
        this.getItem();
      }
    }
}
</script>

<style>
.dropdown{
margin-top:70px;
@media(max-width: 992px){
   margin-top:0px;
    margin-bottom:16px;
}
}
</style>
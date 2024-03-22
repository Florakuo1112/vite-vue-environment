<template>
<LaodingOverlay :active='isLoading' />

<div class='container py-4 vh-100  '>
  <h1>學費減免管理</h1>
  <div class="d-flex justify-content-end mb-2">
  <button type="button" class="btn btn-outline-primary d-flex align-items-center mb-3 "
  @click='openCouponModal'>
    <i class="fa-solid fa-plus d-flex justify-content-end" style="font-size:16px"></i>
    <p class='mb-0 ms-1'>Add new code</p>
  </button>
  </div>
  

<table class="table  table-warning table-bordered 
border-primary table-hover ">
  <thead>
    <tr>
      <th scope="col" class="text-center">專案名稱</th>
      <th scope="col" class="text-center">減免額度</th>
      <th scope="col" class="text-center">到期日</th>
      <th scope="col" class="text-center">code</th>
      <th scope="col" class="text-center">狀態</th>
      <th scope="col" class="text-center">編輯</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for='item in couponList' :key='item.id'>
      <td class="text-center">{{item.title}}</td>
      <td class="text-center">{{item.percent==0?'全免':`${100-item.percent}% off` }}</td>
      <td class="text-center">{{`
      ${new Date(item.due_date*1000).getFullYear()} /
      ${new Date(item.due_date*1000).getMonth()+1} /
        ${new Date(item.due_date*1000).getDate()}
      `  
      }}</td>
      <td class="text-center">{{item.code}}</td>
      <td class="text-center">
      <p v-if='item.is_enabled == true'>已開放</p>
      <p v-else>未開放</p>
      </td>
      <td class="text-center">
        <button title='Alohomora ' class="bg-transparent border-0" @click='openCouponModal(item)'>
          <i class="fa-solid fa-key text-warning"></i>
        </button>
      </td>
    </tr>
  </tbody>
</table>
<pagination :pages='pages' :getItem='getItem'></pagination>
</div> 

<couponModal ref='coupon' :getItem='getItem'></couponModal>
</template>

<script>
const VITE_URL = import.meta.env.VITE_APP_URL;
const VITE_PATH = import.meta.env.VITE_APP_PATH;
import axios from 'axios';
import couponModal from '../../components/CouponModal.vue'
import pagination from '../../components/PaginationView.vue'
//pinia
import {  mapState, } from "pinia";
import checkLogin from '../../stores/checkLogin.js'


export default {
    components:{
        couponModal,
        pagination
    },
    data(){
        return{
            couponList:[],
            isLoading:true,
            tempCoupon:{},
            pages:{}
        }
    },
    methods:{
        openCouponModal(item){
           this.$refs.coupon.showModal(item)
        },
        getItem(page=1){
        axios.get(`${VITE_URL}/api/${VITE_PATH}/admin/coupons?page=${page}`)
        .then((res)=>{
            console.log(res);
            this.pages = res.data.pagination;
            this.couponList=res.data.coupons;
            this.isLoading=false
        })
        .catch((err)=>{
            console.log(err)
        })
        }
    },
  computed:{
    ...mapState(checkLogin, ['isLogin'])
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
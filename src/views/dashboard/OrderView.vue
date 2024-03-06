<template>
<div class="bg-warning vh-100 ">
<LaodingOverlay :active='isLoading'/>
    <div class="container">
<h1 class='pt-6 pb-2  text-primary'>學生選課資訊</h1>
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
<pagination :pages='pages' :getAdminProductList="getAdminProductList" style="position:fixed; bottom:50px" ></pagination>
</div>

<orderModal ref='orderDetail'></orderModal>
</div>
</div>
</template>

<script>
const VITE_URL = import.meta.env.VITE_APP_URL;
const VITE_PATH = import.meta.env.VITE_APP_PATH;
import axios from 'axios';
import pagination from '../../components/OrderPagination.vue'
import orderModal from '../../components/OrderModal.vue'
//pinia
import { mapActions } from "pinia";
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
            
        }
    },
    methods:{
        ...mapActions(checkLogin, ['checkLogin']),
        getAdminProductList(page=1){
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
    mounted(){
        this.checkLogin(),
        this.getAdminProductList()
    }
}
</script>
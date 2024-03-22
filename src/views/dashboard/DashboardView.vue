<template>
<div class="d-flex row pt-5  vh-100">
<ul class="list-group col-2 pt-4 bg-primary px-3 " >
  <li class="list-group-item bg-transparent border-0">
       <RouterLink to='/admin/products' class='text-secondary'><i class="fa-solid fa-landmark-dome me-2 " style='font-size:20px' ></i>課程管理</RouterLink> 
  </li>
  <li class="list-group-item bg-transparent border-0">
      <RouterLink to='/admin/order' class='text-secondary'><i class="fa-solid fa-scroll-torah me-2" style='font-size:20px' ></i>註冊管理</RouterLink> 
  </li>
  <li class="list-group-item bg-transparent border-0">
      <RouterLink to='/admin/coupon' class='text-secondary'><i class="fa-solid fa-hand-holding-dollar me-2" style='font-size:20px' ></i>學費減免</RouterLink> 
  </li>
</ul>

<div class="col-10 ps-0 bg-warning">
<RouterView></RouterView>
</div>
</div>

</template>

<script>
//pinia
import { mapActions, mapState, } from "pinia";
import checkLogin from '../../stores/checkLogin.js'

export default {
    computed:{
        ...mapState(checkLogin, ['isLogin']),
    },
    methods:{
        ...mapActions(checkLogin, ['checkLogin'])
    },
    mounted(){
        this.checkLogin();


    }
}
</script>
<style>
.active{
    color:red
}
</style>
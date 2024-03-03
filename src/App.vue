<script >
import { RouterLink, RouterView } from 'vue-router';
export default{
  components:{
  RouterLink, 
  RouterView, 
  },
 }
</script>

<template>
  <header>

    <div class="wrapper">
      <nav>
        前台
        <RouterLink to="/home">首頁</RouterLink> |
        <RouterLink to='/products'>產品列表</RouterLink> |
        <RouterLink to='/cart'>
           <i class="fa-solid fa-cart-shopping"></i>
        </RouterLink> 
      </nav>
      <nav>
        後台
        <RouterLink to="/admin/login">Login</RouterLink> |
        <RouterLink to='/admin/products'>admin</RouterLink> |
      </nav>
    </div>

   


  </header>

  <div class='container'>
    <RouterView/>
  </div>
</template>


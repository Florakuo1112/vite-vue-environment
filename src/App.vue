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
  <header class='bg-secondary py-3 row mx-0' style="position:fixed; width:100%; z-index: 100;">
    <div class="wrapper text-primary col-3 col-lg-2 ms-2">
      <nav class='d-flex justify-content-between'>
        <p class='mb-0' style="font-family:'Amatic SC' ">for students</p>
        <RouterLink to="/home">
          <i class="fa-brands fa-fort-awesome text-primary" style='text-decoration:none; font-size:20px' title='首頁'></i>
        </RouterLink> 
        <RouterLink to='/products' style="text-decoration:none">
        <i class="fa-solid fa-wand-sparkles"  style='text-decoration:none; font-size:20px' title='選課清單'></i>
        </RouterLink> 
        <RouterLink to='/cart'>
           <i class="fa-solid fa-feather text-primary" style='text-decoration:none; font-size:20px' title='已選課程'></i>
        </RouterLink> 
      </nav>
    </div>
  </header>

  <div >
    <RouterView/>
  </div>

  <footer class='bg-secondary py-3 row mx-0' style="position:fixed; bottom:0; width:100% ;z-index: 100;" >
      <div class="wrapper bg-secondary col-3 col-lg-2 ms-2">
      <nav class='d-flex justify-content-between'>
        <p class='mb-0' style="font-family:'Amatic SC'">for professors</p>
        <RouterLink to="/admin/login"><i class="fa-solid fa-wand-magic-sparkles" style='font-size:20px' title='登入'></i></RouterLink> 
        <RouterLink to='/admin/products'><i class="fa-solid fa-landmark-dome" style='font-size:20px' title='課程管理' ></i></RouterLink> 
        <RouterLink to='/admin/order'><i class="fa-solid fa-scroll-torah" style='font-size:20px' title='註冊管理' ></i></RouterLink> 
      </nav>
    </div>
  </footer>



</template>

<style lang="scss">
i{
  active{
    color:primary;
  }
}
</style>


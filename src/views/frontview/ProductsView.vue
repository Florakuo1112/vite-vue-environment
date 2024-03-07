<template>
<LaodingOverlay :active='isLoading'/>
<div style='background-color:#460114' class="pb-6 min-vh-100 ">

  <div class='container pb-5'>
       <!-- <pre>{{cart}}</pre> -->
    <h1 class='pt-6  text-secondary'>本學期課程</h1>
    <toastview ref='toastRef' style="position:fixed; top:70px; right:0" ></toastview>
    <!-- pc -->
  <swiper
    :slidesPerView="2"
    :spaceBetween="50"
    :loop="true"
    :navigation="true"
    :modules="modules"
    class="mySwiper py-3 d-none d-lg-block"
  >
    <swiper-slide v-for='product in productList' :key='product.id' class='d-flex mx-2 p-3  bg-warning rounded'>
    <img :src='product.imageUrl' class='rounded'>
    <div class='d-flex flex-column justify-content-between mb-3'>
      <ul>
        <li class='mb-1' style='list-style:none'>課程名稱: {{product.title}}</li>
        <li class='mb-1' style='list-style:none'>教授: {{product.content}} </li>
        <li class='mb-1' style='list-style:none'>內容: {{product.description}}</li>
        <li class='mb-1' style='list-style:none'>時間: {{product.time}} </li>
        <li class='mb-1' style='list-style:none'>教室: {{product.classroom}} </li>
        <li class='mb-1' style='list-style:none'>學分數: {{product.price/5000}}</li>
      </ul>

      <button @click='adding(product.id)' :disabled='isDisabled(product.title)' :title="isDisabled(product.title)? '已加入選課清單':'可加選'"
      type="button" class=" btn btn-outline-primary  ms-4  d-flex align-items-center justify-content-center" style="font-size:24px">
            <i class="fa-solid fa-hat-wizard mb-0" style="font-size:20px"></i>
            <p class='mb-0' style='font-family:Amatic SC'>ACCIO</p>
      </button>
    </div>
    </swiper-slide>
  </swiper>
    <!-- 手機 -->

    <ul class="d-lg-none d-flex flex-column align-items-center row ps-0">
      <li  class="col-11 p-3 mb-3  bg-warning rounded " v-for='product in productList' :key='product.id'>
        <div class="card border-0">
          <div class="card-body bg-warning">
            <h5 class="card-title">課程名稱: {{product.title}}</h5>
            <div class="d-flex justify-content-center border border-2 py-4 border-primary rounded mb-3">
             <img :src='product.imageUrl' class='rounded w-75' style="height:300px; object-fit:cover">
            </div>
      <ul class='p-0'>
        <li class='mb-1' style='list-style:none'>教授: {{product.content}} </li>
        <li class='mb-1' style='list-style:none'>內容: {{product.description}}</li>
        <li class='mb-1' style='list-style:none'>時間: {{product.time}} </li>
        <li class='mb-1' style='list-style:none'>教室: {{product.classroom}} </li>
        <li class='mb-1' style='list-style:none'>學分數: {{product.price/5000}}</li>
      </ul>
      <button @click='adding(product.id)' :disabled='isDisabled(product.title)' :title="isDisabled(product.title)? '已加入選課清單':'可加選'"
      type="button" class=" btn btn-outline-primary w-100   d-flex align-items-center justify-content-center" style="font-size:24px">
            <i class="fa-solid fa-hat-wizard mb-0" style="font-size:20px"></i>
            <p class='mb-0' style='font-family:Amatic SC'>ACCIO</p>
      </button>
         </div>
        </div>
      </li>
    </ul>

  </div>
</div>

</template>

<script>
const VITE_URL = import.meta.env.VITE_APP_URL;
const VITE_PATH = import.meta.env.VITE_APP_PATH;
import paginations from '../../components/PaginationView.vue'
import toastview from '../../components/ToastView.vue'

import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
//pinia
import { mapActions, mapState} from "pinia";
import cartStore from '../../stores/cartStore.js'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default{
  components:{
    paginations,
    Swiper,
    SwiperSlide,
    toastview
    },
  data(){
    return{
        productList:[],
        pages:{},
        modules:[Navigation,Autoplay ],
        test:'true',
        isLoading:true,

    }
  },
  computed:{
    ...mapState(cartStore, ['courseList']),
    },
  methods:{
    ...mapActions(cartStore, ['addToCart','getCartItem']),
    changePage(id){
      this.$router.push(`/products/${id}`)
    },
    getProduct(){
      this.axios.get(`${VITE_URL}/api/${VITE_PATH}/products/all`)
      .then((res)=>{
          this.productList = res.data.products;
          console.log(this.productList);
          this.isLoading=false;
      });
    },
    adding(id){
      this.$refs.toastRef.showToast()
      this.addToCart(id);
    },
    isDisabled(title){
      return this.courseList.some(item =>item == title)
    }
  },
  mounted(){
    this.getCartItem()
    this.getProduct();
    this.isDisabled()
    //console.log(this.cart)
},
}

</script>

<style lang="scss">


.swiper {
    height: calc(100%);
}
.swiper-slide{
  height:500px;
}
.swiper-slide img {
  display: block;
  width: 200px;
  height:100%;
  object-fit: cover;
}

.swiper-button-prev {
  display:none
}
.swiper-button-next {
  display:none
}

</style>
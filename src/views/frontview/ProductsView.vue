<template>
<h1 class='text-primary'>產品列表</h1>
<table class='table'>
    <tbody>
        <tr v-for='product in productList' :key='product.id'>
        <td>{{product.title}}</td>
        <td></td>
        <td></td>
        <td></td>
        <td><RouterLink :to='`/products/${product.id}`'>產品介紹頁</RouterLink></td>
        <!-- <td><a href='#' @click.prevent='changePage(product.id)'>切換頁面js</a></td> -->
        </tr>
    </tbody>
</table>


<pagination :pages='pages' :getProduct="getProduct"></pagination>

</template>

<script>
const VITE_URL = import.meta.env.VITE_APP_URL;
const VITE_PATH = import.meta.env.VITE_APP_PATH;
import axios from 'axios';
import pagination from '../../components/PaginationView.vue'

export default{
  components:{
    pagination,
  },
  data(){
    return{
        productList:[],
        pages:{},
    }
  },
  methods:{
    changePage(id){
      this.$router.push(`/products/${id}`)
    },
    getProduct(page=1){
      axios.get(`${VITE_URL}/api/${VITE_PATH}/products?page=${page}`)
      .then((res)=>{
          this.pages = res.data.pagination;
          this.productList = res.data.products;
      });
    }
  },
  mounted(){
    this.getProduct()
  
}
}

</script>
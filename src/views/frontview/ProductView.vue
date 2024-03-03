<template>
<h2 class='text-primary'>這是單一產品頁面</h2>
{{product.title}}
<br>
<img :src='product.imageUrl'>
<br>
{{qty}}
<div class='d-flex justify-content-center'> 
<button type='button' @click='reduceQty'>-</button>
<input type="number" v-model='qty' disabled class='w-25 text-center'>
<button type='button' @click='addQty'>+</button>

<button type="button" @click='addToCart(product.id)'>加入購物車</button>
</div>
</template>

<script>
const VITE_URL = import.meta.env.VITE_APP_URL;
const VITE_PATH = import.meta.env.VITE_APP_PATH;

//import axios from 'axios';
//pinia
import { mapActions, mapState } from "pinia";
import cartStore from '../../stores/cartStore.js';

export default {
    data(){
        return{
            product:{},
        }
    },
    computed:{
        ...mapState(cartStore, ['qty']),
    },
    methods:{
        ...mapActions(cartStore, ['addToCart', 'addQty', 'reduceQty'])
    },
    mounted(){
        //console.log(this.$route.params.id)//物件，網址上的參數
        //console.log(this.$router)//方法，可以呼叫的函示
        const id = this.$route.params.id;
        this.$http.get(`${VITE_URL}/api/${VITE_PATH}/product/${id}`)
      .then((res)=>{
          console.log(res.data);
          this.product = res.data.product
      })
    }

}
</script>
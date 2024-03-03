import { defineStore } from 'pinia'
const VITE_URL = import.meta.env.VITE_APP_URL;
const VITE_PATH = import.meta.env.VITE_APP_PATH;
import axios from 'axios';

export default defineStore('cartStore', {
    state:()=>({
        qty:1,
        cart:[],
    }),
    actions:{
        addToCart(id){
            console.log(id);
            const data = {
                product_id : id,
                qty : this.qty
            };
            //console.log(data);
            axios.post(`${VITE_URL}/api/${VITE_PATH}/cart`,
              { data }
            ).then((res) => {
                console.log(res);
                this.qty = 1;
            })
            .catch((err) => {
              console.error(err);
            });
        },
        addQty(){
            this.qty ++;
        },
        reduceQty(){
            if(this.qty>1){
                this.qty--;
            };
        },
        getCartItem(){
           // console.log('getcart')
           axios.get(`${VITE_URL}/api/${VITE_PATH}/cart`).then((res)=>{
               console.log(res.data.data.carts);
               this.cart=res.data.data.carts;
           })
           .catch((err)=>{
               console.log(err)
           })
        }
    }
})

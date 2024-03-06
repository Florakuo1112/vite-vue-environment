import { defineStore } from 'pinia'
const VITE_URL = import.meta.env.VITE_APP_URL;
const VITE_PATH = import.meta.env.VITE_APP_PATH;
import axios from 'axios';

export default defineStore('cartStore', {
    state:()=>({
        qty:1,
        cart:[],
        courseList:[],
        status:'',
    }),
    actions:{
        addToCart(id){
            this.status=''
            //console.log(id);
            const data = {
                product_id : id,
                qty : this.qty
            };
            axios.post(`${VITE_URL}/api/${VITE_PATH}/cart`,
              { data }
            ).then((res) => {
                //console.log(res);
                this.status=`${res.data.data.product.title}已加入選課清單`
                //console.log(this.status)
                this.qty = 1;
                window.location.reload()
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
               const arr =res.data.data.carts;
               arr.forEach((item)=>{
                   this.courseList.push(item.product.title)
               })
               console.log(this.courseList)
           })
           .catch((err)=>{
               console.log(err.data)
           })
        },
        removeItem(id){
            console.log(id)
            const itemId = id;
            axios.delete(`${VITE_URL}/api/${VITE_PATH}/cart/${itemId}`).then((res)=>{
                console.log(res);
                window.location.reload()
            })
            .catch((err)=>{
                console.log(err)
            })
        }
    }
})

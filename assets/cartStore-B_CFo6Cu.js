import{q as e,f as o}from"./index-PlEsYLOX.js";const c="https://vue3-course-api.hexschool.io/v2",s="florafirstapi",h=e("cartStore",{state:()=>({qty:1,cart:[]}),actions:{addToCart(t){console.log(t);const r={product_id:t,qty:this.qty};o.post(`${c}/api/${s}/cart`,{data:r}).then(a=>{console.log(a),this.qty=1}).catch(a=>{console.error(a)})},addQty(){this.qty++},reduceQty(){this.qty>1&&this.qty--},getCartItem(){o.get(`${c}/api/${s}/cart`).then(t=>{console.log(t.data.data.carts),this.cart=t.data.data.carts}).catch(t=>{console.log(t)})}}});export{h as c};
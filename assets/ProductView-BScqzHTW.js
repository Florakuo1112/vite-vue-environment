import{_ as i,m as u,h as l,c as p,e as r,t as d,b as e,i as c,v as m,F as y,o as b}from"./index-PlEsYLOX.js";import{c as a}from"./cartStore-B_CFo6Cu.js";const f="https://vue3-course-api.hexschool.io/v2",h="florafirstapi",v={data(){return{product:{}}},computed:{...u(a,["qty"])},methods:{...l(a,["addToCart","addQty","reduceQty"])},mounted(){const o=this.$route.params.id;this.$http.get(`${f}/api/${h}/product/${o}`).then(t=>{console.log(t.data),this.product=t.data.product})}},T=e("h2",{class:"text-primary"},"這是單一產品頁面",-1),$=e("br",null,null,-1),g=["src"],Q=e("br",null,null,-1),V={class:"d-flex justify-content-center"};function k(o,t,C,_,n,q){return b(),p(y,null,[T,r(" "+d(n.product.title)+" ",1),$,e("img",{src:n.product.imageUrl},null,8,g),Q,r(" "+d(o.qty)+" ",1),e("div",V,[e("button",{type:"button",onClick:t[0]||(t[0]=(...s)=>o.reduceQty&&o.reduceQty(...s))},"-"),c(e("input",{type:"number","onUpdate:modelValue":t[1]||(t[1]=s=>o.qty=s),disabled:"",class:"w-25 text-center"},null,512),[[m,o.qty]]),e("button",{type:"button",onClick:t[2]||(t[2]=(...s)=>o.addQty&&o.addQty(...s))},"+"),e("button",{type:"button",onClick:t[3]||(t[3]=s=>o.addToCart(n.product.id))},"加入購物車")])],64)}const E=i(v,[["render",k]]);export{E as default};
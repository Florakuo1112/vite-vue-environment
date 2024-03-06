import{_ as g,o as i,a as d,b as e,n as h,g as _,F as m,h as b,t as n,H as k,d as x,z as y,K as L,y as C,e as u,r as p}from"./index-B74tIYlf.js";import{b as O}from"./bootstrap.min-K8rnz5zE.js";import{c as M}from"./checkLogin-BXjZZvl9.js";const w={props:["pages","getAdminProductList"]},P={"aria-label":"Page navigation example"},A={class:"pagination"},V={class:"page-item"},T=e("span",{"aria-hidden":"true"},"«",-1),E=[T],D=["onClick"],I={class:"page-item"},S=e("span",{"aria-hidden":"true"},"»",-1),z=[S];function H(r,t,s,f,a,c){return i(),d("nav",P,[e("ul",A,[e("li",V,[e("a",{class:h(["page-link",{disabled:s.pages.has_pre==!1}]),href:"#","aria-label":"Previous",onClick:t[0]||(t[0]=_(o=>s.getAdminProductList(s.pages.current_page-1),["prevent"]))},E,2)]),(i(!0),d(m,null,b(s.pages.total_pages,o=>(i(),d("li",{class:h(["page-item",{active:o==s.pages.current_page}]),key:o},[e("a",{class:"page-link",href:"#",onClick:_(v=>s.getAdminProductList(o),["prevent"])},n(o),9,D)],2))),128)),e("li",I,[e("a",{class:h(["page-link",{disabled:s.pages.has_next==!1}]),href:"#","aria-label":"Next",onClick:t[1]||(t[1]=_(o=>s.getAdminProductList(s.pages.current_page+1),["prevent"]))},z,2)])])])}const N=g(w,[["render",H]]),B="https://vue3-course-api.hexschool.io/v2",R="hogwarts",U={data(){return{orderModal:null,currentOrder:{id:"",is_paid:!1,user:{name:"",address:""}},house:["Gryffindor","Hufflepuff","Ravenclaw","Slytherin"],total:0}},methods:{modalShow(r){this.currentOrder={...r},console.log(this.currentOrder),this.total=this.currentOrder.total,this.orderModal.show()},save(r){console.log(this.currentOrder);let t=this.currentOrder;k.put(`${B}/api/${R}/admin/order/${r}`,{data:t}).then(s=>{console.log(s),this.orderModal.hide(),alert(s.data.message),window.location.reload()}).catch(s=>{console.log(s)})}},mounted(){this.orderModal=new O.Modal(this.$refs.orderModal,{keyboard:!1,backdrop:"static"})}},F={class:"modal fade",tabindex:"-1",ref:"orderModal","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},G={class:"modal-dialog"},j={class:"modal-content"},K=e("div",{class:"modal-header"},[e("h5",{class:"modal-title"},"學生選課資訊"),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),q={class:"modal-body"},J={class:"mb-3"},Q={class:"mb-3"},W={class:"mb-3"},X={class:"mb-3"},Y={class:"mb-3"},Z={class:"form-check"},ee=e("label",{class:"form-check-label",for:"flexCheckChecked"}," 付款 ",-1),te={class:"modal-footer"},se=e("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"Close",-1);function oe(r,t,s,f,a,c){return i(),d("div",F,[e("div",G,[e("div",j,[K,e("div",q,[e("div",J," 訂單ID: "+n(a.currentOrder.id),1),e("div",Q," 學生姓名: "+n(a.currentOrder.user.name),1),e("div",W," 學院: "+n(a.currentOrder.user.address),1),e("div",X,[x(" 已選課程: "),e("ul",null,[(i(!0),d(m,null,b(a.currentOrder.products,o=>(i(),d("li",{key:o.id},n(o.product.title)+" / "+n(o.id),1))),128))])]),e("div",Y," Galleon: "+n(this.total),1),e("div",Z,[y(e("input",{class:"form-check-input",type:"checkbox",value:"",id:"flexCheckChecked","onUpdate:modelValue":t[0]||(t[0]=o=>a.currentOrder.is_paid=o)},null,512),[[L,a.currentOrder.is_paid]]),ee])]),e("div",te,[se,e("button",{type:"button",class:"btn btn-primary",onClick:t[1]||(t[1]=o=>c.save(a.currentOrder.id))},"Save Change")])])])],512)}const ae=g(U,[["render",oe]]),ne="https://vue3-course-api.hexschool.io/v2",re="hogwarts",ie={components:{pagination:N,orderModal:ae},data(){return{orderList:[],pages:{},isLoading:!0}},methods:{...C(M,["checkLogin"]),getAdminProductList(r=1){k.get(`${ne}/api/${re}/admin/orders?page=${r}`).then(t=>{console.log(t),this.orderList=t.data.orders,this.pages=t.data.pagination,this.isLoading=!1})},openModal(r){this.$refs.orderDetail.modalShow(r)}},mounted(){this.checkLogin(),this.getAdminProductList()}},de={class:"bg-warning vh-100"},le={class:"container"},ce=e("h1",{class:"pt-6 pb-2 text-primary"},"學生選課資訊",-1),he={class:"table table-warning h6 table-hover table-bordered border-primary"},_e=e("thead",null,[e("tr",null,[e("th",null,"學生"),e("th",null,"學院"),e("th",null,"是否註冊"),e("th",null,"訂單id")])],-1),ue=["onClick"],pe={class:"col-3"},ge={class:"col-3"},me={class:"col-3"},be={style:{"font-size":"12px"},class:"mb-0"},fe={class:"d-flex justify-content-center"};function ve(r,t,s,f,a,c){const o=p("LaodingOverlay"),v=p("pagination"),$=p("orderModal");return i(),d("div",de,[u(o,{active:a.isLoading},null,8,["active"]),e("div",le,[ce,e("table",he,[_e,e("tbody",null,[(i(!0),d(m,null,b(a.orderList,l=>(i(),d("tr",{key:l.id,onClick:ke=>c.openModal(l),style:{"font-size":"14px"}},[e("th",pe,n(l.user.name),1),e("th",ge,n(l.user.address),1),e("th",me,n(l.is_paid?"已註冊":"未註冊"),1),e("th",null,[e("p",be,n(l.id),1)])],8,ue))),128))])]),e("div",fe,[u(v,{pages:a.pages,getAdminProductList:c.getAdminProductList,style:{position:"fixed",bottom:"50px"}},null,8,["pages","getAdminProductList"])]),u($,{ref:"orderDetail"},null,512)])])}const Le=g(ie,[["render",ve]]);export{Le as default};

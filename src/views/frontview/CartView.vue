<template>
<LaodingOverlay :active='isLoading'/>
<div v-if='cart.length == 0' class="vh-100" style='background:#051121'>
<div  class="container d-flex flex-column align-items-center pt-3">
<h1 class='pt-6  text-secondary' style="font-family:'Amatic SC; font-size:64px;">Avada Kedavra</h1>
<img src='https://i.pinimg.com/564x/12/53/10/1253103a1efba0f51196f2bfae1c03fa.jpg' class="rounded" style="height:500px; object-fit:cover">
</div>
</div>
<div v-else style='background-color:#460114; padding-bottom:200px' class="" >

<div class='container' >
<h1 class='pt-6  text-secondary'>選課清單</h1>
<!-- pc -->
<div class="d-none d-lg-block">
<table class=" table table-warning mt-4 ">
    <thead>
        <tr style="font-family:'Amatic SC'; font-size:32px ">
        <th>Course</th>
        <th>Credit</th>
        <th>Professor</th>
        <th>Time</th>
        <th>Galleon</th>
        <th>Evanesco</th>
        </tr>
    </thead>
    <tbody>
    <tr v-for='item in cart' :key="item.id" style="font-family:'Amatic SC'; font-size:24px ">
    
        <th >{{item.product.title}}</th>
        <th>{{item.product.price/5000}}</th>
        <th>{{item.product.content}}</th>
        <th>{{item.product.time}}</th>
         <th>{{item.final_total}}<i class="fa-brands fa-glide-g"></i></th>
          <th>
              <button class="btn border-0 "><i class="fa-solid fa-trash" @click="removeItem(item.id)" style="font-size:24px"></i></button>
         </th>
    </tr>
    <tr>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th>Total Galleon</th>
        <th>{{finalTotal}}</th>
    </tr>
    </tbody>
</table>
</div>
<!-- 手機 -->

<div class="d-lg-none">
<table class=" table table-warning mt-4 ">
    <thead>
        <tr style="font-size:14px  " >
        <th >Course</th>
        <th >Detail</th>
        <th >Evanesco</th>
        </tr>
    </thead>
    <tbody>
    <tr v-for='item in cart' :key="item.id" style="font-size:14px ">
    
        <th >{{item.product.title}}</th>
        <th>
            <ul>
                <li  style='list-style:none'> Professor:{{item.product.content}}</li>
                <li  style='list-style:none'>Credit:{{item.product.price/5000}}</li>
                <li  style='list-style:none'>Time:{{item.product.time}}</li>
                <li  style='list-style:none'>Galleon:{{item.final_total}}<i class="fa-brands fa-glide-g"></i></li>
            </ul>
        </th>
          <th>
              <button class="btn border-0 "><i class="fa-solid fa-trash" @click="removeItem(item.id)" style="font-size:14px"></i></button>
         </th>
    </tr>
    <tr>
        <th>Total Galleon</th>
        <th></th>
        <th>{{finalTotal}}</th>
    </tr>
    </tbody>
</table>
</div>

<div class="input-group mb-3">
  <input type="text" class="form-control" v-model="code"
  placeholder="Are You Qualified for Scholarship? ">
  <button class="btn btn-outline-secondary" type="button"  @click='verify'>Verify</button>
</div>

<div class="d-flex justify-content-center">
<v-form v-slot="{ errors }" @submit="onSubmit" class="text-secondary w-50" >

<div class="mb-1">
  <label for="email" class="form-label" style="font-family:'Amatic SC'; font-size:24px ">EMAIL</label>
  <v-field
  id="email"
  name="email"
  type="email"
  class="form-control"
  :class="{ 'is-invalid': errors['email'] }"
  placeholder="請輸入 Email" 
  rules="email|required"
  v-model="data.user.email">
  </v-field>
  <error-message name="email" class="invalid-feedback" style="font-size:16px"></error-message> 
</div>

<div class="mb-1">

  <label for="name" class="form-label" style="font-family:'Amatic SC'; font-size:24px ">NAME</label>
  <v-field name="姓名" type='text' class='form-control' id='name' rules="required"
  placeholder="請輸入姓名"
  :class="{ 'is-invalid': errors['姓名'] }"
  v-model="data.user.name"
   />
   <error-message name="姓名" class="invalid-feedback" style="font-size:16px"></error-message> 

</div>

<div class="mb-1">

  <label for="tel" class="form-label" style="font-family:'Amatic SC'; font-size:24px ">PHONE</label>
  <v-field name="tel" type='text' class='form-control' id='tel'
  :rules='isPhone'
  placeholder="請輸入手機號碼"
  :class="{ 'is-invalid': errors['tel']}"
  v-model='data.user.tel' 
   />
   <error-message name="tel" class="invalid-feedback" style="font-size:16px"></error-message> 

</div>

<div class="mb-1">

  <label for="area" class="form-label" style="font-family:'Amatic SC'; font-size:24px ">HOUSE</label>
  <v-field
  id="area"
  name='學院'
  class="form-control"
  :class="{ 'is-invalid': errors['學院'] }"
  placeholder="請輸入學院"
  rules="required"
  v-model="data.user.address"
  as="select"
  >
  <option value="">請選擇學院</option>
  <option value="Gryffindor">Gryffindor</option>
  <option value="Hufflepuff">Hufflepuff</option>
  <option value="Ravenclaw">Ravenclaw</option>
  <option value="Slytherin">Slytherin</option>
  </v-field>
   
   <error-message name="學院" class="invalid-feedback" style="font-size:16px"></error-message> 

</div>





<button type="submit" class="btn btn-outline-secondary w-100 mt-4" style="font-family:'Amatic SC'; font-size:24px ">submit</button>

</v-form>
</div>
</div>

</div>
</template>

<script>

import * as VeeValidate from "vee-validate";
import * as VeeValidateI18n from "@vee-validate/i18n";
import * as VeeValidateRules from "@vee-validate/rules";
// 中文語系 JSON
// 把需要的語系 驗證 驗證規則引入
import zh_TW from "../../assets/zh_TW.json"

const VITE_URL = import.meta.env.VITE_APP_URL;
const VITE_PATH = import.meta.env.VITE_APP_PATH;
import axios from 'axios';
Object.keys(VeeValidateRules).forEach(rule => {
  VeeValidate.defineRule(rule, VeeValidateRules[rule]);
});
// 讀取語系外部的資源
VeeValidateI18n.localize({
  zh_TW,
});
// Activate the locale
VeeValidate.configure({
  generateMessage: VeeValidateI18n.localize("zh_TW"),
  validateOnInput: true, // 調整為：輸入文字時，就立即進行驗證
});

//pinia
import { mapActions, mapState } from "pinia";
import cartStore from '../../stores/cartStore.js';

export default {
    data(){
        return{
            data:{
                user:{
                email:'',
                name:'',
                tel:'',
                address:'',
                }
            },
            isLoading:true,
            code:''

        }
    },
    computed:{
        ...mapState(cartStore, ['cart','finalTotal']),
    },
    methods:{
        ...mapActions(cartStore, ['getCartItem','removeItem']),
        onSubmit(){
            console.log(this.data);
            const data = this.data;
            console.log({data})
            this.axios.post(`${VITE_URL}/api/${VITE_PATH}/order`, {data})
            .then((res)=>{
                console.log(res, '送出訂單');
                this.data={};
                window.alert("請在開學日至Great Hall付款完成註冊手續");
                 this.$router.push({name:'home'})
            }).catch((err)=>{
                 window.alert(err);
            })
        },
        isPhone(value){
            const phoneNumber = /^(09)[0-9]{8}$/
            return phoneNumber.test(value) ? true : '請輸入有效電話號碼'
        },
        verify(){
            const data = {
                code: this.code
            }
            axios.post(`${VITE_URL}/api/${VITE_PATH}/coupon`,{data})
            .then((res) => {
                console.log(res)
                window.alert('yes, you are qualified for scholarship')
                this.getCartItem()
            })
            .catch((err)=>{
                console.log(err)
            })
        }
    },
    mounted(){
       this.getCartItem();
       console.log(this.cart);
       this.isLoading=false;
    }
}

</script>
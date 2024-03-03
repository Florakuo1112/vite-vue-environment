<template>
<h1 class='text-primary'>購物車內容</h1>
<table class=" table table-success">
    <thead>
        <tr>
        <th >title</th>
        <th>price</th>
        <th>qty</th>
        <th>final tital</th>
        </tr>
    </thead>
    <tbody>
    <tr v-for='item in cart' :key="item.id">
    
        <th >{{item.product.title}}</th>
        <th>{{item.product.price}}</th>
        <th>{{item.qty}}</th>
        <th>{{item.final_total}}</th>
    </tr>
    </tbody>
</table>

<v-form v-slot="{ errors }" @submit="onSubmit" >
{{errors}}

<div class="mb-1">
  <label for="email" class="form-label">電子信箱</label>
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
  <error-message name="email" class="invalid-feedback"></error-message> 
</div>

<div class="mb-1">

  <label for="name" class="form-label"></label>
  <v-field name="姓名" type='text' class='form-control' id='name' rules="required"
  placeholder="請輸入姓名"
  :class="{ 'is-invalid': errors['姓名'] }"
  v-model="data.user.name"
   />
   <error-message name="姓名" class="invalid-feedback"></error-message> 

</div>

<div class="mb-1">

  <label for="tel" class="form-label">手機號碼</label>
  <v-field name="tel" type='text' class='form-control' id='tel'
  :rules='isPhone'
  placeholder="請輸入手機號碼"
  :class="{ 'is-invalid': errors['tel']}"
  v-model='data.user.tel' 
   />
   <error-message name="tel" class="invalid-feedback"></error-message> 

</div>

<div class="mb-1">

  <label for="area" class="form-label">地區</label>
  <v-field
  id="area"
  name='地區'
  class="form-control"
  :class="{ 'is-invalid': errors['地區'] }"
  placeholder="請輸入地區"
  rules="required"
  v-model="data.user.address"
  as="select"
  >
  <option value="">請選擇地區</option>
  <option value="台北市">台北市信義區信義路五段7號</option>
  <option value="高雄市">高雄市新興區八德一路85號</option>
  </v-field>
   
   <error-message name="地區" class="invalid-feedback"></error-message> 

</div>






<button  type='submit'>送出</button>
</v-form>
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
            }

        }
    },
    computed:{
        ...mapState(cartStore, ['cart']),
    },
    methods:{
        ...mapActions(cartStore, ['getCartItem']),
        onSubmit(){
            console.log(this.data);
            const data = this.data;
            console.log({data})
            axios.post(`${VITE_URL}/api/${VITE_PATH}/order`, {data})
            .then((res)=>{
                console.log(res, '送出訂單');
                this.data={};
                window.alert("送出訂單");
                 window.location.href='./index.html#/home'
            }).catch((err)=>{
                console.log(err)
            })
        },
        isPhone(value){
            const phoneNumber = /^(09)[0-9]{8}$/
            return phoneNumber.test(value) ? true : '請輸入有效電話號碼'
        }
    },
    mounted(){
       this.getCartItem();
    }
}

</script>
<template>
<div class="modal fade"  ref='couponModal' tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel"  v-if='tempData.id'>編輯學費減免專案</h5>
        <h5 class="modal-title" id="exampleModalLabel" v-else>新增學費減免專案</h5>
        <button type="button" class="btn-close" @click="close"></button>
      </div>
      <div class="modal-body">
<div class="mb-3" >
  <label for="couponTitle" class="form-label">專案名稱</label>
  <input type="text" class="form-control" id="couponTitle" placeholder="請輸入專案名稱"
  v-model="tempData.title">
</div>

<div class="mb-3">
  <label for="couponDiscount" class="form-label">減免度</label>
  <input type="number" class="form-control" id="couponDiscount" placeholder="請輸入減免比例"
  v-model="tempData.percent">
</div>

<div class="mb-3">
  <label for="couponDue" class="form-label">期限</label>
  <input type="date" class="form-control" id="couponDue" placeholder="請輸入期限" :min='currentDay'
  :value="tempData.due_date"
  v-model="tempData.due_date">
</div>

<div class="mb-3">
  <label for="couponCode" class="form-label">減免代碼</label>
  <input type="text" class="form-control" id="couponCode" placeholder="請輸入減免代碼"
  v-model="tempData.code">
</div>


<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" v-model="tempData.is_enabled"
  :checked='tempData.is_enabled'>
  <label class="form-check-label" for="flexCheckChecked">
   啟用
  </label>
</div>

      </div>
      <div class="modal-footer d-flex justify-content-between">
        <div>
          <button type="button" class="btn btn-danger"  @click="deleteItem(tempData.id)">Delete</button>
        </div>
        <div>
        <button type="button" class="btn btn-secondary"  @click="close">Close</button>
        <button type="button" class="btn btn-primary" @click="save(tempData.id)">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
const VITE_URL = import.meta.env.VITE_APP_URL;
const VITE_PATH = import.meta.env.VITE_APP_PATH;
import axios from 'axios';
import * as bootstrap from "bootstrap/dist/js/bootstrap.min.js";


export default {
  props:['getItem'],
    data(){
        return{
            couponModal:null,
            currentDay:'',
            edit:false,
            tempData:{
                title:'',
                is_enabled:0,
                percent:undefined,
                due_date:undefined,
                code:''
            }
        }
    },
    methods:{
      save(id){
        this.tempData.due_date = new Date(this.tempData.due_date).getTime()/1000;
        this.tempData.is_enabled == true ? this.tempData.is_enabled=1:this.tempData.is_enabled=0
        const data = this.tempData
        if(this.edit==true){
          axios.put(`${VITE_URL}/api/${VITE_PATH}/admin/coupon/${id}`,{data})
          .then((res)=>{
            console.log(res.data.message)
            this.getItem()
            this.couponModal.hide()
          })
          .catch((err)=>{
            window.alert(err.response.data.message)
          })
        }else{
          axios.post(`${VITE_URL}/api/${VITE_PATH}/admin/coupon`,{data} )
        .then((res) => {
          console.log(res.data.message)
          this.getItem()
          this.couponModal.hide()
          })
          .catch((err)=>{
            window.alert(err.response.data.message)
          })
        }
      },
      close(){
        this.tempData={};
        this.couponModal.hide()
      },
      showModal(item){
       // console.log(item);
        if(item.id !== undefined){
          this.edit=true
          this.tempData = {...item};
          const date = new Date(this.tempData.due_date*1000).toISOString().substr(0,10);
          this.tempData.due_date = date;
          this.couponModal.show()
        }else{
          this.edit=false
          this.couponModal.show()
          this.getItem()
          this.couponModal.hide()
        }

      },
      deleteItem(id){
        axios.delete(`${VITE_URL}/api/${VITE_PATH}/admin/coupon/${id}`)
        .then((res)=>{
          console.log(res.data.message)
          this.getItem()
          this.couponModal.hide()
        })
        .catch((err)=>{
          window.alert(err.response.data.message)
        })
      }
    },
    mounted(){
        this.couponModal = new bootstrap.Modal(this.$refs.couponModal,{
            keyboard:false,
            backdrop:'static'
        });
         const today = new Date();
         this.currentDay = today.toISOString().substr(0, 10)
    }
}
</script>
<template>

<!-- Modal -->
<div class="modal fade " tabindex="-1" ref='orderModal'
aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title"  >學生選課資訊</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" ></button>
      </div>
      <div class="modal-body">
        <div class="mb-3">
          訂單ID: {{currentOrder.id}}
        </div>
        <div class="mb-3">
          學生姓名: {{currentOrder.user.name}}
        </div> 
        <div class="mb-3">
          學院: {{currentOrder.user.address}}
        </div> 
        <div class="mb-3">
          已選課程:
          <ul>
            <li v-for='item in currentOrder.products' :key='item.id'>{{item.product.title}} / {{item.id}}</li>
          </ul>
        </div>

         <div class="mb-3">
          Galleon: 
          {{this.total}}
        </div>

<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" v-model="currentOrder.is_paid" >
  <label class="form-check-label" for="flexCheckChecked">
    付款
  </label>
</div>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" >Close</button>
        <button type="button" class="btn btn-primary"  @click='save(currentOrder.id)'>Save Change</button>
      </div>
    </div>
  </div>
</div>

</template>

<script>
const VITE_URL = import.meta.env.VITE_APP_URL;
const VITE_PATH = import.meta.env.VITE_APP_PATH;
import * as bootstrap from "bootstrap/dist/js/bootstrap.min.js";
import axios from 'axios';


export default {
  props:['getAdminProductList'],
    data(){
        return{
            orderModal:null,
            currentOrder:{
              id:'',
              is_paid:false,
              user:{
                name:'',
                address:'',
              }
            },
            house:['Gryffindor','Hufflepuff','Ravenclaw','Slytherin'],
            total:0,
        }
    },
    methods:{
        modalShow(order){
            this.currentOrder = {...order};
            console.log(this.currentOrder);
            this.total = this.currentOrder.total
            this.orderModal.show();
        },
        save(id){
          console.log(this.currentOrder);
          let data = this.currentOrder
          axios.put(`${VITE_URL}/api/${VITE_PATH}/admin/order/${id}`, {data} )
          .then((res)=>{
            console.log(res)
            this.orderModal.hide();
            alert(res.data.message);
            this.getAdminProductList()
          
          })
          .catch((err)=>{
            console.log(err)
          })
        }
    },
    mounted(){
        this.orderModal = new bootstrap.Modal(this.$refs.orderModal,{
            keyboard:false,
            backdrop:'static'
        });
       // this.orderModal.show()
    }

}
</script>
<template>
<div class="modal modal-lg" tabindex="-1" ref='courseModal'>
  <div class="modal-dialog" v-show='edit.id'>
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title"  >編輯課程</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click='close'></button>
      </div>
      <div class="modal-body">
<div class="mb-3">
  <label for="courseTitle" class="form-label">課程名稱</label>
  <input type="text" class="form-control" id="courseTitle" placeholder="請輸入課程名稱"
  v-model="edit.title">
</div>

<div class="mb-3">
  <label for="professor" >教授</label>
  <select class="form-select" aria-label="Default select example" id="professor" v-model="edit.content">
      <option selected disabled>請選擇教授</option>
      <option v-for='item in professor' :key='item' >{{item}}</option>
</select>
</div>

<div class="mb-3">
  <label for="courseDescription" class="form-label">課程敘述</label>
  <textarea class="form-control" id="courseDescription" rows="3" v-model='edit.description'></textarea>
</div>

<div class="mb-3">
  <label for="courseTime" class="form-label">上課時段</label>
  <select class="form-select" aria-label="Default select example" id="courseTime" v-model='edit.time'>
      <option selected disabled>請選擇上課時段</option>
      <option v-for="item in time" :key=item>{{item}}</option>
      </select>
</div>

<div class="mb-3">
  <label for="classroom" class="form-label">教室</label>
  <select class="form-select" aria-label="Default select example" id="classroom" v-model='edit.classroom'>
      <option selected disabled>請選擇上課教室</option>
      <option v-for="item in classRoom" :key=item>{{item}}</option>
      </select>
</div>


<div class="mb-3">
  <label for="coursePrice" class="form-label">課程售價</label>
  <select class="form-select" aria-label="Default select example" id="coursePrice" v-model='edit.price'>
      <option selected disabled>請選擇本課程售價</option>
      <option v-for="item in price" :key=item>{{item}}</option>
      </select>
</div>

<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" 
  :checked='edit.is_enabled' v-model="edit.is_enabled">
  <label class="form-check-label" for="flexCheckChecked">
    Checked checkbox
  </label>
</div>

<div class="mb-3">
  <label for="photo" class="form-label">照片</label>
  <input type="text" class="form-control" id="photo" placeholder="請提供相關照片" v-model="edit.imageUrl">
  <img :src='edit.imageUrl' class='mt-3' style="height:200px; weight:200px">
</div>

      </div>
      <div class="modal-footer d-flex justify-content-between">
        <button  @click='deleteItem' type="button" class="btn btn-danger">Delete</button>
        <div>
        <button  type="button" class="btn btn-secondary me-2" data-bs-dismiss="modal" @click='close'>Close</button>
        <button type="button" class="btn btn-primary" @click='save' v-if='edit.id'>Save Changes</button>
        </div>
      </div>
    </div>
  </div>

    <div class="modal-dialog" v-show='edit.id == undefined'>
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title"  >新增課程</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click='close'></button>
      </div>
      <div class="modal-body">
<div class="mb-3">
  <label for="courseTitle" class="form-label">課程名稱</label>
  <input type="text" class="form-control" id="courseTitle" placeholder="請輸入課程名稱"
  v-model="addCourse.title">
</div>

<div class="mb-3">
  <label for="professor" >教授</label>
  <select class="form-select" aria-label="Default select example" id="professor" v-model="addCourse.content">
      <option selected disabled>請選擇教授</option>
      <option v-for='item in professor' :key='item' >{{item}}</option>
</select>
</div>

<div class="mb-3">
  <label for="courseDescription" class="form-label">課程敘述</label>
  <textarea class="form-control" id="courseDescription" rows="3" v-model='addCourse.description'></textarea>
</div>

<div class="mb-3">
  <label for="courseTime" class="form-label">上課時段</label>
  <select class="form-select" aria-label="Default select example" id="courseTime" v-model='addCourse.time'>
      <option selected disabled>請選擇上課時段</option>
      <option v-for="item in time" :key=item>{{item}}</option>
      </select>
</div>

<div class="mb-3">
  <label for="classroom" class="form-label">教室</label>
  <select class="form-select" aria-label="Default select example" id="classroom" v-model='addCourse.classroom'>
      <option selected disabled>請選擇上課教室</option>
      <option v-for="item in classRoom" :key=item>{{item}}</option>
      </select>
</div>


<div class="mb-3">
  <label for="coursePrice" class="form-label">課程售價</label>
  <select class="form-select" aria-label="Default select example" id="coursePrice" v-model='addCourse.price'>
      <option selected disabled>請選擇本課程售價</option>
      <option v-for="item in price" :key=item>{{item}}</option>
      </select>
</div>

<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" 
  :checked='addCourse.is_enabled' v-model='addCourse.is_enabled'>
  <label class="form-check-label" for="flexCheckChecked">
    Checked checkbox
  </label>
</div>

<div class="mb-3">
  <label for="photo" class="form-label">照片</label>
  <input type="text" class="form-control" id="photo" placeholder="請提供相關照片" v-model="edit.imageUrl">
  <img :src='addCourse.imageUrl' class='w-100 mt-3'>
</div>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click='close'>Close</button>
        <button type="button" class="btn btn-primary" @click='add'>Add Course</button>
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
    data(){
        return{
            professor:['Severus Snape', 'Filius Flitwick', 'Minerva McGonagall','Remus Lupin',
            'Sybill Trelawney', 'Cuthbert Binns', 'Pomona Sprout','Rolanda Hooch','Rubeus Hagrid','Dolores Umbridge' ],
            price:[5000,10000,15000,20000],
            courseModal:null,
            time:['Mon:0900~1200','Mon:0200~0500','Tues:0900~1200','Tues:0200~0500',
            'Wed:0900~1200','Wed:0200~0500','Thur:0900~1200','Thur:0200~0500','Fri:0900~1200',
            'Fri:0200~0500'],
            classRoom:['大禮堂','咒語學教室','變形術教室','魔法藥水學教室','防禦術教室','飛行課操場','魔法植物學溫室','預測學教室', 'Forbidden Forest'],
            edit:{
                category:'course',
                title:'',
                content:'',
                description:'',
                imageUrl:'',
                time:'',
                classroom:'',
                price:'',
                is_enabled:0,
            },
            addCourse:{
                title:'',
                category:'course',
                unit:'門',
                origin_price:0,
                is_enabled:0,
            },
        }
    },
    methods:{
        showModal(item){
            //console.log(item)
            this.edit=item;
            this.courseModal.show()
            console.log(this.edit)
        },
        close(){
            this.edit={};
            console.log(this.edit)
        },
        save(){
           console.log(this.edit);
           const data = this.edit;
           data.price = Number(data.price)
           const id = this.edit.id
           console.log(id)
            axios.put(`${VITE_URL}/api/${VITE_PATH}/admin/product/${id}`, {data})
            .then((res)=>{
                console.log(res);
                alert('Mischief managed');
                this.courseModal.hide();
                window.location.reload()
            })
            .catch((err)=>{
                console.log(err)
            }) 
        },
        add(){
            console.log(this.addCourse);
            const data = this.addCourse
             data.price = Number(data.price)
            axios.post(`${VITE_URL}/api/${VITE_PATH}/admin/product`, {data})
            .then((res)=>{
                console.log(res);
                alert('Mischief managed');
                this.courseModal.hide();
                 window.location.reload()
            })
            .catch((err)=>{
                alert(err.response.data.message)
              
            }) 

        },
        deleteItem(){
            console.log(this.edit.id);
            const id = this.edit.id;
            axios.delete(`${VITE_URL}/api/${VITE_PATH}/admin/product/${id}`)
            .then((res)=>{
                console.log(res);
                alert('Mischief managed');
                this.courseModal.hide();
                 window.location.reload()
            })
            .catch((err)=>{
                alert(err.response.data.message)
              
            }) 
        }
    },
    mounted(){
            this.courseModal = new bootstrap.Modal(this.$refs.courseModal,{
            keyboard:false,
            backdrop:'static'
        });
    }
}
</script>
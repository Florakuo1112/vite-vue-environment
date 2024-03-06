<template>
    <div class="toast align-items-center" role="alert" aria-live="assertive" aria-atomic="true" ref='toast'>
  <div class="d-flex">
    <div class="toast-body">
    {{status}}
   </div>
    <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>
</div>


</template>

<script>
import * as bootstrap from "bootstrap/dist/js/bootstrap.min.js";
//pinia
import { mapActions, mapState} from "pinia";
import cartStore from '../stores/cartStore';

export default {
    data(){
        return{
            text:'123',
            toast:null,
            cart:[]
        }
    },
    methods:{
        showToast(){
        this.toast.show(),
        console.log(this.status)
        }
    },
    computed:{
        ...mapState(cartStore, ['status'])
    },
    mounted(){
        this.toast = new bootstrap.Toast(this.$refs.toast);

    }
}
</script>
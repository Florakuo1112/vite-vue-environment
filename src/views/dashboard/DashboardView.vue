<template>

<RouterView></RouterView>
</template>

<script>
//pinia
import { mapActions, mapState, } from "pinia";
import checkLogin from '../../stores/checkLogin.js'

export default {
    computed:{
        ...mapState(checkLogin, ['isLogin']),
    },
    methods:{
        ...mapActions(checkLogin, ['checkLogin'])
    },
    mounted(){
        this.checkLogin();
    }
}
</script>
<style>
.active{
    color:red
}
</style>
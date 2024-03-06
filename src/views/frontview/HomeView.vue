<script >
import * as bootstrap from "bootstrap/dist/js/bootstrap.min.js";
</script>

<template >
<div style='background-color:#460114; padding-bottom:300px' >
<div 
style="background: center/ contain no-repeat url('https://i.pinimg.com/564x/fd/51/c9/fd51c9819dc403946c372d16c79b0e2a.jpg'); background-attachment:fixed">
    <div class="container h-100 mb-5" style="padding:250px ">
        <h1 class='text-primary p-5 bg-warning rounded d-flex flex-column align-items-center' style="--bs-bg-opacity: .7;">
        <p style="font-size:40px"> Welcome To...</p>
        <p>
        <span style="font-size:40px"> Hogwarts </span>
        <span style="font-size:32px"> of </span>
        <span style="font-size:40px">Witchcraft </span>
        <span style="font-size:32px">and</span>
          Wizardry</p>
        <div style="font-size:32px">
        Online Enrollment System
        <RouterLink  to='/products' ><button type="button" class=" btn btn-outline-primary  ms-5" style="font-size:24px">
            <i class="fa-solid fa-hat-wizard"></i>
            ENROLL NOW</button>
        </RouterLink> 
        </div>
        </h1>
    </div>
</div>
</div>
</template>

<style lang="scss">
h1{
    font-family:'Amatic SC' ;
    font-weight: 900;
}
</style>>
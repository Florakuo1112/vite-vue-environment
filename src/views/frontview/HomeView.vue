<script >
import * as bootstrap from "bootstrap/dist/js/bootstrap.min.js";
</script>

<template >
<div style='background-color:#460114; padding-bottom:300px'  >
<div 
style="background: center/ contain no-repeat url('https://i.pinimg.com/564x/fd/51/c9/fd51c9819dc403946c372d16c79b0e2a.jpg'); background-attachment:fixed" class="container">
<div class="row  d-flex justify-content-center ">
    <div class=" mb-5 col-12 col-lg-10 inContainer" >
        <h1 class='text-primary p-6 bg-warning rounded d-flex flex-column align-items-center' style="--bs-bg-opacity: .7;">
        <p style="font-size:40px"> Welcome To...</p>
        <p>
        <span style="font-size:40px"> Hogwarts School </span>
        <span style="font-size:32px"> of </span>
        <span style="font-size:40px">Witchcraft </span>
        <span style="font-size:32px">and</span>
          Wizardry</p>
        <div style="font-size:32px" class="d-flex flex-column flex-lg-row">
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
</div>
</template>

<style lang="scss">
h1{
    font-family:'Amatic SC' ;
    font-weight: 900;
};
.inContainer{
    padding-top:200px;
    padding-bottom:200px;
    @media (max-width: 992px){
        padding-top: 100px;
    }
};
</style>>
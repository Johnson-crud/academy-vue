<template>
  <div class="header-content w-screen h-30 items-center p-4 flex flex-row justify-between ">
    <div>
        <h4>CRUD OPERATION</h4>
    </div>
    <div class="header-title flex flex-row space-x-4 ">
        <div >Home</div>
        <div >Courese</div>
        <div >Contact Us</div>
        <div >About Us</div>
    </div>
    <div class="header-auth flex space-x-5 ">
        <FormKit class="bg-yellow " type="button" label="Login" @click="validateUser"/>
        <FormKit type="button" label="Signup" @click="usreRegistraion"/>
    </div>
  </div>    
</template>

<script>
export default {
    name:"HeaderTab",
    methods: {

    }

}
</script>

<style>
.header-content{
  background-color: rgb(0, 0, 82);
  color:#ffffff;
}


</style>
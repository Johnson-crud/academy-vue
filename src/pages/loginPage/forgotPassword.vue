<template>
  <div class="loginScreen">
  <h1>Login Page</h1>
    <FormKit type="form" :action=false @submit="signUpUser">
      <FormKit 
      type="email" 
      label="Email Id"
      validation="required" 
      validation-visibility="live" 
      placeholder="Enter EmailId"
     />
     </FormKit>
  </div>
</template>

<script>
export default {
  name: "ForgotPasswordPage",
  methods:{
    signUpUser(e){
      console.log( e ,"Event");
    }
  }

  
};
</script>

<style>
  
</style>
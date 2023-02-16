<template>
  <div class="loginScreen">
  <h1>Login Page</h1>
    <FormKit type="form" :action=false @submit="signUpUser">
      <FormKit 
      type="text" 
      label="User ID"
      validation="required|length:8,10" 
      validation-visibility="live" 
      placeholder="Enter UserId"
      :validation-messages="{length:' Length should be between 8 - 10 character '}"
     />
     <FormKit
     type="password"
     label="Password"
     name="password"
     placeholder="Enter Password"
     validation="required"
     validation-visibility="live"
     />
     </FormKit>
  </div>
</template>

<script>
export default {
  name: "loginPage",
  methods:{
    signUpUser(e){
      console.log( e ,"Event");
    }
  }

  
};
</script>

<style>
  
</style>
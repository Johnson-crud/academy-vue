<template>
  <div class="loginScreen">
  <h1>Login Page</h1>
    <FormKit type="form" :action=false >
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
    <FormKit
    type="password"
    label="Confirm Password"
    name="password_confirm"
    placeholder="Confirm Password"
    validation="required|confirm"
    validation-visibility="live"
    validation-label="Password Confirmation"
    />

     </FormKit>
  </div>
</template>

<script>
export default {
  name: "LoginPage",

  
};
</script>

<style>
  
</style>
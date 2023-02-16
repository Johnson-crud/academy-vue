<template>
  <div class="loginScreen">
    <h1>Login Page</h1>
    <FormKit type="form" :action="false" @submit="signUpUser">
      <FormKit
        type="password"
        label="Old Password"
        name="password_old"
        placeholder="Enter Password"
        validation="required"
        validation-visibility="live"
      />
      <FormKit
        type="password"
        label="New Password"
        name="password_new"
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
  name: "ResetPasswordPage",
  methods: {
    signUpUser(e) {
      console.log(e, "Event");
    },
  },
};
</script>

<style>
</style>
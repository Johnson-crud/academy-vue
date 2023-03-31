<template>
  <div class="loginScreen">
    <FormKit class="form" type="form" :action="false">
      <FormKit
        type="text"
        validation="required"
        validation-visibility="live"
        placeholder="Enter UserId"
        :validation-messages="{
          required: 'This field is required.',
        }"
      />
      <FormKit
        type="password"
        validation="required"
        validation-visibility="live"
        placeholder="Enter Password"
        :validation-messages="{
          required: 'This field is required.',
        }"
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
.formkit-form {
  width: 420px;
  padding: 1.5em;
  border: 1px solid #e4e4e4;
  border-radius: 1em;
  margin: 0 auto 1em auto;
}
.formkit-input {
  padding: 2px;
  border: 1px solid #e4e4e4;
  margin: 0 auto 1em auto;
}
</style>
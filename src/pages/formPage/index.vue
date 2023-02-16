<template>
  <FormKit type="form" submit-label="Register"
     :actions="false" >

     <FormKit
       type="text"
       label="User Name"
       class="input"
       placeholder="Enter user name"
         validation="required|alpha|length 10"
      />  

    <FormKit
        type="text"
        label="Email Address"
        placeholder="Enter mail address"
          validation="email"
          validation-visibility="live"
    />

    <FormKit
       type="submit"
       label="Register" 
    />

     
  </FormKit>
</template>

<script>
export default {
    name: "checkoutForm"
}
</script>

<style>
    .formkit-form{
        border: 1px solid #234555;
        width: 500px;
        margin: 1em auto;
        padding: 1.5em;
        border-radius: 2em;
    }

    .formkit-input{
     margin: 0 auto 1em auto;
     border: 1px solid #451247;
     border-radius: 0.5em;
     padding: 0.5em
    }
</style>
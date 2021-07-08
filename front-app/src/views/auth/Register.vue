<template>
<div class="container-body">
<div class="globalFlex container-register">
          <div class="globalFlex">
            <div class="globalFlex" style="padding-top: 50px; text-align: center">
                <h1>Créer votre compte</h1>
              <h2>Vous avez déjà un compte ? <router-link :to="{name: 'Login'}">Connectez vous !</router-link></h2>
            </div>
          </div>

          <div class="globalFlex">
            <div class="globalFlex">
                <input type="text" class="inputDesign" placeholder="Email" v-model="email" v-if="!error.includes('email')">
              <input type="text" class="inputDesign error" placeholder="Email" v-model="email" v-else>

                <div class="rowFlex" style="width: 100%;justify-content: space-between">

                    <input type="text" style="width: 45%" class="inputDesign" placeholder="Nom" v-model="name" v-if="!error.includes('name')">
                    <input type="text" style="width: 45%;" class="inputDesign error" placeholder="Nom" v-model="name" v-else>


                  <input type="text" style="width: 45%" class="inputDesign" placeholder="Prénom" v-model="firstName" v-if="!error.includes('firstName')">
                  <input type="text" style="width: 45%" class="inputDesign error" placeholder="Prénom" v-model="firstName" v-else>

                </div>
              <input type="password" class="inputDesign" placeholder="Mot de passe" v-model="password" v-if="!error.includes('password')">
              <input type="password" class="inputDesign error" placeholder="Mot de passe" v-model="password" v-else>

              <div class="buttonDesign" @click="validationData"><span>Register</span></div>
              <div class="rowFlex" style="justify-content: flex-start;margin-top: 15px;align-items: center">
                <input type="checkbox" v-model="agreeTerms">

                <span style="margin-left: 10px; color: black" v-if="!error.includes('terms')">I have read and Agree to the Terms of Service</span>
                <span style="margin-left: 10px; color: red" v-else>I have read and Agree to the Terms of Service</span>

              </div>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
import * as auth from "../../fetching/auth/auth.js"

export default {
  name: "Register",
  data: function () {
    return {
      email: "",
      name: "",
      firstName: "",
      password: "",
      agreeTerms: false,
      error: [],
    }
  },
  methods: {
    validationData () {
      if (!this.email) {
        this.error.push("email")
      }else{
        this.error = this.error.filter(e => e !== 'email')
      }

      if(!this.name){
        this.error.push("name")
      }else{
        this.error = this.error.filter(e => e !== 'name')
      }

      if(!this.firstName){
        this.error.push('firstName')
      }else {
        this.error = this.error.filter(e => e !== 'firstName')
      }

      if(!this.password){
        this.error.push("password")
      }else {
        this.error = this.error.filter(e => e !== 'password')
      }

      if(!this.agreeTerms){
        this.error.push("terms")
      }else {
        this.error = this.error.filter(e => e !== 'terms')
      }

      if(this.error.length === 0 ){
        auth.fetchRegister(this.email, this.name, this.firstName, this.password)
      }
    }
  }
}
</script>

<style scoped>

  .container-body{
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: linear-gradient(to bottom, #FB9400, #FFE2B9);
    color: white;
    cursor: default;
    font-family: "Roboto", sans-serif;
  }

  .container-register h1{
    font-size: 55px;
    margin-block: 0;
    color: black;
    font-family: 'Roboto', sans-serif;
  }

  .container-register h2{
    font-size: 20px;
    color: black;
    font-family: "Roboto", sans-serif;
    font-weight: 400;

  }

  .globalFlex{
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0;
  }

  .rowFlex{
    display: flex;
    flex-direction: row;
    padding: 0;
    margin: 0;
  }

  .inputDesign{
    border-radius: 10px;
    border: 1px solid grey;
    height: 45px;
    outline: none;
    color: black;
    font-size: 22px;
    margin-top: 12px;
    padding-left: 15px;
  }

  .inputDesign::placeholder{
    font-style: italic;
  }

  .buttonDesign{
    width: 100%;
    height: 50px;
    background: #FB9400;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-radius: 10px;
    margin-top: 15px;
    font-size: 21px;
  }
  .buttonDesign:hover{
    background: rgba(251,158,0,0.9);
  }

  .container-register{
    padding-left: 40px;
    padding-right: 40px;
    padding-bottom: 50px;
    background: white;
    border-radius: 15px;
  }

  input[type="checkbox"]{
    width: 1.4em;
    height: 1.4em;
    outline: none;
    cursor: pointer;
    border-radius: 999px;
  }

  a{
    color: cornflowerblue;
  }

  .error{
    border: 2px solid red;
    color: red;
  }

  .error::placeholder{
    color: red;
  }

</style>

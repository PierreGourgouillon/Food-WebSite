<template>
  <div class="container-body">
    <div class="globalFlex container-login">
      <div class="globalFlex">
        <div class="globalFlex" style="padding-top: 50px; text-align: center">
          <h1>Se connecter</h1>
          <h2>Vous n'avez pas de compte ? <router-link :to="{name: 'Register'}">Créer un compte !</router-link></h2>
        </div>
      </div>

      <div class="globalFlex">
        <div class="globalFlex">
          <input type="text" class="inputDesign" placeholder="Email" v-model="email" v-if="!error.includes('email') && !errorLogin">
          <input type="text" class="inputDesign error" placeholder="Email" v-model="email" v-else>


          <input type="password" class="inputDesign" placeholder="Mot de passe" v-model="password" v-if="!error.includes('password') && !errorLogin">
          <input type="password" class="inputDesign error" placeholder="Mot de passe" v-model="password" v-else>

          <div class="globalFlex" style="justify-content: center;align-items: center; color: red" v-if="errorMessage !== ''">
            <p>{{ errorMessage }}</p>
          </div>

          <div class="buttonDesign" @click="validationData"><span>Connexion</span></div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import * as auth from "../../fetching/auth/auth.js"

export default {
  name: "Login",
  data: function () {
    return {
      email: "",
      password: "",
      error: [],
      errorMessage: "",
      errorLogin: false,
    }
  },
  methods: {
    async validationData () {
      if (!this.email) {
        this.error.push("email")
      }else{
        this.error = this.error.filter(e => e !== 'email')
      }

      if(!this.password){
        this.error.push("password")
      }else {
        this.error = this.error.filter(e => e !== 'password')
      }

      if(this.error.length === 0 ){
        let error = await auth.fetchLogin(this.email, this.password)
        if (error !== undefined){
          this.errorLogin = true
          this.errorMessage = error
        }
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

.container-login h1{
  font-size: 55px;
  margin-block: 0;
  color: black;
  font-family: 'Roboto', sans-serif;
}

.container-login h2{
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
  margin-top: 30px;
  font-size: 21px;
}
.buttonDesign:hover{
  background: rgba(251,158,0,0.9);
}

.container-login{
  padding-left: 100px;
  padding-right: 100px;
  padding-bottom: 40px;
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

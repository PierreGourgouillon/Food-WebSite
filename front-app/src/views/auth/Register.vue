<template>
<div class="container-body">
<div class="globalFlex container-register">
          <div class="globalFlex">
            <div class="globalFlex" style="padding-top: 50px; text-align: center">
                <h1>Créer votre compte</h1>
                <h2>Vous avez déjà un compte ? Connectez vous !</h2>
            </div>
          </div>

          <div class="globalFlex">
            <div class="globalFlex">
                <input type="text" class="inputDesign" placeholder="Email">
                <div class="rowFlex" style="width: 100%;justify-content: space-between">
                    <input type="text" style="width: 45%" class="inputDesign" placeholder="Nom">
                    <input type="text" style="width: 45%" class="inputDesign" placeholder="Prénom">
                </div>
              <input type="text" class="inputDesign" placeholder="Mot de passe">
              <div class="buttonDesign"><span>Register</span></div>
              <div class="rowFlex" style="justify-content: flex-start">
                <input type="checkbox">
                <span style="margin-left: 10px; color: black">I have read and Agree to the Terms of Service</span>
              </div>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "Register"
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
    background: #2c3e50;
    color: white;
  }

  .container-register h1{
    font-size: 50px;
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
    margin-top: 12px;
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

</style>

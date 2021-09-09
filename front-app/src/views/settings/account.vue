<template>
  <div id="container" class="column">
    <div id="cont" class="column">
      <div id="title-account">
        <span>Account</span>
      </div>

      <div id="container-profil" class="column">
        <div id="profil" class="column">
          <span class="profil-title">Profile</span>
          <span class="description-profil">This informations will be displayed publicly so be careful what you share.</span>
        </div>

        <div id="identity-name" class="row">
          <div class="input">
            <span>First name</span>
            <Input></Input>
          </div>

          <div class="input" style="margin-right: 15px">
            <span>Last name</span>
            <Input></Input>
          </div>
        </div>

        <div id="photo" class="column">
          <h1>Photo</h1>
          <div class="row" style="margin-top: 7px">
            <div id="profil-image">
              <img src="../../assets/images/test.jpg">
            </div>
            <Button name="Change" style="margin-left: 10px" ></Button>
            <div id="remove-photo">
              <span>Remove</span>
            </div>
          </div>
        </div>

        <hr>

        <div class="column">
          <div class="column" style="margin-top: 30px">
            <span class="profil-title">Personal Information</span>
            <span class="description-profil">This information will be displayed publicly so be careful what you share.</span>
          </div>

          <div class="column">
            <div class="row personnal">
              <div class="input">
                <span>Email address</span>
                <Input></Input>
              </div>

              <div class="input" style="margin-right: 15px">
                <span>Phone number</span>
                <Input></Input>
              </div>
            </div>

              <div class="row personnal">
                <div class="input">
                  <span>Street</span>
                  <Input></Input>
                </div>

                <div class="input" style="margin-right: 15px">
                  <span>Language</span>
                  <Input></Input>
                </div>
              </div>
            <span class="description-profil" style="margin-top: 30px">This account was created on January 5, 8:35:40 PM</span>
            <hr>
            <div class="row" style="justify-content: flex-end;margin-top: 30px">
              <Button name="Cancel" style="margin-right: 15px"></Button>
              <Button name="Save"></Button>
            </div>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
import Input from "../../components/ui/input";
import Button from "../../components/ui/button/settings"

export default {
  name: "account",
  components: {
    Input,
    Button
  }
}
</script>

<style scoped>
  .row{
    display: flex;
    flex-direction: row;
  }

  .column{
    display: flex;
    flex-direction: column;
  }

  #container{
    width: 100%;
    align-items: center;
  }

  #cont{
    width: 70%;
    padding-top: 50px;
  }

  #title-account{
    color: black;
    font-family: "Roboto", sans-serif;
    font-size: 30px;
    font-weight: 600;
  }
  #profil{
    margin-top: 30px;
  }

  .profil-title{
    font-family: "Roboto", sans-serif;
    font-size: 22px;
    color: black;
    font-weight: 400;
  }

  .description-profil{
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    color: #2c3e50;
    margin-top: 7px;
  }

  .input{
    width: 350px;
  }

  #identity-name{
    margin-top: 30px;
    justify-content: space-between;
    overflow: hidden;
  }

  .input Input{
    margin-top: 5px;
  }

  .input span{
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 15px;
    letter-spacing: 0.2px;
  }

  #photo{
    margin-top: 30px;
  }

  h1{
    font-size: 17px;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    color: black;
  }

  #profil-image{
    width: 40px;
    height: 40px;
  }

  #profil-image img{
    width: 100%;
    border-radius: 999px;
  }

  #remove-photo{
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 400;
    font-family: "Roboto", sans-serif;
    margin-left: 23px;
  }

  #remove-photo:hover{
    color: red;
    transition: 0.3s;
    cursor: pointer;
  }

  hr{
    border-top: 1px solid rgba(182, 182, 182, 0.4);
    width: 100%;
    margin-top: 30px;
  }

  .personnal{
    margin-top: 30px;
    justify-content: space-between;
    overflow: hidden;
  }

</style>

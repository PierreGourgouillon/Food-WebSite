<template>
  <div id="container" class="column">
    <div id="cont" class="column">
      <div id="title">
        <span>Security</span>
      </div>

      <div id="container-profil" class="column">
        <div style="margin-top: 30px" class="column">
          <span class="profil-title">Password</span>
          <span class="description-profil">You can change your password but don't share it.</span>
        </div>

        <div class="row">
          <div class="row space" style="margin-top: 30px;width: 100%">
            <div class="input" style="margin-right: 15px">
              <span>Actual Password</span>
              <Input></Input>
            </div>

            <div class="column">
              <div class="input" style="margin-right: 15px">
                <span>New Password</span>
                <Input></Input>
              </div>

              <div class="input" style="margin-right: 15px;margin-top: 30px">
                <span>New Password</span>
                <Input></Input>
              </div>
            </div>
          </div>
        </div>

        <hr>

        <div class="row" style="justify-content: flex-end;margin-top: 30px">
          <Button name="Cancel" style="margin-right: 15px"></Button>
          <Button name="Save"></Button>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
import Input from "../../components/ui/input";
import Button from "../../components/ui/button/settings"

export default {
  name: "security",
  components: {
    Input,
    Button,
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

#title{
  color: black;
  font-family: "Roboto", sans-serif;
  font-size: 30px;
  font-weight: 600;
}

.input{
  width: 350px;
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

.space{
  justify-content: space-between;
}

hr{
  border-top: 1px solid rgba(182, 182, 182, 0.4);
  width: 100%;
  margin-top: 30px;
}

</style>
<template>
  <div class="row">
    <Header></Header>

      <div id="list-settings" class="column">
        <div id="title-settings">
          <span>Settings</span>
        </div>
        <router-link to="/settings/account">
          <Option name="Compte" description="Vous allez pouvoir modifier vos données personnelles, que ca soit votre nom etc."></Option>
        </router-link>

        <Option name="Compte" description="Vous allez pouvoir modifier vos données personnelles, que ca soit votre nom etc."></Option>
        <Option name="Compte" description="Vous allez pouvoir modifier vos données personnelles, que ca soit votre nom etc."></Option>
        <Option name="Compte" description="Vous allez pouvoir modifier vos données personnelles, que ca soit votre nom etc."></Option>
        <Option name="Compte" description="Vous allez pouvoir modifier vos données personnelles, que ca soit votre nom etc."></Option>

      </div>

      <div id="contains-settings">
        <router-view></router-view>
      </div>
  </div>
</template>

<script>
import Header from "../components/layouts/header";
import Option from "../components/ui/settings/option-settings"

export default {
  name: "Settings",
  components: {
    Header,
    Option,
  }
}
</script>

<style scoped>
  a{
    color: transparent;
  }

  .row{
    display: flex;
    flex-direction: row;
  }

  .column{
    display: flex;
    flex-direction: column;
  }

  #list-settings{
    flex-basis: 25%;
    border-left: 1.3px solid rgba(128,128,128, 0.5) ;
    border-right: 1.3px solid rgba(128,128,128, 0.5) ;
  }

  #contains-settings{
    flex-basis: 75%;
  }

  #title-settings{
    border-bottom: 1px solid rgba(128,128,128, 0.5) ;
    padding: 20px 30px;
    font-family: "Roboto", sans-serif;
    font-size: 23px;
    color: black;
  }
</style>
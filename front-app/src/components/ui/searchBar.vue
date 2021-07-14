<template>
  <div class="container-search-bar">
    <div><input type="text" placeholder="Chercher une nourriture"></div>
    <div id="image"><img src="../../assets/icons/search.svg"></div>
  </div>
</template>

<script>
export default {
  name: "searchBar"
}
</script>

<style scoped>

  .container-search-bar{
    display: flex;
    flex-direction: row;
    margin: 0;
    padding: 12px 10px;
    background: white;
    align-items: center;
    justify-content: center;
    border-radius: 999px;
  }

  .container-search-bar div img{
    align-items: center;
    justify-content: center;
    margin-top: 3px;
  }

  .container-search-bar input {
    outline: none;
    border: none;
    font-size: 16px;
  }

  #image {
    cursor: pointer;
  }

  #image:hover{
    filter: invert(56%) sepia(86%) saturate(1268%) hue-rotate(1deg) brightness(98%) contrast(101%);
  }

</style>
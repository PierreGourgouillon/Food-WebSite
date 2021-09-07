<template>
    <input type="text"/>
</template>

<script>
export default {
  name: "input"
}
</script>

<style scoped>
  input{
    height: 35px;
    width: 100%;
    outline: none;
    border: 1px solid rgba(128, 128, 128, 0.5);
    border-radius: 7px;
    box-shadow: 0 1px 1px rgba(182, 182, 182, 0.75);
  }

  input[type=text]{
    padding-left: 10px;
    font-size: 17px;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
  }

  input:focus{
    outline: none;
  }
</style>
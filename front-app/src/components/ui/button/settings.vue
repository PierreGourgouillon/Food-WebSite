<template>
  <div>
    <div id="save" ref="button" v-if="name === 'Save'">
      <span>{{ name }}</span>
    </div>

    <div id="button" ref="button" v-else>
      <span>{{ name }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "settings",
  props: {
    name:String,
  },
}
</script>

<style scoped>
  #button{
    display: flex;
    flex-direction: row;
    padding: 10px 13px;
    justify-content: center;
    align-items: center;
    background: white;
    color: black;
    border-radius: 7px;
    border: 1px solid rgba(128, 128, 128, 0.5);
    box-shadow: 0 1px 1px rgba(182, 182, 182, 0.4);
    cursor: pointer;
  }

  #save{
    display: flex;
    flex-direction: row;
    padding: 10px 13px;
    justify-content: center;
    align-items: center;
    background: #FB9400;
    color: white;
    border-radius: 7px;
    border: 1px solid rgba(128, 128, 128, 0.5);
    box-shadow: 0 1px 1px rgba(182, 182, 182, 0.4);
    cursor: pointer;
  }
</style>
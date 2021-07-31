<template>
  <div class="column">
    <div class="row">
      <div class="column">
        <span>Total income</span>
        <span>$1200</span>
        <span>45%</span>
      </div>
      <div class="column">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "expenses"
}
</script>

<style scoped>
  .column{
    display: flex;
    flex-direction: column;
  }

  .row{
    display: flex;
    flex-direction: row;
  }
</style>
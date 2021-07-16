<template>
  <div class="div-2">
    <div class="div-filter">
    </div>
  </div>
</template>

<script>
export default {
  name: "cardPaiement"
}
</script>

<style scoped>
  .div-filter{
    width: 350px;
    height: 200px;
    border-radius: 22px;
    transform: rotate(-8deg);
    backdrop-filter: blur(5px);
    background: rgba(251, 148, 0, 0.4);
  }

  .div-2{
    border-radius: 22px;
    background: rgba(251, 148, 0, 0.8);
    width: 350px;
    height: 200px;
    transform: rotate(8deg);
  }
</style>
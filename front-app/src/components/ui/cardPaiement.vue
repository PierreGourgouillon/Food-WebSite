<template>
  <div class="cb-container">
    <span class="type">Debit Card</span>
    <span class="brand">VISA</span>
    <span class="amount">$ 1560.00</span>
    <span class="owner">Jeremy Mathew</span>
    <img class="chip" src="../../assets/images/puce-cb.svg">
    <span class="numbers">58253242</span>
  </div>
</template>

<script>
export default {
  name: "cardPaiement"
}
</script>

<style scoped>
.cb-container {
  position: relative;
  width: 325px;
  height: 175px;
  padding: 25px;
  border-radius: 22px;
}
.cb-container:before {
  content: '';
  display: flex;
  z-index: -1;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform: rotateZ(7deg);
  background: #FB9400;
  border-radius: inherit;
  height: 100%;
  width: 100%;
}
.cb-container:after {
  height: 100%;
  width: 100%;
  content: '';
  display: flex;
  z-index: -1;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(255, 148, 0, 0.4);
  backdrop-filter: blur(5px);
  border-radius: inherit;
  border: 4px solid rgba(255, 255, 255, 0.1);
}
.cb-container .type {
  color: white;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-size: 18px;
}
.cb-container .brand {
  position: absolute;
  top: 25px;
  right: 25px;
  color: white;
  font-family: "Roboto", sans-serif;
  font-weight: 800;
  font-size: 18px;
}
.cb-container .amount {
  position: absolute;
  bottom: calc(50px + 1rem);
  left: 25px;
  color: white;
  font-family: "Roboto", sans-serif;
  font-size: 32px;
  font-weight: 500;
}
.cb-container .owner {
  position: absolute;
  bottom: 25px;
  left: 25px;
  color: white;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-size: 16px;
}
.cb-container .chip {
  position: absolute;
  bottom: calc(50px + 1rem);
  right: 25px;
  height: 35px;
  filter: invert(100%) sepia(79%) saturate(13%) hue-rotate(183deg) brightness(103%) contrast(103%);
}
.cb-container .numbers {
  position: absolute;
  bottom: 25px;
  right: 25px;
  color: white;
  font-size: 10px;
  letter-spacing: 1.5 px;
  font-family: "Roboto", sans-serif;
}

</style>
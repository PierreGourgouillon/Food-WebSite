<template>
  <div class="rowFlex" id="viewAll">
    <div>
      <span>View All</span>
    </div>

    <div id="block">
      <img src="../../assets/icons/arrow_right.svg">
    </div>
  </div>
</template>

<script>
export default {
  name: "viewAll"
}
</script>

<style scoped>

#viewAll{
  cursor: pointer;
}

#viewAll:hover #block{
  border: 1px solid #FB9400;
  background: white;
  transition: 0.3s;
}

#viewAll:hover img{
  transition: 0.3s;
  filter: invert(55%) sepia(97%) saturate(1160%) hue-rotate(1deg) brightness(99%) contrast(102%);
}

.rowFlex{
  display: flex;
  flex-direction: row;
  flex-basis: auto;
  padding: 0;
  margin: 0;
  align-items: center;
}

span{
  color: #FB9400;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
}

#block{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 25px;
  width: 25px;
  background: #FB9400;
  border-radius: 5px;
  margin-left: 10px;
}

#block img {
  filter: invert(100%) sepia(0%) saturate(1%) hue-rotate(75deg) brightness(101%) contrast(101%);
}
</style>
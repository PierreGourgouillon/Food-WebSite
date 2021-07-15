<template>
  <div class="columnFlex card transition">
      <div class="columnFlex transition">
        <div class="imageFood transition">
          <img src="../../assets/foodIconsCategory/hamburger.png">
        </div>
      </div>
    <div class="columnFlex transition" style="margin-top: 10px">
      <span class="titleCategory transition">Pizza</span>
    </div>
    <div class="columnFlex transition">
      <div class="imageArrow transition" >
        <img src="../../assets/icons/arrow_right.svg">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "categoryBlock"
}
</script>

<style scoped>

.columnFlex{
  display: flex;
  flex-direction: column;
  margin: 0;
  justify-content: center;
  align-items: center;
}

.card{
  padding: 20px 30px;
  background: #FFFFFF;
  border-radius: 13px;
  cursor: pointer;
}

.imageArrow{
  background: #FB9400;
  border-radius: 999px;
  width: 30px;
  height: 30px;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.imageArrow img {
  filter: invert(100%) sepia(100%) saturate(2%) hue-rotate(150deg) brightness(110%) contrast(101%);
  width: 100%;
}

.titleCategory{
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 18px;
  color: black;
}

.imageFood {
  border-radius: 999px;
  width: 40px;
  height: 40px;
  display: flex;
  padding: 5px;
  justify-content: center;
  align-items: center;
}

.imageFood img {
  width: 100%;
}

.transition {
  transition: 0.2s;
}

.card:hover .imageFood{
  background: #FFFFFF;
}

.card:hover{
  background: #FB9400;
  box-shadow: 0px 10px 0px #FB9400;
}

.card:hover span{
  color: white;
}

.card:hover .imageArrow{
  background: white;
}

.card:hover .imageArrow img {
  filter: invert(74%) sepia(77%) saturate(4713%) hue-rotate(6deg) brightness(104%) contrast(109%);
}
</style>
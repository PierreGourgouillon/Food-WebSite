<template>
  <router-link :to="{ name: `${link}`}">
    <div class="columnFlex card transition">
      <div class="columnFlex transition">
        <div class="imageFood transition">
          <img :src="require(`../../assets/foodIconsCategory/${image}`)">
        </div>
      </div>
      <div class="columnFlex transition" style="margin-top: 10px">
        <span class="titleCategory transition">{{ title }}</span>
      </div>
      <div class="columnFlex transition">
        <div class="imageArrow transition" >
          <img src="../../assets/icons/arrow_right.svg">
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "categoryBlock",
  props: {
    title: String,
    image: String,
    link: String
  }
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
  padding: 20px 0px;
  width: 160px;
  background: #FFFFFF;
  border-radius: 20px;
  cursor: pointer;
  margin-left: 20px;
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
  width: 35px;
  height: 35px;
  display: flex;
  padding: 7px;
  justify-content: center;
  align-items: center;
}

.imageFood img {
  width: 100%;
}

.transition {
  transition: 0.3s;
}

.card:hover .imageFood{
  background: #FFFFFF;
}

.card:hover{
  background: #FB9400;
  box-shadow: rgba(251, 148, 0, 0.3) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;}

.card:hover span{
  color: white;
}

.card:hover .imageArrow{
  background: white;
}

.card:hover .imageArrow img {
  filter: invert(74%) sepia(77%) saturate(4713%) hue-rotate(6deg) brightness(104%) contrast(109%);
}

a{
  text-decoration: none;
}
</style>
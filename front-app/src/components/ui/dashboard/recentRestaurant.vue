<template>
  <div id="restaurant">
      <div id="image">
          <img :src="require(`../../../assets/restaurant/${image}`)">
      </div>

    <div id="info">
        <span id="name">{{ name }}</span>
        <span id="price">{{ price }}€</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "recentRestaurant",
  props:{
    name: String,
    price: String,
    image: String,
  }
}
</script>

<style scoped>

  #restaurant{
    display: flex;
    flex-direction: row;
    margin-top: 10px;
    padding: 3px 5px;
  }

  #restaurant:hover{
    background: #FB9400;
    border-radius: 10px;
    cursor: pointer;
    transition: 0.3s;
  }

  #restaurant:hover #name{
    color: white;
  }

  #image {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #image img{
    width: 100%;
    height: 100%;
  }

  #info{
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 20px;
  }

  #name{
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 18px;
  }

  #price{
    margin-top: 5px;
    font-family: "Roboto", sans-serif;
    color: red;
    font-weight: 600;
    font-size: 17px;
  }

</style>
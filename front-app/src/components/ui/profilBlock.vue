<template>
  <div class="rowFlex" style="align-items: center">
    <div class="image-notification"><img src="../../assets/icons/notifications.svg"></div>
    <div class="rowFlex" style="align-items: center">
      <div class="image-profil"><img src="../../assets/images/kisspng-computer-icons-google-account-user-profile-iconfin-png-icons-download-profile-5ab0301e32cb90.1777380215214960942081.png"></div>
      <div class="globalFlex" style="justify-content: flex-start;">
        <div style="padding-left: 6px;padding-right: 8px"><span id="style-pseudo">Pierre</span></div>
        <div style="padding-left: 6px;padding-right: 8px"><span id="style-user">User</span></div>
      </div>
      <div class="image-arrow-down"><img src="../../assets/icons/arrow_down.svg"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "profilBlock"
}
</script>

<style scoped>
.rowFlex{
  display: flex;
  flex-direction: row;
  flex-basis: auto;
  padding: 0;
  margin: 0;
}

.image-profil{
  width: 25px;
  padding: 5px;
  border-radius: 999px;
  background: #42b983;
  margin-right: 5px;
}

.image-notification {
  width: 26px;
  height: 26px;
  margin-right: 30px;
}

.image-arrow-down{
   width: 28px;
   height: 28px;
 }


#style-pseudo{
  font-family: "Roboto", sans-serif;
  font-size: 17px;
  font-weight: 500;
  color: black;
}

#style-user{
  font-family: "Roboto", sans-serif;
  font-size: 15px;
  font-weight: 300;
}

.image-profil img {
  width: 25px;
  height: 23px;
}


.image-notification img{
  width: 100%;
}

.image-arrow-down img {
  width: 100%;
}

</style>
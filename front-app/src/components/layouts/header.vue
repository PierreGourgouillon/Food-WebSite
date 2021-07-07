<template>
  <header>
      <div class="globalFlex" style="padding-top: 30px; justify-content: space-between;height: 100%;width: 100%">
        <div class="globalFlex">

          <router-link :to="{ name:'Home' }">
            <div class="icon-container globalFlex">
              <div>
                <img src="../../assets/icons/home.svg">
              </div>
            </div>
          </router-link>

          <div class="icon-container globalFlex">
            <div>
              <img src="../../assets/icons/message.svg">
            </div>
          </div>

          <div class="icon-container globalFlex">
            <div>
              <img src="../../assets/icons/email.svg">
            </div>
          </div>

          <div class="icon-container globalFlex">
            <div>
              <img src="../../assets/icons/favorite.svg">
            </div>
          </div>

          <div class="icon-container globalFlex">
            <div>
              <img src="../../assets/icons/settings.svg">
            </div>
          </div>

        </div>

        <div class="globalFlex">
            <div class="icon-container" style="margin-bottom: 30px">
              <div id="logout">
                <img src="../../assets/icons/logout.svg">
              </div>
            </div>
        </div>
      </div>
  </header>
</template>

<script>
export default {
  name: "header"
}
</script>

<style scoped>

  header{
    display: flex;
    flex-direction: column;
    width: 150px;
    height: 100vh;
    background: white;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
  }

  .globalFlex{
    display: flex;
    flex-direction: column;
  }

  .icon-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5px;
    margin-top: 20px;
  }

  .icon-container img{
    width: 30px;
    height: 30px;
    filter: invert(53%) sepia(8%) saturate(329%) hue-rotate(197deg) brightness(96%) contrast(95%);
  }

  .icon-container div {
    padding: 13px 13px 9px 13px;
    border-radius: 999px;
    cursor: pointer;
  }

  .icon-container div:hover{
    background: #FB9400;
    transition: 0.3s;
  }

  .icon-container div:hover img{
    filter: invert(100%) sepia(10%) saturate(1073%) hue-rotate(294deg) brightness(115%) contrast(101%);
  }

  #logout:hover{
    background: #ff2222;
  }

</style>
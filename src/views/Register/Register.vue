<template>
    <div class="register">
        <div class="register__header">
            <img
                    @click="router.back()"
                    src="../../assets/images/locaweb.svg"
                    alt="logo"
            >
            <h1>Você está muito próximo de mudar a forma de hospedar seu site</h1>
        </div>
        <div class="register__view">
            <router-view/>
        </div>
    </div>

</template>
<script setup lang="ts">
import router from "@/router";
</script>
<style lang="scss">
.register {
  margin: 40px 0;

  @media only screen and (max-width: 992px) {
    margin: 0;
    padding: 20px;
  }

  &__header {
    display: flex;
    align-items: center;
    flex-direction: column;

      img {
        cursor: pointer;
      }

      h1 {
          @media only screen and (max-width: 992px) {
              text-align: center;
          }
      }
  }

  &__view {
      display: flex;
      justify-content: center;
      margin: 20px 0;
  }
}
</style>

<template>
    <div class="home">
        <header class="home__header">
            <img src="../assets/images/locaweb.svg" alt="">
            <div class="home__user" @click="showDropDown = !showDropDown">
                <span>J</span>
                <div class="home__dropdown" v-if="showDropDown" @click="logout">Sair</div>
            </div>
        </header>
        <main class="home__content">
           <div>
               <h2>Olá João</h2>
               <h3>Seja bem vindo à sua conta de hospedagem</h3>
           </div>
            <img src="../assets/images/background.svg" alt="" height="654">
            <span>Caso tenha alguma dúvida, visite nossa central de ajuda</span>
        </main>
    </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import router from "@/router";
const showDropDown = ref(false)

function logout() {
    localStorage.removeItem('access_token')
    router.back()
}
</script>

<style lang="scss">
.home {
  height: 100vh;
  &__header {
    display: flex;
    padding: 10px 40px;
    justify-content: space-between;
    align-items: center;
  }

  &__dropdown {
    position: absolute;
    background-color: white;
    padding: 10px;
    bottom: -45px;
    right: -5px;
 }

  &__user {
    background-color: #D9D9D9;
    border-radius: 50%;
    padding: 8px 16px;
    cursor: pointer;
  }

  &__content {
    margin: 0 450px;
    display: flex;
    flex-direction: column;
    div {
        margin: 30px 0;
    }

      span {
          margin: 40px 0;
      }
  }
}
</style>


<template>
    <div class="home">
        <header class="home__header">
            <img src="../assets/images/locaweb.svg" alt="">
            <div class="home__user" @click="showDropDown = !showDropDown">
                <span>U</span>
                <div class="home__dropdown" v-if="showDropDown" @click="logout">Sair</div>
            </div>
        </header>
        <main class="home__content">
           <div>
               <h2>Olá Usuário,</h2>
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
    router.push({ name: 'Login'})
}
</script>

<style lang="scss">
.home {
  height: 100vh;
  @media only screen and (max-width: 992px) {
    display: flex;
    padding: 20px;
    flex-direction: column;
  }

  &__header {
    display: flex;
    padding: 10px 40px;
    justify-content: space-between;
    align-items: center;

    @media only screen and (max-width: 992px) {
      padding: 0;
    }
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
    align-items: center;
    display: flex;
    flex-direction: column;
    div {
        margin: 30px 0;
    }

    img {
      width: fit-content;

      @media only screen and (max-width: 992px) {
        width: -webkit-fill-available;
        height: auto;
      }
    }

    span {
        margin: 40px 0;
    }
  }
}
</style>


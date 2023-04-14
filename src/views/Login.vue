<template>
  <div class="login">
      <img
          src="../assets/images/locaweb.svg"
          alt="logo"
      >
      <form class="login__form" @submit.prevent="login">
        <h2>Entre na sua conta</h2>
        <h3>Para acessar sua conta informe seu e-mail e senha</h3>
        <Input
          type="email"
          class="login__input"
          label="E-mail"
          placeholder="Seu e-mail"
          v-model="email"
        />
        <Input
          class="login__input"
          label="Senha"
          placeholder="Sua senha"
          v-model="password"
        />
        <button type="submit">Fazer login</button>
    </form>
    <h3>Ainda não tem uma conta? <a href="/register">Cadastre-se</a></h3>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import Input from "@/components/Input.vue";

const email = ref(null)
const password = ref(null)
function login() {
    console.log(email.value)
    console.log(password.value)
}
</script>

<style lang="scss">
.login {
  &__form {
    background-color: #FFFFFF;
    padding: 2.4rem;
    margin: 2rem 0;
    border: 1px solid #E6EAF2;
    border-radius: 5px;
  }
  &__input {
    margin-top: 1rem;
  }
}
@media (min-width: 1024px) {
  .login {
    justify-content: center;
    flex-direction: column;
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

<template>
  <div class="login">
      <img
          src="../assets/images/locaweb.svg"
          alt="logo"
      >
      <form class="login__form" @submit.prevent="handleLogin">
        <h2>Entre na sua conta</h2>
        <h3>Para acessar sua conta informe seu e-mail e senha</h3>
        <Input
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
        <Button
          type="submit"
          text="FAZER LOGIN"
          class="login__button"
          :is-disabled="buttonIsDisabled"
          :is-loading="loading"
        />
    </form>
    <h3>Ainda não tem uma conta? <a href="/register/step1">Cadastre-se</a></h3>
  </div>
</template>

<script setup lang="ts">
import {computed, ref} from "vue";
import Input from "@/components/Input.vue";
import Button from "@/components/Button.vue";
import { login } from "@/usecases/login";
import router from "@/router";

const email = ref('')
const password = ref('')
const loading = ref(false)
const buttonIsDisabled = computed(() => email.value.length === 0 || password.value.length === 0)

async function handleLogin() {
    loading.value = true
    try {
        const token = await login()
        localStorage.setItem('access_token', token)
        await router.push('/')
    } catch(e) {
        console.log(e)
    } finally {
        loading.value = false
    }
}
</script>

<style lang="scss">
.login {
  @media only screen and (max-width: 992px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    height: 100vh;
    justify-content: center;
  }

  &__form {
    background-color: #FFFFFF;
    padding: 20px;
    margin: 14px 0;
    border: 1px solid #E6EAF2;
    border-radius: 5px;
  }

  &__input {
    margin-top: 16px;
  }

  &__button {
    margin-top: 32px;
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

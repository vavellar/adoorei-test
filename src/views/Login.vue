<template>
  <div class="login">
    <h1>This is an about page</h1>
    <form class="login__form" @submit.prevent="login">
        <h2>Entre na sua conta</h2>
        <h3>Para acessar sua conta informe seu e-mail e senha</h3>
        <input type="text" label="teste">
    </form>
  </div>
</template>

<script setup lang="ts">
function login() {
    console.log('teste')
}
</script>

<style lang="scss">
@media (min-width: 1024px) {
  .login {
    flex-direction: column;
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

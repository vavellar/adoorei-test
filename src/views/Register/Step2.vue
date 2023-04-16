<template>
  <div class="register__step2">
      <form action="" class="register__step2__form" @submit.prevent="handleRegister">
          <h2>Dados pessoais</h2>
          <h3>Informe seus dados pessoais para acesso à sua conta</h3>
          <div class="register__step2__inputs">
              <Input placeholder="nome completo" label="Nome completo" v-model="state.form.name"/>
              <Input placeholder="(99) 99999-0000" label="Celular" v-model="state.form.phone"/>
              <Input placeholder="E-mail" label="Informe seu e-mail" v-model="state.form.email"/>
              <Input
                  placeholder="Sua senha"
                  label="Senha"
                  v-model="state.form.password"
                  helper-text="No mínimo 8 caracteres"
              />
              <Input
                  placeholder="Confirme sua senha"
                  label="Confirme sua senha"
                  v-model="state.form.confirmPassword"
                  :error-text="areDifferent && state.form.confirmPassword.length > 0 ? 'As senhas precisam ser iguais' : ''"
              />
          </div>
          <div class="register__step2__data">
            <h2>Dados do seu site</h2>
            <Input placeholder="Meu site" label="Nome do seu site"/>
          </div>
          <div class="register__step2__submit">
              <div>
                  <input type="checkbox" v-model="state.form.acceptUseTerms">
                  <span>Ao concluir com seu cadastro você concorda com nossos temos de uso e políticas de privacidade</span>
              </div>
              <Button text="CRIAR CONTA" type="submit" :is-disabled="buttonIsDisabled"/>
          </div>
      </form>
      <div>
          <Card
              :title="plan.title"
              :options="plan.options"
              :text="plan.text"
              :info="plan.info"
              :subtitle="plan.value"
              :show-button="false"
              is-selected
          />
          <Button text="Trocar plano" variant="outlined" @click="router.back()"/>
      </div>
  </div>
</template>

<script setup lang="ts">
import Input from "@/components/Input.vue";
import Card from "@/components/Card.vue";
import Button from "@/components/Button.vue";
import {computed, reactive} from "vue";
import { useRoute } from 'vue-router'
import {plans} from "@/utils/plans";
import {register} from "@/usecases/register";
import router from "@/router";

const route = useRoute()
const state = reactive({
    form: {
        name: '',
        phone: '',
        email: '',
        password: '',
        confirmPassword: '',
        acceptUseTerms: false,
    },
})

const plan = computed(() => plans.find((plan) => plan.title === route.params.selectedPlan))

const hasEmptyValues = computed(() => Object.values(state.form).some((value: string | boolean) => !value))

const areDifferent = computed(() => state.form.password !== state.form.confirmPassword)

const buttonIsDisabled = computed(() =>
    hasEmptyValues.value ||
    areDifferent.value ||
    state.form.password.length < 8
)
function handleRegister() {
    const [ firstname, lastname ] = state.form.name.split(' ')
    register({
        email: state.form.email,
        phone: state.form.phone,
        password: state.form.password,
        name: {
            firstname,
            lastname
        }
    }).then((response) => {
        console.log(response)
    }).catch((e) => console.log(e))

}
</script>

<style lang="scss">
.register__step2 {
  display: flex;

  @media only screen and (max-width: 992px) {
    flex-direction: column;
  }

  &__form {
    max-width: 617px;
    background-color: #FFFFFF;
    padding: 24px;
    height: fit-content;
    border: 1px solid #E6EAF2;
    border-radius: 5px;
    margin-right: 40px;

    @media only screen and (max-width: 992px) {
      margin-right: 0;
    }
  }

  &__inputs {
    * {
      margin: 4px 0;
    }
  }

  &__data {
     margin: 20px 0;
     border-top: 1px solid rgba(81, 93, 116, 0.3);;
     padding: 20px 0;
     border-bottom: 1px solid rgba(81, 93, 116, 0.3);;
  }

    &__submit {

     div:first-of-type {
        margin: 10px 0;

         span {
             margin-left: 10px;
         }
     }
  }
}
</style>
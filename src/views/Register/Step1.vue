<template>
  <div class="register__step1">
      <div class="register__step1__content">
          <h2>Escolha seu plano</h2>
          <div class="register__step1__content__cards">
              <Card
                  v-for="plan in plans"
                  :key="plan.title"
                  :title="plan.title"
                  :subtitle="plan.value"
                  :info="plan.info"
                  :text="plan.text"
                  :badge="plan.badge"
                  :options="plan.options"
              />
          </div>
      </div>
  </div>
</template>
<script setup lang="ts">

import Card from "@/components/Card.vue";
import {plans} from "@/utils/plans";
</script>

<style lang="scss">

.register__step1 {
  &__content {
     display: flex;
     flex-direction: column;
     align-items: center;

      &__cards {
        margin: 40px 0;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: 1fr;
        grid-column-gap: 20px;

        @media only screen and (max-width: 992px) {
          grid-template-columns: 1fr;
          grid-template-rows: repeat(3, 1fr);
          grid-row-gap: 20px;
        }
      }
  }
}
</style>
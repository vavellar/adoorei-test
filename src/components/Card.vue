<template>
    <div class="card">
        <div :class="['card__badge', 'card__badge-selected']" v-if="isSelected">
            Plano escolhido
        </div>
        <div :class="['card__badge', 'card__badge-mostUsage']" v-if="badge">
            Mais usado
        </div>
        <h1 class="card__title">{{ title }}</h1>
        <h1 class="card__subtitle">{{ subtitle }}</h1>
        <div class="card__info">
          <span>{{ info }}</span>
        </div>
        <Button
            v-if="showButton"
            text="ESCOLHER ESSE PLANO"
            @click="goToSecondStep()"
            class="card__button"
        />
        <div class="card__content__wrapper">
            <h4 class="card__content__text">
                {{  text  }}
            </h4>
            <div class="card__content__options" v-for="option in options" :key="option">
                <img src="../assets/icons/check.svg" alt="">
                <p>
                    {{ option }}
                </p>
            </div>
            <h4 class="card__content__text">
                Suporte 24 horas, 7 dias por semana grátis;
            </h4>
            <h4 class="card__content__text">
                Aplicativos disponíveis;
            </h4>
            <div class="card__content__options" v-for="app in availableApps" :key="app">
                <img src="../assets/icons/check.svg" alt="">
                <p>
                    {{ app }}
                </p>
            </div>
            <h4 class="card__content__text">
                Você ainda tem
            </h4>
            <div class="card__content__options" v-for="benefit in benefits" :key="benefit">
                <img src="../assets/icons/check.svg" alt="">
                <p>
                    {{ benefit }}
                </p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {availableApps, benefits} from "@/utils/plans";
import Button from "@/components/Button.vue";
import router from "@/router";

const props = defineProps({
    title: {
        type: String,
        required: true
    },
    subtitle: {
        type: String,
        required: true
    },
    info: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    options: {
        type: Array,
        required: true
    },
    showButton: {
        type: Boolean,
        default: true
    },
    badge: {
        type: Boolean,
        default: false
    },
    isSelected: {
        type: Boolean,
        default: false
    }
})

function goToSecondStep() {
    router.push({
        name: 'Step2',
        params: { selectedPlan: props.title}
    })
}
</script>

<style lang="scss" scoped>
.card {
  background: #FFFFFF;
  border-radius: 5px;
  padding: 40px;
  max-width: 348px;;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 992px) {
    max-width: unset;
  }

 &__badge {
     position: absolute;
     top: -10px;
     color: white;
     text-transform: uppercase;
     padding: 8px 24px;
     border-radius: 10px;

     &-selected {
         background: #000000;
     }

     &-mostUsage {
         background: #10C300;
     }
 }

  &__subtitle {
    margin: 20px 0;
    color: #F30168;
    font-weight: bold;
  }

  &__info {
    font-size: large;
    text-align: center;
    width: 100%;
    padding: 16px;
    border-top: 1px solid rgba(196, 196, 196, 0.5);
    border-bottom: 1px solid rgba(196, 196, 196, 0.5);;
  }

  &__button {
      margin: 16px 0;
  }

  &__content {
    &__text {
        margin-top: 12px;
        font-weight: bold;
    }
    &__options {
        display: flex;
        margin: 10px 0;

        img {
            margin-right: 10px;
        }
    }
  }
}
</style>
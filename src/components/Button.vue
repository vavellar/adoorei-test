<template>
    <button
        :type="type"
        :class="['button', { 'button-disabled': isDisabled }, `button-${variant}`]"
        @click="handleClick"
        :disabled="isDisabled"
        text="">
        {{ text }}
    </button>
</template>

<script setup>
const emit = defineEmits(['click'])
defineProps({
    text: {
        type: String,
        required: true
    },
    type: {
        type: String
    },
    variant: {
        type: String,
        default: 'contained'
    },
    isDisabled: {
        type: Boolean,
        default: false
    }
});
function handleClick() {
    emit('click')
}
</script>

<style lang="scss" scoped>
.button {
  padding: 24px;
  display: flex;
  justify-content: center;
  width: 100%;
  border-radius: 5px;
  cursor: pointer;
  border: none;

  &-contained {
    background-color: #F30168;
    color: white;

      &:not([disabled]):hover {
          background-color: #e66691;
          transition: 0.5s;
      }
  }

  &-outlined {
    background-color: transparent;
    color: black;
    border: 1px solid black;

      &:not([disabled]):hover {
          background-color: #f6f6f6;
          transition: 0.5s;
      }
  }

  &-disabled {
      background: #E5E5E5;
      color: #BBBBBB;
      cursor: not-allowed;
  }

}
</style>
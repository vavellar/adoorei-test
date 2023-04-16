<template>
    <button :type="type" class="button" @click="handleClick">{{ text }}</button>
</template>

<script setup>
import { defineProps } from 'vue';
const emit = defineEmits(['click'])
defineProps({
    text: {
        type: String,
    },
    type: {
        type: String
    }
});
function handleClick() {
    emit('click')
}
</script>

<style lang="scss" scoped>
.button {
  background-color: #F30168;
  padding: 24px;
  display: flex;
  justify-content: center;
  width: 100%;
  border-radius: 5px;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #e66691;
    transition: 0.5s;
  }
}
</style>
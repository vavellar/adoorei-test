<template>
    <div class="input__wrapper">
        <label class="input__label">{{ label }}</label>
        <input
            class="input__element"
            :value="modelValue"
            :type="type"
            :placeholder="placeholder"
            @input="$emit('update:modelValue', $event.target.value)"
        />
        <span>{{ helperText }}</span>
        <span class="input__error">{{ errorText }}</span>
    </div>
</template>

<script setup>
defineEmits(['update:modelValue'])
defineProps(['modelValue', 'label', 'placeholder', 'type', 'helperText', 'errorText'])

</script>

<style lang="scss">
.input {
  &__wrapper {
    display: flex;
    flex-direction: column;
  }

  &__label {
    margin-bottom: 2px;
  }

  &__error {
   color: red;
  }

  &__element {
    padding: 16px;
    border: 1px solid rgba(81, 93, 116, 0.5);
    border-radius: 5px;
  }
}
</style>
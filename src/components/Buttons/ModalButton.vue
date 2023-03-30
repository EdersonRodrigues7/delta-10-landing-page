<script setup lang="ts">
defineProps<{
  styleClasses: string,
  modalTarget: string,
  msg: string,
}>()
</script>
<template>
    <button :class="styleClasses" type="button" data-bs-toggle="modal" :data-bs-target="modalTarget">{{ msg }}</button>
</template>
<style>
button.get-budget{
  padding: 1rem 2rem;
  background-color: hsla(24,88%,50%, 1);
  color: var(--color-text);
  font-weight: 500;
  border: none;
  border-radius: 1.4rem;
  box-shadow: inset;
}
</style>
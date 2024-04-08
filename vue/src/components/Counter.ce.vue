<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue';

const emit = defineEmits<{
  (e: 'countChanged'): void;
}>();

const { initialCount } = defineProps<{
  initialCount: number;
}>();

const count = ref(initialCount);

watch(count, () => {
  // This doesn't work when web-component is nested (because of bubbles:false)
  emit('countChanged');
  // So you have to do this:
  el.value?.dispatchEvent(
    new CustomEvent('countChanged', {
      bubbles: true,
      composed: true,
    })
  );
});

const el = ref<HTMLElement | null>(null);

onMounted(() => {
  console.log('Connected', el.value);
});

onUnmounted(() => {
  console.log('Disconnected', el.value);
});
</script>

<template>
  <div ref="el">
    <button @click="count--">-</button>
    <p>{{ count }}</p>
    <button @click="count++">+</button>
  </div>
</template>

<style scoped>
div {
  display: flex;
  gap: 1rem;
}
</style>

<script setup lang="ts">
import IconNuxt from '~/components/IconNuxt.vue';

const count = ref(0);
</script>

<template>
  <div class="content-center justify-items-center min-h-screen">
    <a
      href="https://nuxt.com"
      target="_blank"
      aria-label="Nuxt"
    >
      <IconNuxt />
    </a>
    <h1 class="dark:text-white font-semibold sm:text-5xl text-4xl text-black text-center">
      Welcome to Nuxt!
    </h1>
    <div class="flex gap-2 items-center mt-9">
      <button
        class="i-ph-caret-left hocus:opacity-80 transition-opacity"
        @click="count--"
      />
      <p class="text-xl font-bold">
        {{ count }}
      </p>
      <button
        class="i-ph-caret-right hocus:opacity-80 transition-opacity"
        @click="count++"
      />
    </div>
  </div>
</template>

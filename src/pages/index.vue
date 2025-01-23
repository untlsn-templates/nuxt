<script setup lang="ts">
const count = ref(0);
const message = ref(undefined);
</script>

<template>
  <main class="content-center justify-items-center min-h-screen">
    <a
      href="https://nuxt.com"
      target="_blank"
      aria-label="Nuxt"
    >
      <IconNuxt />
    </a>
    <p>{{ message }}</p>
    <h1 class="dark:text-white font-semibold sm:text-5xl text-4xl text-black text-center">
      Welcome to Nuxt
    </h1>
    <div class="flex gap-2 items-center mt-8 mb-2">
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
    <div>
      <NuxtLink
        href="/greet"
        class="underline"
      >
        Greet form
      </NuxtLink>
    </div>
  </main>
</template>

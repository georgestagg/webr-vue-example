<script setup lang="ts">
import WebREditor from './components/WebREditor.vue'
</script>

<template>
  <header>
    <h1>Runnable code blocks in Vue.js</h1>
    <h2>Powered by webR</h2>
  </header>
  <main>
    <div>
      <p>
        The code in the following block can be modified and is runnable. Plotting should also work.
      </p>
      <WebREditor />
    </div>
  </main>
</template>

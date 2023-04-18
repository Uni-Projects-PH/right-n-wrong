<script setup lang="ts">
  import router from "@/router";
</script>

<template>
  <div class="headline-box">
    <h1 class="headliner">Ich hab's richtig, aber ich hab's falsch</h1>
    <hr class="rounded-divider">
    <button class="start-button" @click="router.push('/round-creation')">Runde erstellen</button>
  </div>

  <p id="starter-copyright">
    © 2023 by Pythagorion. This side is made with Vue.js and TypeScript.
  </p>
</template>

<style scoped>

#starter-copyright {
  margin-top: -8rem;
}

</style>
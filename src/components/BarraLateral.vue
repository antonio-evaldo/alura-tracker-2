<template>
  <header>
    <h1>
      <img src="../assets/logo.png" alt="Logo Alura Tracker" />
    </h1>
    <button @click="trocarTema" class="button">
      {{ modoEscuroAtivo ? "Desativar" : "Ativar" }} modo escuro
    </button>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BarraLateral",
  emits: ["aoTrocarTema"],
  
  data() {
    return {
      modoEscuroAtivo: false,
    }
  },

  methods: {
    trocarTema() {
      this.modoEscuroAtivo = !this.modoEscuroAtivo;
      this.$emit("aoTrocarTema", this.modoEscuroAtivo);
    },
  },
});
</script>

<style scoped>
header {
  padding: 1rem;
  background: #0d3b66;
  widows: 100%;
  height: 100vh;
  text-align: center;
}

@media only screen and (max-width: 768px) {
  header {
    padding: 2.5rem;
    height: auto;
  }
}
</style>
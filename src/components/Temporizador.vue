<template>
  <div class="is-flex is-align-items-center is-justify-content-space-between">
    <Cronometro :tempoEmSegundos="tempoEmSegundos" />

    <BotaoForm
      iconClass="fas fa-play"
      text="play"
      :disabled="cronometroAtivo"
      @click="iniciar"
    />

    <BotaoForm
      iconClass="fas fa-stop"
      text="stop"
      :disabled="!cronometroAtivo"
      @click="finalizar"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BotaoForm from "./BotaoForm.vue";
import Cronometro from "./Cronometro.vue";

export default defineComponent({
  name: "Temporizador",
  emits: ["aoFinalizarTemporizador"],
  components: { Cronometro, BotaoForm },

  data() {
    return {
      tempoEmSegundos: 0,
      cronometroID: 0,
      cronometroAtivo: false,
    };
  },

  methods: {
    iniciar() {
      this.cronometroAtivo = true;
      if (this.cronometroAtivo) {
        this.cronometroID = setInterval(() => {
          this.tempoEmSegundos++;
        }, 1000);
      }
    },
    finalizar() {
      clearInterval(this.cronometroID);
      this.cronometroAtivo = false;
      this.$emit("aoFinalizarTemporizador", this.tempoEmSegundos);
      this.tempoEmSegundos = 0;
    },
  },
});
</script>

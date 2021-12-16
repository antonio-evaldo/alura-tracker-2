<template>
  <div class="box formulario">
    <div class="columns">
      <div
        class="column is-8"
        role="form"
        aria-label="Formulário para criação de uma nova tarefa"
      >
        <input
          type="text"
          class="input"
          placeholder="Qual tarefa você deseja iniciar?"
          v-model="descricao"
        />
      </div>

      <div class="column">
        <Temporizador @aoFinalizarTemporizador="finalizarTarefa" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import ITarefa from "@/interfaces/ITarefa";
import { defineComponent } from "vue";
import Temporizador from "./Temporizador.vue";

export default defineComponent({
  name: "Formulario",
  components: { Temporizador },
  emits: ["aoFinalizarTarefa"],

  data() {
    return {
      descricao: "",
    };
  },

  methods: {
    finalizarTarefa(tempoDecorrido: number): void {
      const tarefa = {
        duracaoEmSegundos: tempoDecorrido,
        descricao: this.descricao,
      } as ITarefa;

      this.$emit("aoFinalizarTarefa", tarefa);

      this.descricao = "";
    },
  },
});
</script>

<style>
.formulario {
  color: var(--texto-primario);
  background-color: var(--bg-primario);
}
</style>
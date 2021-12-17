<template>
  <Formulario @aoFinalizarTarefa="adicionarTarefa" />

  <div class="lista">
    <Tarefa
      v-for="(tarefa, index) in tarefasOrdenadas"
      :key="index"
      :tarefa="tarefa"
    />

    <Box v-if="!tarefas.length">Ainda não há tarefas.</Box>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Box from "../components/Box.vue";
import Formulario from "../components/Formulario.vue";
import Tarefa from "../components/Tarefa.vue";
import ITarefa from "../interfaces/ITarefa";

export default defineComponent({
  name: "Tarefas",
  components: {
    Formulario,
    Tarefa,
    Box,
  },

  data() {
    return {
      tarefas: [] as ITarefa[]
    };
  },

  computed: {
    tarefasOrdenadas(): ITarefa[] {
      return [...this.tarefas].reverse();
    },
  },

  methods: {
    adicionarTarefa(tarefa: ITarefa) {
      this.tarefas.push(tarefa);
    },
  },
});
</script>

<style>
.lista {
  padding: 1.25rem;
}
</style>

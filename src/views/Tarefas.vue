<template>
  <Formulario />

  <div class="lista">
    <Tarefa
      v-for="(tarefa, index) in tarefas"
      :key="index"
      :tarefa="tarefa"
    />

    <Box v-if="!tarefas.length">Ainda não há tarefas.</Box>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

import { useStore } from "@/store";
import Box from "../components/Box.vue";
import Formulario from "../components/Formulario.vue";
import Tarefa from "../components/Tarefa.vue";
// import ITarefa from "../interfaces/ITarefa";

export default defineComponent({
  name: "Tarefas",
  components: {
    Formulario,
    Tarefa,
    Box,
  },

  setup() {
    const store = useStore();

    return {
      // store,
      tarefas: computed(() => store.state.tarefas),
    };
  },

  // computed: {
  //   tarefasOrdenadas(): ITarefa[] {
  //     return [...this.tarefas].reverse();
  //   },
  // },
});
</script>

<style>
.lista {
  padding: 1.25rem;
}
</style>

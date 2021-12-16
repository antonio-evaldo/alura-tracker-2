<template>
  <main
    class="columns is-gapless is-multiline"
    :class="{ 'modo-escuro': modoEscuroAtivo }"
  >
    <div class="column is-one-quarter">
      <BarraLateral
        @aoTrocarTema="trocarTema"
        :modoEscuroAtivo="modoEscuroAtivo"
      />
    </div>

    <div class="column is-three-quarter conteudo">
      <Formulario @aoFinalizarTarefa="adicionarTarefa" />

      <div class="lista">
        <Tarefa
          v-for="(tarefa, index) in tarefasOrdenadas"
          :key="index"
          :tarefa="tarefa"
        />

        <Box v-if="!tarefas.length">Ainda não há tarefas.</Box>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BarraLateral from "./components/BarraLateral.vue";
import Box from "./components/Box.vue";
import Formulario from "./components/Formulario.vue";
import Tarefa from "./components/Tarefa.vue";
import ITarefa from "./interfaces/ITarefa";

export default defineComponent({
  name: "App",
  components: {
    BarraLateral,
    Formulario,
    Tarefa,
    Box,
  },

  data() {
    return {
      tarefas: [] as ITarefa[],
      modoEscuroAtivo: false,
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
    trocarTema(modoEscuroAtivo: boolean) {
      this.modoEscuroAtivo = modoEscuroAtivo;
    },
  },
});
</script>

<style>
.lista {
  padding: 1.25rem;
}
main {
  --bg-primario: #fff;
  --texto-primario: #000;
}
main.modo-escuro {
  --bg-primario: #2b2d42;
  --texto-primario: #ddd;
}
.conteudo {
  background-color: var(--bg-primario);
}
</style>

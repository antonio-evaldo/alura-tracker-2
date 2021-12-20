import IProjeto from '@/interfaces/IProjeto';
import ITarefa from '@/interfaces/ITarefa';
import { InjectionKey } from 'vue';
import { createStore, Store, useStore as vuexUseStore } from 'vuex';
import { ADICIONA_PROJETO, ADICIONA_TAREFA, ALTERA_PROJETO, ALTERA_TAREFA, EXCLUI_PROJETO, EXCLUI_TAREFA } from './tipos-mutacoes';

interface Estado {
  projetos: IProjeto[],
  tarefas: ITarefa[],
}

export const key: InjectionKey<Store<Estado>> = Symbol();

export const store = createStore<Estado>({
  state: {
    projetos: [],
    tarefas: []
  },

  mutations: {
    [ADICIONA_PROJETO](state, nomeDoProjeto: string) {
      const projeto: IProjeto = {
        id: new Date().toISOString(),
        nome: nomeDoProjeto
      };

      state.projetos.push(projeto);
    },

    [ALTERA_PROJETO](state, projeto: IProjeto) {
      const index = state.projetos.findIndex(p => p.id === projeto.id);

      state.projetos[index] = projeto;

      state.tarefas = state.tarefas.map(
        tarefa => {
          if (tarefa.projeto.id === projeto.id) {
            return { ...tarefa, projeto };
          }

          return tarefa;
        }
      );
    },

    [EXCLUI_PROJETO](state, id: string) {
      state.projetos = state.projetos.filter(p => p.id !== id);
    },

    [ADICIONA_TAREFA](state, tarefa: ITarefa) {
      tarefa.id = new Date().toISOString();
      state.tarefas.push(tarefa);
    },

    [ALTERA_TAREFA](state, tarefa) {
      const index = state.tarefas.findIndex(t => t.id === tarefa.id);

      state.tarefas[index] = tarefa;
    },

    [EXCLUI_TAREFA](state, idTarefa) {
      state.tarefas = state.tarefas.filter(t => t.id !== idTarefa)
    }
  },
});

export function useStore(): Store<Estado> {
  return vuexUseStore(key);
}
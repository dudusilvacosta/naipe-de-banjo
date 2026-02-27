<template>
  <div class="q-pa-md">
    <q-card flat bordered>
      <q-card-section>
        <div class="text-h6">Totais por tipo de conteúdo</div>
      </q-card-section>

      <q-markup-table>
        <thead>
          <tr>
            <th class="text-left">Tipo</th>
            <th class="text-right">Total</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="item in totais" :key="item.tipo">
            <td class="text-left">{{ item.tipo }}</td>
            <td class="text-right">{{ item.total }}</td>
          </tr>
        </tbody>
      </q-markup-table>
    </q-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { supabase } from 'src/boot/supabase';

export default defineComponent({
  data() {
    return {
      totais: [] as { tipo: string; total: number }[],
    };
  },

  async mounted() {
    await this.carregarTotais();
  },

  methods: {
    async getTotal(tabela: string) {
      const { count, error } = await supabase
        .from(tabela)
        .select('*', { count: 'exact', head: true });

      if (error) {
        console.error('Erro ao buscar total de', tabela, error);
        return 0;
      }

      return count ?? 0;
    },

    async carregarTotais() {
      const fotos = await this.getTotal('albuns');
      const videos = await this.getTotal('videos');
      const cifras = await this.getTotal('musicas'); // 👈 corrigido
      const aulas = await this.getTotal('aulas');
      const downloads = await this.getTotal('downloads');

      this.totais = [
        { tipo: 'Albuns', total: fotos },
        { tipo: 'Vídeos', total: videos },
        { tipo: 'Cifras', total: cifras },
        { tipo: 'Aulas (temas)', total: aulas },
        { tipo: 'Downloads', total: downloads },
      ];
    },
  },
});
</script>

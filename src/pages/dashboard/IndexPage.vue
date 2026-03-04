<template>
  <div class="q-pa-md">
    <div class="row q-col-gutter-md">
      <div class="col-12 col-md-6">
        <q-card flat bordered>
          <q-card-section class="text-h6">Total Geral</q-card-section>
          <q-card-section>
            <div style="position: relative; height: 300px; width: 100%">
              <canvas ref="graficoTotal"></canvas>
            </div>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-12 col-md-6">
        <q-card flat bordered>
          <q-card-section class="text-h6">Álbuns de Fotos</q-card-section>
          <q-card-section>
            <div style="position: relative; height: 300px; width: 100%">
              <canvas ref="graficoAlbuns"></canvas>
            </div>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-12 col-md-6">
        <q-card flat bordered>
          <q-card-section class="text-h6">Vídeo Aulas</q-card-section>
          <q-card-section>
            <div style="position: relative; height: 300px; width: 100%">
              <canvas ref="graficoAulas"></canvas>
            </div>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-12 col-md-6">
        <q-card flat bordered>
          <q-card-section class="text-h6">Músicas</q-card-section>
          <q-card-section>
            <div style="position: relative; height: 300px; width: 100%">
              <canvas ref="graficoMusicas"></canvas>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, markRaw } from 'vue';
import { supabase } from 'src/boot/supabase';
import Chart from 'chart.js/auto';

interface Item {
  tipo: string;
  total: number;
}

// Refs dos Canvas
const graficoTotal = ref<HTMLCanvasElement | null>(null);
const graficoAlbuns = ref<HTMLCanvasElement | null>(null);
const graficoAulas = ref<HTMLCanvasElement | null>(null);
const graficoMusicas = ref<HTMLCanvasElement | null>(null);

// Dados
const totalTipo = ref<Item[]>([]);
const dadosAlbuns = ref<Item[]>([]);
const dadosAulas = ref<Item[]>([]);
const dadosMusicas = ref<Item[]>([]);

// Instâncias dos Gráficos
let instanciaGraficoTipo: Chart | null = null;
let instanciaGraficoAlbuns: Chart | null = null;
let instanciaGraficoAulas: Chart | null = null;
let instanciaGraficoMusicas: Chart | null = null;

// Cores reutilizáveis
const coresBackground = [
  'rgba(255, 99, 132, 0.6)',
  'rgba(54, 162, 235, 0.6)',
  'rgba(255, 206, 86, 0.6)',
  'rgba(75, 192, 192, 0.6)',
  'rgba(153, 102, 255, 0.6)',
  'rgba(255, 159, 64, 0.6)',
];

const coresBorda = [
  'rgb(255, 99, 132)',
  'rgb(54, 162, 235)',
  'rgb(255, 206, 86)',
  'rgb(75, 192, 192)',
  'rgb(153, 102, 255)',
  'rgb(255, 159, 64)',
];

const getTotal = async (tabela: string): Promise<number> => {
  const { count, error } = await supabase.from(tabela).select('*', { count: 'exact', head: true });
  if (error) return 0;
  return count ?? 0;
};

// Função genérica para criar os gráficos tipo Pie
const criarGraficoPie = (
  canvas: HTMLCanvasElement,
  labels: string[],
  data: number[],
  label: string,
) => {
  return markRaw(
    new Chart(canvas, {
      type: 'pie',
      data: {
        labels: labels,
        datasets: [
          {
            label: label,
            data: data,
            backgroundColor: coresBackground,
            borderColor: coresBorda,
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'bottom' },
        },
      },
    }),
  );
};

const renderizarGraficos = () => {
  if (graficoTotal.value) {
    if (instanciaGraficoTipo) instanciaGraficoTipo.destroy();
    instanciaGraficoTipo = criarGraficoPie(
      graficoTotal.value,
      totalTipo.value.map((t) => t.tipo),
      totalTipo.value.map((t) => t.total),
      'Total',
    );
  }

  if (graficoAlbuns.value) {
    if (instanciaGraficoAlbuns) instanciaGraficoAlbuns.destroy();
    instanciaGraficoAlbuns = criarGraficoPie(
      graficoAlbuns.value,
      dadosAlbuns.value.map((a) => a.tipo),
      dadosAlbuns.value.map((a) => a.total),
      'Fotos',
    );
  }

  if (graficoAulas.value) {
    if (instanciaGraficoAulas) instanciaGraficoAulas.destroy();
    instanciaGraficoAulas = criarGraficoPie(
      graficoAulas.value,
      dadosAulas.value.map((a) => a.tipo),
      dadosAulas.value.map((a) => a.total),
      'Vídeos',
    );
  }

  if (graficoMusicas.value) {
    if (instanciaGraficoMusicas) instanciaGraficoMusicas.destroy();
    instanciaGraficoMusicas = criarGraficoPie(
      graficoMusicas.value,
      dadosMusicas.value.map((m) => m.tipo),
      dadosMusicas.value.map((m) => m.total),
      'Músicas',
    );
  }
};

const carregarDados = async () => {
  // 1. Totalizadores
  const [albuns, aulas, downloads, musicas, notificacoes, videos] = await Promise.all([
    getTotal('albuns'),
    getTotal('aulas'),
    getTotal('downloads'),
    getTotal('musicas'),
    getTotal('notificacoes'),
    getTotal('videos'),
  ]);

  totalTipo.value = [
    { tipo: 'Álbuns', total: albuns },
    { tipo: 'Aulas', total: aulas },
    { tipo: 'Downloads', total: downloads },
    { tipo: 'Músicas', total: musicas },
    { tipo: 'Notificações', total: notificacoes },
    { tipo: 'Vídeos', total: videos },
  ];

  // 2. Detalhes Álbuns
  const { data: albunsData } = await supabase.from('albuns').select('nome, fotos');
  if (albunsData) {
    dadosAlbuns.value = albunsData.map((item) => ({
      tipo: item.nome,
      total: Array.isArray(item.fotos) ? item.fotos.length : 0,
    }));
  }

  // 3. Detalhes Aulas
  const { data: aulasData } = await supabase.from('aulas').select('nome, videos');
  if (aulasData) {
    dadosAulas.value = aulasData.map((item) => ({
      tipo: item.nome,
      total: Array.isArray(item.videos) ? item.videos.length : 0,
    }));
  }

  // 4. Detalhes Músicas (Repertório)
  const { data: musicasData } = await supabase.from('musicas').select('repertorio');
  if (musicasData) {
    const categorias = ['Cortejo', 'Roda', 'Extra'];
    dadosMusicas.value = categorias.map((cat) => ({
      tipo: cat,
      total: musicasData.filter((item) => item.repertorio === cat).length,
    }));
  }

  renderizarGraficos();
};

onMounted(() => {
  void carregarDados();
});
</script>

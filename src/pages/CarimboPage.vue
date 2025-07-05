<template>
  <div style="height: 1px">
    <q-linear-progress v-if="showProgress" indeterminate color="amber-7" />
  </div>
  <div class="q-pa-md">
    <q-breadcrumbs>
      <q-breadcrumbs-el label="Cifras" icon="music_note" />
      <q-breadcrumbs-el label="Carimbó" />
    </q-breadcrumbs>
  </div>
  <div class="q-pa-md">
    <q-list padding bordered class="rounded-borders">
      <!-- Carimbó da Ilha -->
      <q-expansion-item
        dense
        dense-toggle
        expand-separator
        label="Carimbó da Ilha"
        header-class="text-primary"
      >
        <q-card>
          <q-card-section>
            <p class="vermelho">
              F#m &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Bm
            </p>
            <p>Os versos de maiandeua carrego no coração</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; C#7
            </p>
            <p>Em minhas asas de vidro</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;F#m
            </p>
            <p>Canção de vento e de chão</p>
            <p class="vermelho">
              &nbsp; &nbsp; F#7 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Bm
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; E7 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; A
            </p>
            <p>Canoa, veloz maresia balança no mar lá fora</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; D &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              Bm &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; E7 &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; F#m
            </p>
            <p>Maré não está pra peixe já é hora de ir embora</p>
            <p class="vermelho">
              F#m &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Bm
            </p>
            <p>Vagueia no mar, vagueia vagueia na imensidão</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp;&nbsp; &nbsp; &nbsp;C#7 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; F#m
            </p>
            <p>Vaguei, linda sereia nos versos dessa canção</p>
            <p class="vermelho">
              F#m &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp;C#7
            </p>
            <p>Chico Braga eu me lembro batucando na rua</p>
            <p class="vermelho">
              F#m &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Bm &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; C#7 &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; F#m
            </p>
            <p>Falando que a princesa nasceu do sol e da lua</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;C#7 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;F#m
            </p>
            <p>Qualquer lugar da ilha encanta na pedra creia</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp;Bm &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; C#7 &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp;F#m
            </p>
            <p>Que a menina morena à noite, virou sereia</p>
            <p class="vermelho">
              F#m &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Bm
            </p>
            <p>Vagueia no mar, vagueia vagueia na imensidão</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp;C#7 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;F#m
            </p>
            <p>Vaguei, linda sereia nos versos dessa canção</p>
          </q-card-section>
        </q-card>
      </q-expansion-item>
      <!-- Carimbó do Marajó -->
      <q-expansion-item
        dense
        dense-toggle
        expand-separator
        label="Carimbó do Marajó"
        header-class="text-primary"
      >
        <q-card>
          <q-card-section>
            <p class="vermelho">
              Dm &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; A7
            </p>
            <p>Dança carimbó do Marajó</p>
            <p class="vermelho">
              A7 &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Dm &nbsp;&nbsp; D7
            </p>
            <p>Dança carimbó lá da barreira</p>
            <p class="vermelho">
              Gm &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; Dm
            </p>
            <p>Dança no balanço do tambor</p>
            <p class="vermelho">
              Bb &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;A7 &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Dm
            </p>
            <p>Dança carimbó da cachoeira</p>
            <p class="vermelho">
              D &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; A7
            </p>
            <p>A roda girando eu quero ver</p>
            <p class="vermelho">
              G &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; F#m
            </p>
            <p>Ver girando a roda que beleza</p>
            <p class="vermelho">
              G &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;D &nbsp;C &nbsp;B7
            </p>
            <p>Ver a flor no galho da roseira</p>
            <p class="vermelho">
              Em &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; A7 &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; D
            </p>
            <p>Pelo vento forte perfumar</p>
            <p class="vermelho">
              Dm &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;A7
            </p>
            <p>Dança no balanço do milheiro</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Dm
            </p>
            <p>Dança no rufar desse tambor</p>
            <p class="vermelho">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;A7</p>
            <p>Dança quando for raiando o dia</p>
            <p class="vermelho">
              Bb &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;A7
            </p>
            <p>No curral do boi do Piticaia</p>
            <p class="vermelho">
              Bb &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;A7
            </p>
            <p>Dançarina vem girando a saia</p>
          </q-card-section>
        </q-card>
      </q-expansion-item>
      <!-- Dança do carimbó (Dona Maria) -->
      <q-expansion-item
        dense
        dense-toggle
        expand-separator
        label="Dança do carimbó (Dona Maria)"
        header-class="text-primary"
      >
        <q-card>
          <q-card-section>
            <p class="vermelho">
              F &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              C7
            </p>
            <p>Dona Maria que dança é essa</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; F
            </p>
            <p>Que a gente dança só</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; C7
            </p>
            <p>Dona Maria que dança é essa</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; F
            </p>
            <p>É carimbó, é carimbó</p>
            <p class="vermelho">
              F &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; C7 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; F
            </p>
            <p>Braço pra cima, braço pra baixo</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Bb &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; F
            </p>
            <p>Agora eu já sei como é que é</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; C7
            </p>
            <p>Só falta bater a mão</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; F
            </p>
            <p>Batendo também o pé</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; C7
            </p>
            <p>Só falta bater a mão</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; F
            </p>
            <p>Batendo também o pé</p>
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-list>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useTimeout } from 'quasar';

const showProgress = ref(true);
const { registerTimeout } = useTimeout();

onMounted(() => {
  registerTimeout(() => {
    showProgress.value = false;
  }, 1000); // 1 segundo = 1000 ms
});
</script>

<style scoped>
p {
  margin: 0;
  padding: 0;
}
.vermelho {
  color: red;
}
</style>

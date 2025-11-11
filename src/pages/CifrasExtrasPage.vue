<template>
  <div style="height: 1px">
    <q-linear-progress v-if="showProgress" indeterminate color="amber-7" />
  </div>
  <div class="q-pa-md">
    <q-breadcrumbs class="q-mb-sm">
      <q-breadcrumbs-el label="Cifras" icon="music_note" />
      <q-breadcrumbs-el label="Extras" />
    </q-breadcrumbs>
    <p class="text-body1">Carimbó</p>
    <q-list padding bordered class="rounded-borders">
      <!-- Se Anamaitá -->
      <q-expansion-item
        dense
        dense-toggle
        expand-separator
        label="Se Anamaitá"
        header-class="text-primary"
      >
        <q-card>
          <q-card-section>
            <p class="autor">Coletivo Artivista Mairi</p>
            <p class="vermelho">Em</p>
            <p>Se anamaitá, (2X)</p>
            <p class="vermelho">Bm</p>
            <p>Borari, Borari,</p>
            <p class="vermelho">Em</p>
            <p>Se anamaitá, (2X)</p>
            <p class="vermelho">Bm</p>
            <p>Borari, Borari,</p>
            <p class="vermelho">Em</p>
            <p>Se anamaitá, (2X)</p>
            <p class="vermelho">Bm</p>
            <p>Arapium, Arapium,</p>
            <p class="vermelho">Em</p>
            <p>Se anamaitá, (2X)</p>
            <p class="vermelho">Bm</p>
            <p>Arapium, Arapium,</p>
            <p class="vermelho">Em</p>
            <p>Se anamaitá, (2X)</p>
            <p class="vermelho">Bm</p>
            <p>Tupayú</p>
            <p>Tapajó</p>
            <p>Tupinambá</p>
            <p>Munduruku</p>
            <p>Maytapú</p>
            Kumarú
          </q-card-section>
        </q-card>
      </q-expansion-item>
      <!-- Três Marias -->
      <q-expansion-item
        dense
        dense-toggle
        expand-separator
        label="Três Marias"
        header-class="text-primary"
      >
        <q-card>
          <q-card-section>
            <p class="autor">Iris da Selva</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              F#m &nbsp; D &nbsp; Bm
            </p>
            <p>Calma Maria</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; C#7
            </p>
            <p>Não conte assim seus planos</p>
            <p class="vermelho">
              F#m &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; D
            </p>
            <p>Pra qualquer pessoa</p>
            <p class="vermelho">Bm &nbsp; &nbsp; &nbsp; &nbsp; C#7</p>
            <p>Que atravessa a porta</p>
            <p class="vermelho">F#m &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; D</p>
            <p>Você não conhece</p>
            <p class="vermelho">Bm &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; C#7</p>
            <p>&nbsp; &nbsp; &nbsp; O território alheio</p>
            <p class="vermelho">
              F#m &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;D
            </p>
            <p>Você se entristece</p>
            <p class="vermelho">
              Bm &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; C#7
            </p>
            <p>&nbsp; &nbsp; &nbsp; E eu vou falar porque</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; F#m &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; D
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Bm
            </p>
            <p>Eu gosto quando você assovia</p>
            <p class="vermelho">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; C#7</p>
            <p>Tudo fica leve</p>
            <p class="vermelho">F#m &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; D</p>
            <p>Você não percebe mas</p>
            <p class="vermelho">
              &nbsp; &nbsp; Bm &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; C#7
            </p>
            <p>A casa inteira fica alegre</p>
            <p class="vermelho">F#m &nbsp; D &nbsp; &nbsp; &nbsp; &nbsp;Bm &nbsp; C#7</p>
            <p>Você &nbsp;tem a for &nbsp; ça</p>
            <p class="vermelho">F#m &nbsp; &nbsp; &nbsp; &nbsp; D &nbsp; Bm &nbsp; C#7</p>
            <p>Do vento</p>
            <p class="vermelho">
              F#m &nbsp; &nbsp;D &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Bm &nbsp; &nbsp;C#7 &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; F#m
            </p>
            <p>Você &nbsp; é mais forte do que não diz</p>
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
.autor {
  color: #666;
  font-style: italic;
}

p {
  margin: 0;
  padding: 0;
}

.vermelho {
  color: red;
}
</style>

<template>
  <div style="height: 1px">
    <q-linear-progress v-if="showProgress" indeterminate color="amber-7" />
  </div>
  <div class="q-pa-md">
    <q-breadcrumbs>
      <q-breadcrumbs-el label="Aulas" icon="school" />
    </q-breadcrumbs>
  </div>
  <div class="q-pa-md" style="max-width: 350px">
    <q-list bordered separator>
      <q-item clickable v-ripple to="/aulas/teoria-musical" exact>
        <q-item-section>
          <q-item-label>Teoria Musical</q-item-label>
        </q-item-section>
      </q-item>

      <q-item clickable v-ripple to="/aulas/acordes-cifras" exact>
        <q-item-section>
          <q-item-label>Formação de acordes e leitura de cifras</q-item-label>
        </q-item-section>
      </q-item>

      <q-item clickable v-ripple to="/aulas/graus-harmonia" exact>
        <q-item-section>
          <q-item-label>Graus musicais - Harmonia tonal</q-item-label>
        </q-item-section>
      </q-item>
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

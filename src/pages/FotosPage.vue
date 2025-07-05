<template>
  <div style="height: 1px">
    <q-linear-progress v-if="showProgress" indeterminate color="amber-7" />
  </div>
  <div class="q-pa-md" style="width: 100%; max-width: 40rem; margin: 0 auto">
    <q-breadcrumbs class="q-pb-sm">
      <q-breadcrumbs-el label="Fotos" icon="image" />
    </q-breadcrumbs>

    <q-list bordered separator>
      <q-item clickable v-ripple to="/fotos/junho25" exact>
        <q-item-section avatar>
          <q-avatar rounded size="100px">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-_7LtuZTxL6fgVcqKFVeZQug5LVCnx0uf6w&s"
            />
          </q-avatar>
        </q-item-section>
        <q-item-section>Arraial da Floresta</q-item-section>
      </q-item>

      <q-item clickable v-ripple to="/fotos/cirio24" exact>
        <q-item-section avatar>
          <q-avatar rounded size="100px">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgocwHYLok7UTfdtZrJzJV_9ANs7_o5r2oLw&s"
            />
          </q-avatar>
        </q-item-section>
        <q-item-section>Círio 2024</q-item-section>
      </q-item>

      <q-item clickable v-ripple to="/fotos/junho24" exact>
        <q-item-section avatar>
          <q-avatar rounded size="100px">
            <img
              src="https://correioparaense.com.br/wp-content/uploads/2023/04/ARRAIAL-DO-PAVULAGEM-1-927x1024.jpeg"
            />
          </q-avatar>
        </q-item-section>
        <q-item-section>Arraial do Saber</q-item-section>
      </q-item>

      <q-item clickable v-ripple to="/fotos/cirio23" exact>
        <q-item-section avatar>
          <q-avatar rounded size="100px">
            <img
              src="https://420576d5f5d16b12d00d53a989e5098a.cdn.bubble.io/f1694728956788x702714936218019800/376008234_18273573952153912_4564337670266088111_n.jpg"
            />
          </q-avatar>
        </q-item-section>
        <q-item-section>Círio 2023</q-item-section>
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

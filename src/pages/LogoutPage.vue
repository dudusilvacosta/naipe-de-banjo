<template>
  <q-tooltip :offset="[0, 8]">QSpinnerPie</q-tooltip>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from 'src/stores/auth';

const router = useRouter();
const authStore = useAuthStore();

async function logout() {
  await authStore.signOut();
  await router.push('/');
}

onMounted(() => {
  logout();
});
</script>

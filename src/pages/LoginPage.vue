<template>
  <div style="height: 1px">
    <q-linear-progress v-if="showProgress" indeterminate color="amber-7" />
  </div>
  <div class="login">
    <q-card class="example-item">
      <q-card-section>
        <div class="text-h6">Login</div>
      </q-card-section>

      <q-card-section>
        <q-input filled label="Username" v-model="username" />
        <q-input filled label="Password" type="password" v-model="password" class="q-mt-md" />
      </q-card-section>

      <q-card-actions align="right">
        <q-btn color="primary" label="Login" @click="handleLogin" />
      </q-card-actions>
    </q-card>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useTimeout } from 'quasar';

const showProgress = ref(true);
const { registerTimeout } = useTimeout();

const username = ref('');
const password = ref('');

const handleLogin = () => {
  // Lógica de login aquí
  console.log('Logging in with', username.value, password.value);
};

onMounted(() => {
  registerTimeout(() => {
    showProgress.value = false;
  }, 1000); // 1 segundo = 1000 ms
});
</script>

<style lang="sass" scoped>
.login
  height: 100vh
  display: flex
  justify-content: center
  align-items: center
  background-color: #f5f5f5

@media screen and (max-width: 600px)
  .example-item
    width: 100%
</style>

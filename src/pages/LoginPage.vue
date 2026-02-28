<template>
  <div class="login-page row items-center justify-center">
    <q-card class="q-pa-lg" style="width: 100%; max-width: 400px">
      <q-card-section class="text-center">
        <div class="text-h5 text-weight-bold">Login</div>
      </q-card-section>

      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
        <q-input
          filled
          v-model="email"
          label="Email"
          type="email"
          lazy-rules
          :rules="[(val) => !!val || 'Informe o email']"
        />

        <q-input
          filled
          v-model="senha"
          label="Senha"
          type="password"
          lazy-rules
          :rules="[(val) => !!val || 'Informe a senha']"
        />

        <q-btn label="Entrar" type="submit" color="primary" class="full-width" :loading="loading" />

        <div style="display: flex; justify-content: space-between">
          <q-btn flat label="Criar conta" class="full-width" @click="irParaCadastro" />
          <q-btn flat label="Voltar ao site" class="full-width" @click="irParaInicio" />
        </div>
      </q-form>
    </q-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from 'src/stores/auth';
import { Notify } from 'quasar';

const email = ref('');
const senha = ref('');
const loading = ref(false);

const router = useRouter();
const authStore = useAuthStore();

async function onSubmit() {
  if (!email.value || !senha.value) {
    Notify.create({
      type: 'negative',
      position: 'top',
      message: 'Por favor, preencha todos os campos',
    });
    return;
  }
  try {
    loading.value = true;
    await authStore.signIn(email.value, senha.value);
    await router.push('/dashboard');
  } catch (error) {
    Notify.create({
      type: 'negative',
      position: 'top',
      message: 'Erro ao fazer login' + (error instanceof Error ? error.message : ''),
    });
  } finally {
    loading.value = false;
  }
}

function onReset() {
  email.value = '';
  senha.value = '';
}

function irParaCadastro() {
  void router.push('/criar-conta');
}

function irParaInicio() {
  void router.push('/');
}
</script>

<style>
.login-page {
  min-height: 100vh;
}
</style>

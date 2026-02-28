<template>
  <div class="login-page row items-center justify-center">
    <q-card class="q-pa-lg" style="width: 100%; max-width: 400px">
      <q-card-section class="text-center">
        <div class="text-h5 text-weight-bold">Criar Conta</div>
      </q-card-section>

      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
        <q-input
          filled
          v-model="nome"
          label="Nome"
          lazy-rules
          :rules="[(val) => !!val || 'Informe o nome']"
        />

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

        <q-btn
          label="Criar conta"
          type="submit"
          color="primary"
          class="full-width"
          :loading="loading"
        />

        <div style="display: flex; justify-content: space-between">
          <q-btn flat label="Voltar ao login" class="full-width" @click="irParaLogin" />
          <q-btn flat label="Voltar ao site" class="full-width" @click="irParaInicio" />
        </div>
      </q-form>
    </q-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { supabase } from 'src/boot/supabase';
import { Notify } from 'quasar';

const nome = ref('');
const email = ref('');
const senha = ref('');
const loading = ref(false);

const router = useRouter();

async function onSubmit() {
  try {
    loading.value = true;

    if (!nome.value || !email.value || !senha.value) {
      Notify.create({
        type: 'negative',
        position: 'top',
        message: 'Por favor, preencha todos os campos',
      });
      return;
    }

    const { data, error } = await supabase.auth.signUp({
      email: email.value,
      password: senha.value,
    });

    if (error) throw error;

    const user = data.user;

    if (user) {
      const { error: profileError } = await supabase.from('profiles').insert([
        {
          id: user.id,
          nome: nome.value,
          email: email.value,
        },
      ]);

      if (profileError) throw profileError;
    }

    Notify.create({
      type: 'positive',
      position: 'top',
      message: 'Conta criada com sucesso! Verifique seu email.',
    });

    await router.push('/login');
  } catch (error) {
    Notify.create({
      type: 'negative',
      position: 'top',
      message: 'Erro ao criar conta: ' + (error instanceof Error ? error.message : ''),
    });
  } finally {
    loading.value = false;
  }
}

function onReset() {
  nome.value = '';
  email.value = '';
  senha.value = '';
}

function irParaLogin() {
  void router.push('/login');
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
